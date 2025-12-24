import Dummy1 from '../Pages/Dummy1';

const protectedRoutes = [
  { path: '/dummy2', component: <Dummy1 />, isShowLayout: true },
];

const publicRoutes = [{ path: '/dummy1', component: <Dummy1 /> }];

export { protectedRoutes, publicRoutes };
