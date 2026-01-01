import Dummy1 from '../Pages/Dummy1';
import SignIn from '../pages/SignIn';

const protectedRoutes = [
  { path: '/dummy2', component: <Dummy1 />, isShowLayout: true },
];

const publicRoutes = [
  { path: '/dummy1', component: <Dummy1 /> },
  { path: '/login', component: <SignIn /> },
];

export { protectedRoutes, publicRoutes };
