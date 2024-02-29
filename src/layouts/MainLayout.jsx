import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Navbar from "../views/Navbar";
import { useDispatch } from "react-redux";
import { fetchFirebase } from "./../redux/menuSlice";

const MainLayout = () => {
	const navigate = useNavigate();
	const { branch } = useParams();
	const path = window.location.pathname;
	// console.log(path, branch, "path");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFirebase());
	}, []);

	useEffect(() => {
		if (!branch) {
			navigate("/home/patron1");
		}
		if (path.split("/").length === 1) {
			navigate("/home/patron1");
		}
		console.log(path, "hello");
	}, [branch, navigate, path]);

	return (
		<main>
			<Navbar />
			<Outlet />
		</main>
	);
};

export default MainLayout;
