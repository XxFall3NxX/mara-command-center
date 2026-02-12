# ⚡ Mara Command Center

Central monitoring dashboard for all Trendly Digital projects.

## Features

- 📊 **Projects Overview** - Real-time health monitoring for all projects
- ✅ **Task Tracker** - Kanban-style task management (Done/In Progress/Blocked/To Do)
- 📅 **Timeline** - Visual progress tracking with color-coded events
- 🌓 **Dark Mode** - Full dark mode support
- 📱 **Responsive** - Works on all devices

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Docker (standalone mode)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Docker Build

```bash
docker build -t mara-command-center:latest .
docker run -d -p 3000:3000 --restart always --name mara-dashboard mara-command-center:latest
```

## Deployment

### Option 1: Free Tier EC2 (t2.micro)

1. Launch t2.micro instance (Ubuntu)
2. Install Docker
3. Clone this repo
4. Build and run Docker container
5. Configure security group (allow port 3000)
6. Point `mara.trendlydigital.com` DNS to instance

### Option 2: Existing EC2 (alongside trendlydigitalwrapper)

Run on different port (e.g., 3001):

```bash
docker run -d -p 3001:3000 --restart always --name mara-dashboard mara-command-center:latest
```

Configure reverse proxy or load balancer for subdomain routing.

## Environment Variables

None required! Dashboard works out of the box.

## License

Private - Trendly Digital

---

Built by Mara ⚡
