import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import logo from "./../assets/logo.png";

const NavMenuModal = () => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const [isOpen, setOpen] = useState(false);
	const { branch } = useParams();

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

	return (
		<>
			{/* <Button colorScheme='blue' onClick={onOpen}>
				Open
			</Button> */}
			<MdMenu size={35} color='white' onClick={() => setOpen(true)} />

			<Drawer placement={"left"} onClose={() => setOpen(false)} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent bgColor={"#2d2723"} textColor={"#e2e1e1"} py={5}>
					<DrawerHeader
						display={"flex"}
						justifyContent='space-between'
						alignItems={"center"}
					>
						<img src={logo} alt='' className='w-[70px] h-[70px]' />
						<IoMdClose
							size={35}
							color='#e2e1e1'
							onClick={() => setOpen(false)}
							className='cursor-pointer'
						/>
					</DrawerHeader>
					<DrawerBody>
						<ul className='flex flex-col items-start  md:gap-5 lg:gap-10'>
							{branch === "patron1"
								? patronBranch1.map(nav => MobileNavMenu(nav, setOpen))
								: branch === "patron2"
								? patronBranch2.map(nav => MobileNavMenu(nav, setOpen))
								: patronBranch3.map(nav => MobileNavMenu(nav, setOpen))}
						</ul>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavMenuModal;

export const MobileNavMenu = (nav, setOpen) => (
	<li
		key={nav.path}
		className='flex items-center border-t-[1px] border-gray-600 w-full my-2 pt-4'
		onClick={() => setOpen(false)}
	>
		<Link
			to={nav.path}
			className='text-whiteColor font-semibold text-base tracking-wider uppercase whitespace-nowrap'
		>
			{nav.nav}
		</Link>
		{/* <NavLink
      to={nav.path}
      onClick={() => setShow(false)}
      className={({ isActive, isPending }) =>
        isPending
          ? "hover:text-primary transition-all duration-200 ease-linear whitespace-nowrap"
          : isActive
          ? "text-primary whitespace-nowrap"
          : "whitespace-nowrap"
      }
    >
      {nav.nav}
    </NavLink> */}
	</li>
);
