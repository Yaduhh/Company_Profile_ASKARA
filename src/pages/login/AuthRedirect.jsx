import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthRedirect = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Jika sudah login, arahkan ke /master, jika belum login, tampilkan children
  if (isAuthenticated) {
    return <Navigate to="/master" />;
  }

  return children;
};

export default AuthRedirect;
