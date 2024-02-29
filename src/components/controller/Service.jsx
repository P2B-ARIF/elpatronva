import { Button, Text } from "@chakra-ui/react";
import React from "react";

const Service = () => {
	return (
		<div>
			<div className='w-full grid grid-cols-2 gap-5 '>
				<div className='flex gap-2'>
					<img
						className='h-52 w-full rounded-lg object-cover object-center'
						src='https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
						alt='nature image'
					/>
					<img
						className='h-52 w-full rounded-lg object-cover object-center'
						src='https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
						alt='nature image'
					/>
				</div>
				<div>
					<Text variant='h6' color='gray' className='mb-1 uppercase'>
						startups
					</Text>
					<Text variant='h5' color='blue-gray' className='mb-1 font-poppins'>
						Lyft launching cross-platform service this week
					</Text>
					<Text color='gray' className='mb-2 font-normal font-poppins'>
						Like so many organizations these days, Autodesk is a company in
						transition. It was until recently a traditional boxed software
						company selling licenses. Yet its own business model disruption is
						only part of the story
					</Text>
					<Button size='sm' className='font-poppins'>
						Edit Service
					</Button>
				</div>
			</div>

			<div className='mt-2'>
				<Text variant='h5' color='blue-gray' className='font-poppins'>
					Lyft launching cross-platform service
				</Text>

				<Text color='gray' className='mb-2 font-normal font-poppins'>
					Like so many organizations these days, Autodesk is a company in
					transition. It was until recently a traditional boxed software company
					selling licenses. Yet its own business model disruption is only part
					of the story
				</Text>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quo.
				</p>
			</div>
		</div>
	);
};

export default Service;
