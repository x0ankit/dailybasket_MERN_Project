import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { user, loadingUser, setShowUserLogin } = useAppContext();

  if (loadingUser) return null; // or a loading spinner

  if (!user) {
    setShowUserLogin(true);
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;