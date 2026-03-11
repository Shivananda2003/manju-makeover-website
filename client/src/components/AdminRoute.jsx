import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const isAdmin = sessionStorage.getItem("adminAuth");

  if (!isAdmin) {
    return <Navigate to="/manju-admin-login" />;
  }

  return children;
}

export default AdminRoute;

