import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEarthAmericas, FaLocationDot } from "react-icons/fa6";
import { TbLocationShare } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import Footer from "../views/Footer";
import scratchImage from "./../assets/scratch.png";

const Locations = () => {
	const { branch } = useParams();

	return (
		<div className='absolute top-0 z-0 w-full'>
			<div className='w-full mb-10 relative'>
				{branch === "patron1" ? (
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1567.1872789744002!2d-77.506604!3d38.224415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c6d077f9d517%3A0x813df40f1ef48254!2sEl%20Patron!5e0!3m2!1sen!2sbd!4v1708454307047!5m2!1sen!2sbd'
						width='100%'
						height='550'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				) : branch === "patron2" ? (
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.1692681706095!2d-77.5947494236868!3d38.20596668720427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6b8f6ecf1a717%3A0xfd333035bb7c6f7f!2sPatron%20%232%2C%209112%20Old%20Battlefield%20Blvd%20Suite%20112%2C%20Spotsylvania%20Courthouse%2C%20VA%2022553%2C%20USA!5e0!3m2!1sen!2sbd!4v1708541865260!5m2!1sen!2sbd'
						width='100%'
						height='450'
						style={{ border: 0 }}
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				) : (
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.6584829041553!2d-77.432036023683!3d38.310579681114824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6e9d5e5d7101d%3A0x70f439fd469ef79c!2s316%20White%20Oak%20Rd%20%23101%2C%20Fredericksburg%2C%20VA%2022405%2C%20USA!5e0!3m2!1sen!2sbd!4v1708541717726!5m2!1sen!2sbd'
						width='100%'
						height='450'
						style={{ border: 0 }}
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				)}
				<div className='overlay-text'></div>
			</div>

			<div className='container mx-auto my-20'>
				<h4 className='text-3xl font-semibold text-center'>Locations</h4>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 my-10 mx-5 md:mx-0'>
					<Location
						point={"10040 PATRIOT HWY, Fredericksburg, VA 22407"}
						number={"540-898-6173"}
						path={"/home/patron1"}
						menuLink={"/menu/patron1"}
						name={"Patron 1"}
						direction='https://www.google.com/maps/dir//10040 Patriot Hwy, Fredericksburg, VA 22407'
					/>
					<Location
						point={
							"9112 Old Battlefield BLVD. Suite 112, Spotsylvania, VA 22553"
						}
						number={"540-507-8277"}
						path={"/home/patron2"}
						menuLink={"/menu/patron2"}
						name={"Patron 2"}
						direction={
							"https://www.google.com/maps/dir//9112+Old+Battlefield+Blvd+%23112,+Spotsylvania+Courthouse,+VA+22553"
						}
					/>
					<Location
						point={"316 White Oak Rd Suite 101. Fredericksburg, VA 22405"}
						number={"540-681-2143"}
						path={"/home/patron3"}
						menuLink={"/menu/patron3"}
						name={"Patron 3"}
						direction={
							"https://www.google.com.mx/maps/dir//316+White+Oak+Rd+%23101,+Fredericksburg,+VA+22405/@38.3104949,-77.4319106,17z"
						}
					/>
				</div>
			</div>

			<div className='h-[150px] w-full relative'>
				<img
					src={scratchImage}
					alt=''
					className='w-full relative rotate-180 z-50'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Locations;

export const Location = ({
	point,
	number,
	path,
	name,
	menuLink,
	direction,
}) => {
	return (
		<div className='shadow-md border border-gray-400 rounded-lg'>
			<div className='flex items-center gap-3 p-3'>
				<FaLocationDot size={40} className='text-primary' />
				<div>
					<div className='font-bold text-primary'>{name}</div>
					<h4 className='text-sm'>Authentic Mexican Restaurant</h4>
				</div>
			</div>
			<div className='border-t-[1px] border-gray-400'>
				<div className='flex items-center justify-between p-3 px-5'>
					<Link
						to={direction}
						className='flex items-center gap-2 text-blue-700 underline-offset-4 underline'
					>
						<TbLocationShare /> Get Directions
					</Link>
					<h4 className='flex items-center gap-2'>
						<FaPhoneAlt />
						{number}
					</h4>
				</div>
				<h1 className='text-center mb-3 w-1/2 mx-auto'>{point}</h1>
			</div>
			<div className='border-t-[1px] border-gray-400 py-5 flex items-center justify-between px-5 p-3'>
				<Link
					to={menuLink}
					className='flex items-center gap-2 text-blue-700 underline-offset-4 underline'
				>
					<BiRestaurant />
					View Menu
				</Link>
				<Link
					to={path}
					className='flex items-center gap-2 text-blue-700 underline-offset-4 underline'
				>
					<FaEarthAmericas />
					Go To {name}
				</Link>
			</div>
		</div>
	);
};
