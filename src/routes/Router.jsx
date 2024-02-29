import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Locations from "../pages/Locations";
import Menu from "../pages/Menu";
import Login from "../pages/dashboard/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import Categories from "../pages/dashboard/Categories";
import Category from "../pages/dashboard/Category";
import Controller from "../pages/dashboard/Controller";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/home/:branch", element: <Home /> },
			{ path: "/about-us/:branch", element: <About /> },
			{ path: "/locations/:branch", element: <Locations /> },
			{ path: "/menu/:branch", element: <Menu /> },
			{ path: "/gallery/:branch", element: <Gallery /> },
			{ path: "/contact-us/:branch", element: <Contact /> },
		],
	},
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{
				path: "/dashboard",
				element: (
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				),
			},
			{
				path: "/dashboard/categories",
				element: (
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				),
			},
			{ path: "/dashboard/controller", element: <Controller /> },
			{ path: "/dashboard/category/:category", element: <Category /> },
		],
	},
	{ path: "/dashboard/auth/login", element: <Login /> },
	// { path: "*", element: <Error /> },
]);
