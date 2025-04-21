import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
    const { user, setShowUserLogin } = useAppContext();
  
    if (!user) {
      setShowUserLogin(true);
      return null; // or a loading indicator
    }
  
    return children;
  };

export default PrivateRoute;