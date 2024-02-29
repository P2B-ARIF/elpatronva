import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link, NavLink, useParams } from "react-router-dom";
import NavMenuModal from "../components/NavMenuModal";
import logo from "./../assets/logo.png";
import TextSlider from "../components/TextSlider";

const Navbar = () => {
	const { branch } = useParams();
	const [branchCount, setBranchCount] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setBranchCount(prevCount => (prevCount >= 3 ? 1 : prevCount + 1));
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const patronBranch1 = [
		{ path: "/home/patron1", nav: "Home" },
		{ path: "/about-us/patron1", nav: "About Us" },
		{ path: "/locations/patron1", nav: "Locations" },
		{ path: "/menu/patron1", nav: "Menu" },
		{ path: "/gallery/patron1", nav: "Food Gallery" },
		{ path: "/contact-us/patron1", nav: "Contact Us" },
	];
	const patronBranch2 = [
		{ path: "/home/patron2", nav: "Home" },
		{ path: "/about-us/patron2", nav: "About Us" },
		{ path: "/locations/patron2", nav: "Locations" },
		{ path: "/menu/patron2", nav: "Menu" },
		{ path: "/gallery/patron2", nav: "Food Gallery" },
		{ path: "/contact-us/patron2", nav: "Contact Us" },
	];
	const patronBranch3 = [
		{ path: "/home/patron3", nav: "Home" },
		{ path: "/about-us/patron3", nav: "About Us" },
		{ path: "/locations/patron3", nav: "Locations" },
		{ path: "/menu/patron3", nav: "Menu" },
		{ path: "/gallery/patron3", nav: "Food Gallery" },
		{ path: "/contact-us/patron3", nav: "Contact Us" },
	];

	const renderNavLink = nav => (
		<li key={nav.path} className='flex items-center'>
			{/* <Link
				to={nav.path}
				className='text-whiteColor font-semibold text-lg tracking-wider uppercase whitespace-nowrap'
			>
				{nav.nav}
			</Link> */}
			<NavLink
				to={nav.path}
				// onClick={() => setShow(false)}
				className={({ isActive, isPending }) =>
					isPending
						? ""
						: isActive
						? "text-gray-400 border-b font-semibold text-lg tracking-wider uppercase whitespace-nowrap"
						: "text-whiteColor font-semibold text-lg tracking-wider uppercase whitespace-nowrap"
				}
			>
				{nav.nav}
			</NavLink>
		</li>
	);

	return (
		<div className='container mx-auto relative z-20'>
			<div className='flex items-center p-3 md:p-10'>
				<div className='flex items-center gap-3 md:gap-5'>
					<IconButton
						icon={<MdLocationOn />}
						isRound={true}
						bgColor={"#ba9b77"}
						boxSize={12}
						fontSize={20}
						color={"whitesmoke"}
					/>
					<div className='flex-col flex text-whiteColor'>
						<span className='font-oswald font-semibold text-lg tracking-wide'>
							LOCATION
						</span>
						<div className='font-semibold text-sm md:text-base text-gray-300 relative mb-16 md:mb-10 w-[330px] md:w-[500px]'>
							<TextSlider
								count={branchCount}
								slides={[
									"10040 PATRIOT HWY, Fredericksburg, VA 22407 \n 540-898-6173",
									"9112 Old Battlefield BLVD. Suite 112, Spotsylvania, VA 22553 \n 540-507-8277",
									"316 White Oak Rd Suite 101. Fredericksburg, VA 22405 \n 540-681-2143",
								]}
							/>
						</div>
					</div>
				</div>
			</div>

			<nav className='bg-primary rounded-full w-full hidden md:flex items-center justify-center h-[80px] relative'>
				<ul className='flex items-center md:gap-5 lg:gap-16'>
					{branch === "patron1"
						? patronBranch1.slice(0, 3).map(renderNavLink)
						: branch === "patron2"
						? patronBranch2.slice(0, 3).map(renderNavLink)
						: patronBranch3.slice(0, 3).map(renderNavLink)}

					<li className='bg-lightYellow p-5 md:p-8 rounded-full border border-primary'>
						<img
							src={logo}
							alt=''
							className='w-[50px] md:w-[80px] h-[50px] md:h-[80px]'
						/>
					</li>

					{branch === "patron1"
						? patronBranch1.slice(3).map(renderNavLink)
						: branch === "patron2"
						? patronBranch2.slice(3).map(renderNavLink)
						: patronBranch3.slice(3).map(renderNavLink)}
				</ul>
			</nav>

			<nav className='bg-primary rounded-full w-full flex md:hidden items-center h-[80px] px-5'>
				<NavMenuModal />
				<div className='bg-lightYellow p-5 md:p-8 rounded-full border border-primary mx-auto'>
					<img
						src={logo}
						alt=''
						className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]'
					/>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

{
	/* {branch === "patron1" ? (
								<h3 className='flex'>
									10040 PATRIOT HWY, Fredericksburg, VA 22407 <br />
									540-898-6173
								</h3>
							) : branch === "patron2" ? (
								<h3>
									9112 Old Battlefield BLVD. Suite 112, Spotsylvania, VA 22553
									<br /> 540-507-8277
								</h3>
							) : (
								<h3>
									316 White Oak Rd Suite 101. Fredericksburg, VA 22405 <br />
									540-681-2143
								</h3>
							)} */
}

{
	/* <ul className='flex items-center md:gap-5 lg:gap-10'>
					{branch === "patron1"
						? patronBranch1.slice(0, 3).map(renderNavLink)
						: branch === "patron2"
						? patronBranch2.slice(0, 3).map(renderNavLink)
						: patronBranch3.slice(0, 3).map(renderNavLink)}

					<li className='bg-lightYellow p-5 md:p-8 rounded-full border border-primary'>
						<img src={logo} alt='' className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]' />
					</li>

					{branch === "patron1"
						? patronBranch1.slice(3).map(renderNavLink)
						: branch === "patron2"
						? patronBranch2.slice(3).map(renderNavLink)
						: patronBranch3.slice(3).map(renderNavLink)}
				</ul> */
}
{
	/* <div className='flex items-center gap-5'>
					<h5 className='flex-col flex text-right text-whiteColor'>
						<span className='font-oswald font-semibold text-lg'>
							CALL DELIVERY
						</span>
						<span className='font-semibold text-base'>
						{branch === "patron1"
								? "10040 PATRIOT HWY, Fredericksburg, VA 22407"
								: branch === "patron2"
								? "9112 Old Battlefield BLVD. Suite 112, Spotsylvania, VA 22553"
								: "316 White Oak Rd Suite 101. Fredericksburg, VA 22405"}
						</span>
					</h5>

					<IconButton
						icon={<BsShop />}
						isRound={true}
						bgColor={"#ba9b77"}
						boxSize={12}
						fontSize={20}
						color={"whitesmoke"}
					/>
				</div> */
}
