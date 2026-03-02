import React from 'react'

const RecentlyVisitedTask = () => {
  const recentTasks = [
    { id: 1, name: 'Website Redesign', project: 'Marketing', status: 'In Progress' },
    { id: 2, name: 'API Integration', project: 'Backend', status: 'In Progress' },
    { id: 3, name: 'Database Migration', project: 'Infrastructure', status: 'Pending' },
    { id: 4, name: 'UI Component Library', project: 'Frontend', status: 'In Progress' },
    { id: 5, name: 'User Authentication', project: 'Security', status: 'Completed' },
    { id: 6, name: 'Performance Optimization', project: 'Backend', status: 'In Progress' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':  return 'bg-blue-100 text-blue-700'
      case 'Pending':      return 'bg-yellow-100 text-yellow-700'
      case 'Completed':    return 'bg-green-100 text-green-700'
      default:             return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="card rounded-lg px-4 pt-1 pb-3 flex flex-col w-full overflow-hidden">
      <h3 className="text-app-primary font-semibold text-gray-800 mb-3 flex-shrink-0">
        Recently Visited Tasks
      </h3>

      <div className="overflow-x-auto overflow-y-hidden scrollbar-custom">
        <div className="flex gap-3 pb-1">
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className=" card flex-shrink-0 flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
              style={{ width: '160px', height: '97px' }}
            >
              <div>
                <h4 className="text-app-primary-font font-semibold text-gray-900 leading-snug line-clamp-2">
                  {task.name}
                </h4>
                <p className="text-app-secondary-font text-gray-500">{task.project}</p>
              </div>
              <span
                className={`self-start inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentlyVisitedTask