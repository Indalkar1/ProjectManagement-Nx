import React from 'react'

const DashboardProjectList = () => {
  const dummyProjects = [
    {
      id: 1,
      projectName: "Skyline Residency",
      projectCode: "PR-001",
      clientName: "Gokhale Constructions",
      cityName: "Ahmedabad",
      stateName: "Gujarat",
      startDateString: "May-27-2025",
      endDateString: "May-29-2026",
      projectStatusName: "In Progress",
      projectCostWithSymbol: "$ 100,000.00",
      image: "https://images.unsplash.com/photo-1770873263537-fbb8d39b6103?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      projectName: "Green Valley Mall",
      projectCode: "PR-002",
      clientName: "Urban Build Pvt Ltd",
      cityName: "Pune",
      stateName: "Maharashtra",
      startDateString: "Jun-10-2025",
      endDateString: "Dec-15-2026",
      projectStatusName: "Planning",
      projectCostWithSymbol: "$ 250,000.00",
      image: "https://images.unsplash.com/photo-1770666796705-6d8d8bdfd44d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="p-4 card rounded">
      <div className='flex justify-between items-center'>
        <div className='text-app-primary heading-2 align-center'>Active Projects</div>
        <div><button className="btn-secondary">+ New project</button></div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {dummyProjects.map((project) => (
          <div
            key={project.id}
            className="card rounded p-4 hover:shadow-sm transition border-2"
          >
            <div className="flex gap-4">

              {/* Project Image */}
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Project Details */}
              <div className="flex-1">

                {/* Top Row */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="heading-3">
                      {project.projectName}
                    </div>
                    <div className="flex gap-3 text-sm text-gray-500">
                      <div>  Code: {project.projectCode}  </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {project.cityName}, {project.stateName}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm font-medium">
                    {project.projectStatusName}
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    {project.startDateString} <span className='subheading-md'>to</span> {project.endDateString}
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardProjectList
