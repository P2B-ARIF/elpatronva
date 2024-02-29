import { Button, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
	return (
		<div className='w-full'>
			<div className='flex gap-2 items-center justify-end'>
				<Button size='sm' className='font-poppins'>
					Edit Slide
				</Button>
			</div>
			<Text variant='h5' color='blue-gray' className='mb-1 font-poppins'>
				- Welcome to EL PATRON Restaurant -
			</Text>
			<h1 className='mb-1 font-poppins text-2xl font-bold'>
				OUR PASSION IS IN OUR COFFEE
			</h1>
			<Text color='gray' className='mb-2 font-normal font-poppins'>
				Harbourfront Seafood Restaurant is the perfect spot in Sydney to
				celebrate a special occasion or to simply head out for a bite to eat.
			</Text>
		</div>
	);
};

export default Header;
