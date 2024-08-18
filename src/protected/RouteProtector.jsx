import React, { useContext } from "react";
import { AuthContext } from "../context/ContextComponent";
import { Navigate } from "react-router-dom";

const RouteProtector = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
 <Navigate to="/login"></Navigate>;
};

export default RouteProtector;
