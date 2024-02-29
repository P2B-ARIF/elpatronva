import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { fetchFirebase } from "../redux/menuSlice";
import Sidebar from "../views/dashboard/Sidebar";

const DashboardLayout = () => {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	// const { menu, isLoading, categories } = useSelector(state => state.menu);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				console.log(user.email);
			} else if (pathname !== "/dashboard/auth/login") {
				navigate("/dashboard/auth/login");
			}
		});

		return () => {
			unSubscribe();
		};
	}, [pathname, navigate]);

	useEffect(() => {
		dispatch(fetchFirebase());
	}, []);

	return (
		<main className='flex'>
			<Sidebar
				isSideNavOpen={isSideNavOpen}
				setIsSideNavOpen={setIsSideNavOpen}
			/>
			<div
				className={`${
					isSideNavOpen ? "mt-5" : "mt-16"
				} lg:mt-5 px-5 flex-1 lg:ml-[288px]`}
			>
				<Outlet />
			</div>
		</main>
	);
};

export default DashboardLayout;
