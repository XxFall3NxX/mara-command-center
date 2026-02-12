import ProjectsOverview from '@/components/dashboard/ProjectsOverview';
import TimelineView from '@/components/dashboard/TimelineView';
import TaskTracker from '@/components/dashboard/TaskTracker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ⚡ Mara Command Center
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Real-time project monitoring, tasks, and progress tracking
              </p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                All Systems Operational
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Last updated: {new Date().toLocaleString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Projects Overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-3xl mr-3">📊</span>
            Projects Status
          </h2>
          <ProjectsOverview />
        </section>

        {/* Task Tracker */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-3xl mr-3">✅</span>
            Tasks & Progress
          </h2>
          <TaskTracker />
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-3xl mr-3">📅</span>
            Growth Timeline
          </h2>
          <TimelineView />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div>
              Central Command Center v1.0 · Powered by Mara ⚡
            </div>
            <div>
              <a 
                href="https://trendlydigital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ← Back to Trendly Digital
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
