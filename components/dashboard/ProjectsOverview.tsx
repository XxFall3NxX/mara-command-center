'use client';

interface Project {
  name: string;
  id: string;
  status: 'healthy' | 'warning' | 'down' | 'unknown';
  uptime: string;
  responseTime: string;
  lastDeploy: string;
  url?: string;
}

export default function ProjectsOverview() {
  const projects: Project[] = [
    {
      name: 'Trendly Digital Wrapper',
      id: 'trendlydigitalwrapper',
      status: 'healthy',
      uptime: '99.9%',
      responseTime: '~300ms',
      lastDeploy: 'Feb 12, 2026',
      url: 'https://trendlydigital.com'
    },
    {
      name: 'Mara Command Center',
      id: 'mara-dashboard',
      status: 'healthy',
      uptime: '100%',
      responseTime: '~150ms',
      lastDeploy: 'Just deployed',
      url: undefined
    }
  ];

  const statusConfig = {
    healthy: {
      icon: '🟢',
      text: 'Healthy',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      textColor: 'text-green-700 dark:text-green-300'
    },
    warning: {
      icon: '🟡',
      text: 'Warning',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      textColor: 'text-yellow-700 dark:text-yellow-300'
    },
    down: {
      icon: '🔴',
      text: 'Down',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      textColor: 'text-red-700 dark:text-red-300'
    },
    unknown: {
      icon: '⚪',
      text: 'Unknown',
      bgColor: 'bg-gray-50 dark:bg-gray-800',
      borderColor: 'border-gray-200 dark:border-gray-700',
      textColor: 'text-gray-700 dark:text-gray-300'
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => {
        const config = statusConfig[project.status];
        return (
          <div
            key={project.id}
            className={`relative rounded-xl border-2 ${config.borderColor} ${config.bgColor} p-6 transition-all hover:shadow-xl hover:scale-[1.02]`}
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.textColor}`}>
                <span className="mr-2">{config.icon}</span>
                {config.text}
              </span>
            </div>

            {/* Project Name */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-24">
              {project.name}
            </h3>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Uptime (24h)</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{project.uptime}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Response Time</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{project.responseTime}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Last Deploy</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{project.lastDeploy}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Quick Actions</div>
                <div className="flex space-x-2 mt-1">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Visit →
                    </a>
                  )}
                  <button className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Logs
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
