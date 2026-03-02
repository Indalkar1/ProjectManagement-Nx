import AllTaskStatusGraph from './AllTaskStatusGraph';
import DashboardProjectList from './DashboardProjectList';
import DashboardTaskList from './DashboardTaskList';
import RecentlyVisitedTask from './RecentlyVisitedTask';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="w-full h-full p-4 gap-4 flex flex-col overflow-hidden">

      {/* Row 1: Graph + Recently Visited */}
      <div className="flex gap-4 w-full min-w-0">
        <div className="min-w-0" style={{ flex: 6 }}>
          <AllTaskStatusGraph />
        </div>
        <div className="min-w-0" style={{ flex: 4 }}>
          <RecentlyVisitedTask />
        </div>
      </div>
      {/* Row 2: Project List + Task List */}
      <div className="flex gap-4 w-full min-w-0 overflow-hidden">
        <div className="w-1/2 min-w-0 overflow-hidden">
          <DashboardProjectList />
        </div>
        <div className="w-1/2 min-w-0 overflow-hidden">
          <DashboardTaskList />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;