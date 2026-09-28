import { Navigate } from "react-router-dom";

// Admin Protected Route
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

// User Protected Route
function ProtectedUserRoute({ children }) {
  const token = localStorage.getItem("userToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export { ProtectedRoute, ProtectedUserRoute };