import { Button, List, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaListCheck } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../context/UserAuthContext";
import logo from "./../../assets/logo.png";
import { CreateCategory } from "./CreateCategory";
import { CreateMenu } from "./CreateMenu";
import { IoSettingsOutline } from "react-icons/io5";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import uniqid from "uniqid";

export default function Sidebar({ isSideNavOpen, setIsSideNavOpen }) {
	const [selected, setSelected] = useState(1);
	const setSelectedItem = value => setSelected(value);
	const navigate = useNavigate();
	const { logoutUser } = User();

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 1024) {
				setIsSideNavOpen(true);
			} else if (!isSideNavOpen && window.innerWidth <= 1023) {
				setIsSideNavOpen(false);
			}
		});
		return () => {
			window.removeEventListener("resize", () => {
				console.log("removed");
			});
		};
	}, [isSideNavOpen, setIsSideNavOpen]);

	useEffect(() => {
		if (window.innerWidth > 1024) {
			setIsSideNavOpen(true);
		} else if (!isSideNavOpen && window.innerWidth <= 1023) {
			setIsSideNavOpen(false);
		}
	}, []);

	const handleSignOut = async () => {
		await logoutUser();
		toast.success("Log Out To Dashboard..!");
		navigate("/");
	};

	// const handlePush = async () => {
	// 	const categories = [
	// 		{
	// 			name: "Appetizers",
	// 			slug: "appetizers",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Soups, Salads & Sandwiches",
	// 			slug: "soups-salads-sandwiches",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Lunch Special",
	// 			slug: "lunch-special",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Quesadillas",
	// 			slug: "quesadillas",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Enchiladas",
	// 			slug: "enchiladas",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Fajitas",
	// 			slug: "fajitas",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Burritos",
	// 			slug: "burritos",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Fajitas",
	// 			slug: "fajitas",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Tacos Mexicanos",
	// 			slug: "tacos-Mexicanos",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Steaks",
	// 			slug: "steaks",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Seafood",
	// 			slug: "seafood",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Chicken",
	// 			slug: "chicken",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Pork",
	// 			slug: "pork",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "Create your own combo",
	// 			slug: "create-your-own-combo",
	// 			imgUrl: null,
	// 		},
	// 		{
	// 			name: "kids-Menu",
	// 			slug: "beer-wine",
	// 			imgUrl: null,
	// 		},
	// 	];
	// 	const uid2 = uniqid();
	// 	await setDoc(doc(db, "elpatronva", "categories"), {
	// 		[uid2]: categories[0],
	// 	});

	// 	for (let i = 1; i < categories.length; i++) {
	// 		const el = categories[i];
	// 		const uid = uniqid();

	// 		const usersCollectionRef = collection(db, "elpatronva");
	// 		const userDocRef = doc(usersCollectionRef, "categories");
	// 		await updateDoc(userDocRef, { [uid]: el });
	// 		console.log("categories data added successfully.", el);
	// 	}
	// };

	return (
		<>
			<button
				title='Side navigation'
				type='button'
				className={`visible fixed right-5 top-5 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
					isSideNavOpen
						? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
						: ""
				}`}
				aria-haspopup='menu'
				aria-label='Side navigation'
				aria-expanded={isSideNavOpen ? " true" : "false"}
				aria-controls='nav-menu-4'
				onClick={() => setIsSideNavOpen(!isSideNavOpen)}
			>
				<HiMenu className='w-[40px] h-[40px] p-[5px]' />
			</button>
			{/* sm:relative lg:relative */}
			{/*  <!-- Side Navigation --> */}
			<aside
				id='nav-menu-4'
				aria-label='Side navigation'
				className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 min-h-screen ${
					isSideNavOpen ? "translate-x-0 shadow-lg" : "-translate-x-full"
				}`}
			>
				<div className='flex flex-col items-center gap-4 border-b border-slate-200 p-3 relative'>
					<div className='shrink-0'>
						<Link
							to='/dashboard'
							className='relative flex w-[100px] h-[100px] items-center justify-center rounded-full text-white'
						>
							<img src={logo} alt='user name' title='user name' className='' />
						</Link>
					</div>
					<div className='flex min-h-[1rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center'>
						<h4 className='w-full uppercase truncate font-poppins text-base text-gray-800 font-bold'>
							elpatronva
						</h4>
						<IoMdClose
							size={30}
							onClick={() => setIsSideNavOpen(false)}
							className='absolute top-5 right-2 hidden sm:block lg:hidden cursor-pointer'
						/>
					</div>
				</div>
				<nav
					aria-label='side navigation'
					className='flex-1 divide-y divide-slate-100 overflow-auto '
				>
					<div>
						<ul className='flex flex-1 flex-col gap-1 py-3 pl-3 mx-2'>
							<List className='flex flex-col gap-5'>
								<Link to={"/dashboard"}>
									<ListItem
										selected={selected === 1}
										onClick={() => setSelectedItem(1)}
										className='font-poppins font-medium flex items-center'
									>
										<LuLayoutDashboard className='mx-2' />
										Dashboard
									</ListItem>
								</Link>
								{/* <button onClick={handlePush}>click</button> */}
								<Link to={"/dashboard/categories"}>
									<ListItem
										selected={selected === 2}
										onClick={() => setSelectedItem(2)}
										className='font-poppins font-medium flex items-center'
									>
										<FaListCheck className='mx-2' />
										Categories
									</ListItem>
								</Link>
								<Link to={"/dashboard/controller"}>
									<ListItem
										selected={selected === 3}
										onClick={() => setSelectedItem(3)}
										className='font-poppins font-medium flex items-center'
									>
										<IoSettingsOutline className='mx-2' />
										Controller
									</ListItem>
								</Link>

								<CreateMenu />

								<CreateCategory />
							</List>
						</ul>
					</div>
				</nav>
				{/* <CreateMenu /> */}
				{/* <CreateMenuModal isOpen={createMenu} setIsOpen={setCreateMenu} /> */}

				<footer className='border-t border-slate-200 p-3'>
					<Button
						onClick={handleSignOut}
						colorScheme='red'
						variant='outline'
						className='font-poppins py-[10px] w-full'
						size='sm'
					>
						Log Out
					</Button>
				</footer>
			</aside>

			{/*  <!-- Backdrop --> */}
			<div
				className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
					isSideNavOpen ? "block" : "hidden"
				}`}
				onClick={() => setIsSideNavOpen(false)}
			></div>
			{/*  <!-- End Side navigation menu with user profile and alert message --> */}
		</>
	);
}
