import Dummy1 from '../Pages/Dummy1';
import SignIn from '../pages/SignIn';
import Dashboard from '../Pages/Dashboard/Dashboard';

const protectedRoutes = [
  { path: '/dashboard', component: <Dashboard />, isShowLayout: true },
];

const publicRoutes = [
  { path: '/dummy1', component: <Dummy1 /> },
  { path: '/login', component: <SignIn /> },
];

export { protectedRoutes, publicRoutes };
