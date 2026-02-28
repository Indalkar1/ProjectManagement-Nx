import AllTaskStatusGraph from './AllTaskStatusGraph';
import DashboardProjectList from './DashboardProjectList';
import DashboardTaskList from './DashboardTaskList';
import RecentlyVisitedTask from './RecentlyVisitedTask';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="w-full h-full p-4 gap-4 flex flex-col">
      <div className="flex gap-4 w-full">
        <div style={{flex: 6}}>
          <AllTaskStatusGraph />
        </div>
        <div style={{flex: 4}}>
          <RecentlyVisitedTask />
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <DashboardTaskList />
        </div>
        <div>
          <DashboardProjectList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
