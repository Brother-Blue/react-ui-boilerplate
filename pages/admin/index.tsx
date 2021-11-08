import React from "react";
import AdminLogin from "./adminLogin";

interface Props {
	loggedIn?: boolean;
}

const AdminPage = ({ loggedIn }: Props) => {
	return <>{loggedIn && <AdminLogin />}</>;
};

export default AdminPage;
