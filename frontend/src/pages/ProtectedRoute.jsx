import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, adminOnly = false }) => {
  const token = adminOnly ? localStorage.getItem("adminToken") : localStorage.getItem("token");
  return token ? element : <Navigate to={adminOnly ? "/admin/login" : "/login"} />;
};

export default ProtectedRoute;
