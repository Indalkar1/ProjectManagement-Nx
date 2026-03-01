import React, { useState } from "react";

const DashboardTaskList = () => {
  const [activeTab, setActiveTab] = useState("In Progress");

  const dummyTasks = [
    {
      id: "T-101",
      taskName: "Finalize Project UI v3",
      projectName: "Apex CRM",
      status: "In Progress",
      dueDate: "Oct 28, 2024",
      priority: "High",
    },
    {
      id: "T-102",
      taskName: "Update Database Schema",
      projectName: "Apex CRM",
      status: "In Progress",
      dueDate: "Oct 30, 2024",
      priority: "Medium",
    },
    {
      id: "T-103",
      taskName: "Prepare Marketing Copy",
      projectName: "Apex CRM",
      status: "In Progress",
      dueDate: "Oct 28, 2024",
      priority: "Low",
    },
    {
      id: "T-103",
      taskName: "Prepare Marketing Copy",
      projectName: "Apex CRM",
      status: "In Progress",
      dueDate: "Oct 28, 2024",
      priority: "Low",
    }, {
      id: "T-103",
      taskName: "Prepare Marketing Copy",
      projectName: "Apex CRM",
      status: "In Progress",
      dueDate: "Oct 28, 2024",
      priority: "Low",
    }, {
      id: "T-103",
      taskName: "Prepare Marketing Copy",
      projectName: "Apex CRM",
      status: "In Progress",
      dueDate: "Oct 28, 2024",
      priority: "Low",
    }, {
      id: "T-103",
      taskName: "Prepare Marketing Copy",
      projectName: "Apex CRM",
      status: "In Progress",
      dueDate: "Oct 28, 2024",
      priority: "Low",
    },
    {
      id: "T-104",
      taskName: "QA Regression Testing",
      projectName: "Apex CRM",
      status: "To Do",
      dueDate: "Nov 02, 2024",
      priority: "High",
    },
  ];

  const tabs = ["To Do", "In Progress", "Completed", "On Hold"];

  const filteredTasks = dummyTasks.filter(
    (task) => task.status === activeTab
  );

  const priorityStyles = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-600",
  };

  const statusBorder = {
    "To Do": "border-l-4 border-gray-400",
    "In Progress": "border-l-4 border-yellow-500",
    Completed: "border-l-4 border-green-500",
    "On Hold": "border-l-4 border-gray-500",
  };

  return (
    <div className="py-4 card rounded shadow-app-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex bg-app p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md body-sm font-medium transition-all ${activeTab === tab
                ? "bg-white card-elevated shadow-sm"
                : "text-secondary-sm hover:text-app-primary"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="btn-secondary">+ New Task</button>
      </div>

      <div className="h-[calc(100vh-365px)] overflow-y-auto px-4">
        {/* Task Grid */}
        {filteredTasks.length === 0 ? (
          <div className="text-center py-16 text-secondary-sm">
            No tasks in this status.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`card-elevated p-5 rounded-xl border shadow-sm hover:shadow-md transition-all duration-200 ${statusBorder[task.status]}`}
              >
                {/* Title + Priority */}
                <div className="flex justify-between items-start mb-4">
                  <h4 className="heading-3 leading-snug pr-3">
                    {task.taskName}
                  </h4>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityStyles[task.priority]}`}
                  >
                    {task.priority}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="body-xs text-secondary-sm">
                      Project
                    </span>
                    <span className="body-sm font-medium truncate max-w-[130px] text-right">
                      {task.projectName}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="body-xs text-secondary-sm">
                      Due Date
                    </span>
                    <span className="body-sm font-medium">
                      {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTaskList;