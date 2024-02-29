import React from "react";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-primary relative z-40'>
			<div className='container mx-auto overflow-hidden text-whiteColor px-5'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
					<div>
						<div className='flex items-center'>
							<img
								src={logo}
								alt=''
								className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]'
							/>
							<h1 className='text-5xl font-bold font-oswald ml-3 text-soilColor'>
								EL PATRON
							</h1>
						</div>
						<p className='mt-5 text-sm'>
							Welcome to our Basilico Coffe Hose. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Iure, sequi.
						</p>
					</div>
					<div>
						<h1 className='text-3xl font-bold font-oswald tracking-wider mb-5 uppercase'>
							Contact Us
						</h1>

						<h3 className='text-soilColor mb-1'>LOCATION:</h3>
						<h5 className='text-sm'>4517 Washingto ave</h5>

						<h3 className='text-soilColor mb-1 mt-6'>BOOK A TABLE:</h3>
						<h5 className='text-sm'>4517 Washingto ave</h5>
					</div>
					<div>
						<h1 className='text-3xl font-bold font-oswald tracking-wider mb-5'>
							HOUR OPEN
						</h1>

						<div className='text-sm my-1'>
							<span className='text-soilColor'>Monday - Friday : </span>
							<span> 9:00 - 22:00</span>
						</div>
						<div className='text-sm my-1'>
							<span className='text-soilColor'>Monday - Friday : </span>
							<span> 9:00 - 22:00</span>
						</div>
						<div className='text-sm my-1'>
							<span className='text-soilColor'>Monday - Friday : </span>
							<span> 9:00 - 22:00</span>
						</div>
						<div className='text-sm my-1'>
							<span className='text-soilColor'>Monday - Friday : </span>
							<span> 9:00 - 22:00</span>
						</div>
						<div className='text-sm my-1'>
							<span className='text-soilColor'>Monday - Friday : </span>
							<span> 9:00 - 22:00</span>
						</div>
						<div className='text-sm my-1'>
							<span className='text-soilColor'>Monday - Friday : </span>
							<span> 9:00 - 22:00</span>
						</div>
					</div>
				</div>

				<hr />

				<div className='flex flex-col gap-2 md:flex-row items-center justify-between py-5'>
					<p className='text-sm'>
						Copyright 2023 Themesflat. All Rights Reserved.{" "}
					</p>
					<div className='flex items-center gap-5'>
						<h5 className='text-sm text-soilColor whitespace-nowrap'>
							Follow Us:{" "}
						</h5>

						<Link to={""}>
							<FaFacebookF />
						</Link>
						<Link to={""}>
							<FaYoutube />
						</Link>
						<Link to={""}>
							<FaInstagram />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
