import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Private = ({ children }) => {
  const { user, loding } = useAuth();
  const location = useLocation();
  if (loding) {
    return <h1>lodding.............</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/signup"} state={location.pathname}></Navigate>;
};

export default Private;
