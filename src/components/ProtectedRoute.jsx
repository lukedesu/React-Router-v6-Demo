import { Outlet, Navigate } from "react-router-dom";
import Auth from "../services/user.service";

const ProtectedRoute = () => {
  if (!Auth.isAuthenticated()) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
