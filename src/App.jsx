import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TaskBoard from './components/TaskBoard'
import ActivityFeed from './components/ActivityFeed'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-[16rem_1fr_22rem] gap-6">
        <Sidebar />
        <section className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">Dashboard</h2>
              <div className="text-sm text-gray-500">Welcome back! Here’s what’s happening.</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="rounded-lg border bg-white p-4">
                <p className="text-xs text-gray-500">Open Tasks</p>
                <p className="text-2xl font-semibold mt-1">18</p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <p className="text-xs text-gray-500">In Progress</p>
                <p className="text-2xl font-semibold mt-1">7</p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <p className="text-xs text-gray-500">Completed This Week</p>
                <p className="text-2xl font-semibold mt-1">12</p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <p className="text-xs text-gray-500">Overdue</p>
                <p className="text-2xl font-semibold mt-1 text-rose-600">3</p>
              </div>
            </div>
          </div>

          <TaskBoard />
        </section>
        <aside className="hidden lg:block">
          <ActivityFeed />
        </aside>
      </main>
    </div>
  )
}

export default App
