import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mara Command Center - Project Monitoring Dashboard",
  description: "Real-time monitoring, task tracking, and progress visualization for all Trendly Digital projects",
  keywords: ["dashboard", "monitoring", "projects", "tasks", "timeline"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
