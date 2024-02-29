import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../utils/authService';

const PrivateRoute = ({ children, role }) => {
  let location = useLocation();


  if (!auth.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && !auth.userHasRole(role)) {
    return <Navigate to="/AdminDashboard" replace />;
  }

  return children;
};

export default PrivateRoute;
