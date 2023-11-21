import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loding } = useAuth();
  const { isAdmin, isLoading } = useAdmin();
  const location = useLocation();
  if (loding || isLoading) {
    return <h1>lodding.............</h1>;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to={"/signup"} state={{ from: location }} replace></Navigate>
  );
};

export default AdminRoute;
