import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/masterlogin" />;
};

export default ProtectedRoute;
