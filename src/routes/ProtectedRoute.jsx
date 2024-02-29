import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { User } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
	const { user, loading: isLoading } = User();
	const location = useLocation();

	if (isLoading) {
		return <div>Loading....</div>;
	}
	if (typeof user === null) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return children;
};

export default ProtectedRoute;
