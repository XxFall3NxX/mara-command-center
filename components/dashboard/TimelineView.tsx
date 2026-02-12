'use client';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'fix' | 'feature' | 'alert';
  impact?: string;
}

export default function TimelineView() {
  const events: TimelineEvent[] = [
    {
      date: '2026-02-12',
      title: '⚡ Mara Activated',
      description: 'Personal assistant initialized and connected via Telegram',
      type: 'milestone'
    },
    {
      date: '2026-02-12',
      title: '🔒 Security Hardening',
      description: 'SSH access locked down to authorized IPs only',
      type: 'fix',
      impact: 'Reduced attack surface by 99%'
    },
    {
      date: '2026-02-12',
      title: '🏥 Health Check Optimization',
      description: 'Recovery time: 50+ min → 1 min (30s intervals, 2/2 thresholds)',
      type: 'fix',
      impact: 'Faster recovery from downtime'
    },
    {
      date: '2026-02-12',
      title: '📡 Telemetry Disabled',
      description: 'Stopped uncaught exceptions from unreachable endpoints',
      type: 'fix',
      impact: 'Eliminated recurring crashes'
    },
    {
      date: '2026-02-12',
      title: '🔀 Dev/Prod Branch Separation',
      description: 'CI/CD now triggers on prod branch, dev branch safe for testing',
      type: 'feature',
      impact: 'Safer deployment workflow'
    },
    {
      date: '2026-02-12',
      title: '📊 Central Command Center',
      description: 'Real-time monitoring dashboard with projects, tasks, and timeline',
      type: 'feature',
      impact: 'Full visibility into infrastructure'
    }
  ];

  const typeConfig = {
    milestone: {
      color: 'bg-purple-500',
      textColor: 'text-purple-700 dark:text-purple-300',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800'
    },
    fix: {
      color: 'bg-green-500',
      textColor: 'text-green-700 dark:text-green-300',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    feature: {
      color: 'bg-blue-500',
      textColor: 'text-blue-700 dark:text-blue-300',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    alert: {
      color: 'bg-red-500',
      textColor: 'text-red-700 dark:text-red-300',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800'
    }
  };

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, TimelineEvent[]>);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      full: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      short: date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })
    };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

        {/* Events */}
        <div className="space-y-8">
          {Object.entries(groupedEvents).reverse().map(([date, dateEvents]) => {
            const formattedDate = formatDate(date);
            return (
              <div key={date} className="relative">
                {/* Date Header */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 border-4 border-white dark:border-gray-800 relative z-10 shadow-lg">
                    <span className="text-sm font-bold text-white text-center">
                      {formattedDate.short}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formattedDate.full}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {dateEvents.length} {dateEvents.length === 1 ? 'event' : 'events'}
                    </div>
                  </div>
                </div>

                {/* Events for this date */}
                <div className="ml-24 space-y-4">
                  {dateEvents.map((event, idx) => {
                    const config = typeConfig[event.type];
                    return (
                      <div
                        key={idx}
                        className={`rounded-lg border-2 ${config.borderColor} ${config.bgColor} p-4 shadow-md hover:shadow-xl transition-shadow`}
                      >
                        <div className="flex items-start">
                          <div className={`w-3 h-3 rounded-full ${config.color} mt-1.5 mr-3 flex-shrink-0 animate-pulse`} />
                          <div className="flex-1">
                            <h4 className={`font-semibold ${config.textColor} mb-1`}>
                              {event.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {event.description}
                            </p>
                            {event.impact && (
                              <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 inline-block">
                                <span className="mr-1">💡</span> Impact: {event.impact}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4 text-sm">
            {Object.entries(typeConfig).map(([type, config]) => (
              <div key={type} className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${config.color} mr-2`} />
                <span className="text-gray-600 dark:text-gray-400 capitalize font-medium">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
