import React from "react";
import AdminLogin from "./adminLogin";

interface Props {
	loggedIn?: boolean;
}

const AdminPage = ({ loggedIn }: Props) => {
	const adminLogin = loggedIn ? undefined : <AdminLogin />;
	return <>{adminLogin}</>;
};

export default AdminPage;
