import { protectedRoutes, publicRoutes } from './routes';
import { Routes, Route, Navigate } from 'react-router-dom';
const ProtectedLayout = ({ component }) => {
  // Add your authentication logic here
  // localStorage
  const isAuthenticated = true;
  return isAuthenticated ? (
    <div>{component}</div>
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
            element={<ProtectedLayout component={route.component} />}
          />
        ))}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}
export default App;
