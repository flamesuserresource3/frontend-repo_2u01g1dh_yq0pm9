import { CheckCircle, Clock, AlertCircle, MessageSquare } from 'lucide-react'

const priorities = {
  high: {
    label: 'High',
    color: 'bg-rose-100 text-rose-700 border-rose-200',
    icon: AlertCircle,
  },
  medium: {
    label: 'Medium',
    color: 'bg-amber-100 text-amber-700 border-amber-200',
    icon: Clock,
  },
  low: {
    label: 'Low',
    color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    icon: CheckCircle,
  },
}

function TaskCard({ title, description, assignees = [], comments = 0, priority = 'medium', due = 'Today' }) {
  const PIcon = priorities[priority].icon
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <h4 className="font-medium text-gray-800 leading-tight pr-2">{title}</h4>
        <span className={`ml-2 inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full border ${priorities[priority].color}`}>
          <PIcon className="h-3.5 w-3.5" /> {priorities[priority].label}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex -space-x-2">
          {assignees.map((a, i) => (
            <img
              key={i}
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(a)}`}
              alt={a}
              className="h-7 w-7 rounded-full ring-2 ring-white shadow"
            />
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="inline-flex items-center gap-1"><MessageSquare className="h-4 w-4" /> {comments}</div>
          <div>{due}</div>
        </div>
      </div>
    </div>
  )
}

function Column({ title, count, children }) {
  return (
    <div className="bg-gray-50/60 rounded-lg border border-gray-200 p-3 flex flex-col gap-3 min-h-[320px]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded px-2 py-0.5">{count}</span>
      </div>
      {children}
    </div>
  )
}

export default function TaskBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <Column title="To Do" count={3}>
        <TaskCard title="Design project kickoff deck" description="Create a concise deck outlining scope, timelines, and team roles." assignees={["Alex", "Priya"]} comments={4} priority="high" due="Tomorrow" />
        <TaskCard title="Set up repository structure" description="Initialize monorepo and define CI checks for PRs." assignees={["Sam"]} comments={2} priority="medium" due="Fri" />
        <TaskCard title="Collect requirements" description="Gather user stories from stakeholders and prioritize MVP features." assignees={["Dana", "Ike"]} comments={5} priority="low" due="Next Mon" />
      </Column>
      <Column title="In Progress" count={2}>
        <TaskCard title="Implement auth flow" description="Add secure login, registration, and role-based access control." assignees={["Alex"]} comments={3} priority="high" due="Today" />
        <TaskCard title="Build task board UI" description="Create responsive columns and cards with drag handles." assignees={["Priya", "Sam"]} comments={1} priority="medium" due="Thu" />
      </Column>
      <Column title="Done" count={1}>
        <TaskCard title="Project planning" description="High-level roadmap and milestones finalized with team buy-in." assignees={["Dana"]} comments={6} priority="low" due="Yesterday" />
      </Column>
    </div>
  )
}
