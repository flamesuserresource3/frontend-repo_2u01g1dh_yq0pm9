import { Bell, MessageSquare, CheckCircle } from 'lucide-react'

const Item = ({ icon: Icon, title, time, detail }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
      <Icon className="h-4 w-4" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-gray-800 font-medium truncate">{title}</p>
      <p className="text-xs text-gray-500 truncate">{detail}</p>
    </div>
    <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
  </div>
)

export default function ActivityFeed() {
  return (
    <div className="rounded-lg border bg-white p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">Recent Activity</h3>
        <button className="text-xs text-indigo-600 hover:text-indigo-700">View all</button>
      </div>
      <div className="space-y-3">
        <Item icon={MessageSquare} title="New comment on: Implement auth flow" time="2m" detail="Priya: Let's add social login next sprint." />
        <Item icon={Bell} title="Task assigned: Build task board UI" time="1h" detail="Alex assigned to you" />
        <Item icon={CheckCircle} title="Task completed: Project planning" time="3h" detail="Dana moved task to Done" />
        <Item icon={MessageSquare} title="New comment on: Design kickoff deck" time="Yesterday" detail="Sam: Draft looks solid, pushing updates." />
      </div>
    </div>
  )
}
