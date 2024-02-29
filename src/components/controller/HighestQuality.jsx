import { Button, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import React from "react";

const HighestQuality = () => {
	return (
		<Card className='max-w-[24rem] overflow-hidden'>
			<CardHeader
				floated={false}
				shadow={false}
				color='transparent'
				className='m-0 rounded-none'
			>
				<img
					src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
					alt='ui/ux review check'
				/>
			</CardHeader>
			<CardBody className='p-3'>
				<Text colorScheme='gray' className='font-poppins'>
					UI/UX Review Check
				</Text>
				<Text colorScheme='gray' className='mt-1 font-normal'>
					Because others.
				</Text>
				<div className='flex justify-end'>
					<Button size='sm'>Edit Card</Button>
				</div>
			</CardBody>
		</Card>
	);
};

export default HighestQuality;
