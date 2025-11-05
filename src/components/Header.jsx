import { Search, Bell, Plus, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">TM</div>
          <span className="hidden sm:block text-lg font-semibold text-gray-800">Task Manager</span>
        </div>
        <div className="flex items-center gap-3 w-full max-w-xl mx-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks, people, projects..."
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 bg-white/80"
            />
          </div>
          <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium">
            <Plus className="h-4 w-4" />
            New Task
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Notifications" className="relative p-2 rounded-md hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-red-500 rounded-full" />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  )
}
