'use client';

interface Task {
  id: string;
  title: string;
  status: 'done' | 'in-progress' | 'blocked' | 'todo';
  owner: 'mara' | 'migz' | 'both';
  priority: 'high' | 'medium' | 'low';
  date: string;
}

export default function TaskTracker() {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Fix health check configuration',
      status: 'done',
      owner: 'mara',
      priority: 'high',
      date: '2026-02-12'
    },
    {
      id: '2',
      title: 'Disable telemetry to prevent crashes',
      status: 'done',
      owner: 'mara',
      priority: 'high',
      date: '2026-02-12'
    },
    {
      id: '3',
      title: 'Lock down SSH security',
      status: 'done',
      owner: 'mara',
      priority: 'high',
      date: '2026-02-12'
    },
    {
      id: '4',
      title: 'Separate dev/prod deployment branches',
      status: 'done',
      owner: 'mara',
      priority: 'high',
      date: '2026-02-12'
    },
    {
      id: '5',
      title: 'Build Central Command Center',
      status: 'done',
      owner: 'mara',
      priority: 'high',
      date: '2026-02-12'
    },
    {
      id: '6',
      title: 'Address 13 security vulnerabilities',
      status: 'todo',
      owner: 'both',
      priority: 'medium',
      date: 'TBD'
    },
    {
      id: '7',
      title: 'Investigate external IP connection errors',
      status: 'todo',
      owner: 'mara',
      priority: 'low',
      date: 'TBD'
    },
    {
      id: '8',
      title: 'Upgrade EC2 to t3.small (2GB RAM)',
      status: 'todo',
      owner: 'both',
      priority: 'medium',
      date: 'TBD'
    },
    {
      id: '9',
      title: 'Set up mara.trendlydigital.com subdomain',
      status: 'in-progress',
      owner: 'mara',
      priority: 'high',
      date: '2026-02-12'
    },
    {
      id: '10',
      title: 'Deploy Command Center to free tier EC2',
      status: 'in-progress',
      owner: 'mara',
      priority: 'high',
      date: '2026-02-12'
    }
  ];

  const statusConfig = {
    done: { icon: '✅', text: 'Done', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    'in-progress': { icon: '🔄', text: 'In Progress', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    blocked: { icon: '⏸️', text: 'Blocked', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
    todo: { icon: '📋', text: 'To Do', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' }
  };

  const priorityConfig = {
    high: { text: 'High', color: 'text-red-600 dark:text-red-400' },
    medium: { text: 'Medium', color: 'text-yellow-600 dark:text-yellow-400' },
    low: { text: 'Low', color: 'text-green-600 dark:text-green-400' }
  };

  const ownerConfig = {
    mara: { text: '⚡ Mara', color: 'text-purple-600 dark:text-purple-400' },
    migz: { text: '👤 Migz', color: 'text-blue-600 dark:text-blue-400' },
    both: { text: '🤝 Both', color: 'text-gray-600 dark:text-gray-400' }
  };

  const groupedTasks = {
    done: tasks.filter(t => t.status === 'done'),
    'in-progress': tasks.filter(t => t.status === 'in-progress'),
    blocked: tasks.filter(t => t.status === 'blocked'),
    todo: tasks.filter(t => t.status === 'todo')
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {Object.entries(groupedTasks).map(([status, statusTasks]) => {
        const config = statusConfig[status as keyof typeof statusConfig];
        return (
          <div key={status} className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">{config.icon}</span>
                {config.text}
              </h3>
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                {statusTasks.length}
              </span>
            </div>
            <div className="space-y-3">
              {statusTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    {task.title}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className={ownerConfig[task.owner].color}>
                      {ownerConfig[task.owner].text}
                    </span>
                    <span className={priorityConfig[task.priority].color}>
                      {priorityConfig[task.priority].text}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {task.date}
                  </div>
                </div>
              ))}
              {statusTasks.length === 0 && (
                <div className="text-center text-sm text-gray-400 dark:text-gray-500 py-8">
                  No tasks yet
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
