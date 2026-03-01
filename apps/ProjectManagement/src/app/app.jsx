import { protectedRoutes, publicRoutes } from './routes';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './commmon/Navbar';
import { useProjectContext } from './context/ProjectContextProvider';

const ProtectedLayout = ({ route }) => {
  // Add your authentication logic here
  // localStorage
  const isAuthenticated = true;
  const { theme, setTheme } = useProjectContext();
  return isAuthenticated ? (
    <div >
      {route?.isShowLayout && <Navbar theme={theme} setTheme={setTheme}/>}
      {route.component}
    </div>
  ) : (
    <Navigate to="/dummy1" replace />
  );
};

export function App() {
  const { theme } = useProjectContext();

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
