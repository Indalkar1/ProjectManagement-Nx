import { protectedRoutes, publicRoutes } from './routes';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './commmon/Navbar';

const ProtectedLayout = ({ route }) => {
  // Add your authentication logic here
  // localStorage
  const isAuthenticated = true;
  return isAuthenticated ? (
    <div>
     {route?.isShowLayout && <Navbar />}
      {route.component}
    </div>
  ) : (
    <Navigate to="/dummy1" replace />
  );
};

export function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}

        {protectedRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedLayout route={route} />}
          />
        ))}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}
export default App;
