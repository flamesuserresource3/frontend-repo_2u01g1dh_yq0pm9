import { LayoutDashboard, ListTodo, Calendar, Settings } from 'lucide-react'

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    active ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
  }`}>
    <Icon className="h-5 w-5" />
    {label}
  </button>
)

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r bg-white/60">
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Overview</p>
        <nav className="space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={ListTodo} label="My Tasks" />
          <NavItem icon={Calendar} label="Calendar" />
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100">
          <p className="text-sm font-medium text-indigo-800">Tip</p>
          <p className="text-xs text-indigo-700/90 mt-1">Use filters to find tasks faster.</p>
        </div>
        <div className="mt-4">
          <NavItem icon={Settings} label="Settings" />
        </div>
      </div>
    </aside>
  )
}
