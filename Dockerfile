# ===========================
# Stage 1: Builder
# ===========================
FROM node:20-alpine3.18 as builder

# Install dumb-init
RUN apk add --no-cache dumb-init

# Set environment variables
ENV NODE_ENV production
ENV PORT 3001
ENV NEXT_TELEMETRY_DISABLED 1

# Set the working directory
WORKDIR /app

# Copy package files first for layer caching
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Copy all source code
COPY . .

# Build Next.js (standalone mode)
RUN npm run build

# ===========================
# Stage 2: Runner
# ===========================
FROM node:20-alpine3.18 as runner

# Install dumb-init and curl for healthchecks
RUN apk add --no-cache dumb-init curl

# Set environment variables
ENV NODE_ENV production
ENV PORT 3001
ENV NEXT_TELEMETRY_DISABLED 1

# Set the working directory
WORKDIR /app

# Copy only necessary files from builder for standalone mode
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Use a non-root user for security
USER node

# Expose the application port
EXPOSE 3001

# Use dumb-init as the entry point to handle PID 1 correctly
CMD ["dumb-init", "node", "server.js"]

# Add a health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
  CMD curl -fs http://localhost:3001/ || exit 1
