import React, { useEffect, useState } from "react";
import Footer from "../views/Footer";
import img from "./../assets/slide1.jpg";
import { useSelector } from "react-redux";

const Gallery = () => {
	const { galleryText } = useSelector(state => state.menu);

	const [foods, setFoods] = useState(null);
	const [desserts, setDesserts] = useState(null);
	const [drinks, setDrinks] = useState(null);

	useEffect(() => {
		if (galleryText) {
			const modified = Object.entries(galleryText[0]).map(([key, value]) => ({
				key,
				...value,
			}));
			setFoods(modified.filter(item => item.title === "Food"));
			setDesserts(modified.filter(item => item.title === "Desserts"));
			setDrinks(modified.filter(item => item.title === "Drinks"));
		}
	}, [galleryText]);

	// console.log(galleryText);

	return (
		<section className='absolute top-0 z-0 w-full'>
			<div className='h-[50vh] w-full relative'>
				<img src={img} alt='' className='w-full h-full object-cover' />
				<div className='overlay-text'></div>
			</div>

			<h1 className='container mx-auto font-semibold text-5xl my-10 uppercase font-oswald text-primary'>
				Gallery
			</h1>

			<div className='container mx-auto'>
				<h4 className='text-3xl font-semibold text-center mt-20'>Food</h4>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10 mt-5 mx-5'>
					{foods &&
						foods?.map(food => (
							<div key={food.name}>
								<img
									src={food.imgUrl}
									alt=''
									className='w-full h-full object-cover rounded-lg'
								/>
								<h3 className='ml-1 font-medium'>{food.name}</h3>
							</div>
						))}
				</div>
			</div>
			<div className='container mx-auto'>
				<h4 className='text-3xl font-semibold text-center mt-20'>Desserts</h4>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10 mt-5 mx-5'>
					{desserts &&
						desserts?.map(dessert => (
							<div key={dessert.name}>
								<img
									src={dessert.imgUrl}
									alt=''
									className='w-full h-full object-cover rounded-lg'
								/>
								<h3 className='ml-1 font-medium'>{dessert.name}</h3>
							</div>
						))}
				</div>
			</div>
			<div className='container mx-auto'>
				<h4 className='text-3xl font-semibold text-center mt-20'>Drinks</h4>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10 mt-5 mx-5'>
					{drinks &&
						drinks?.map(drink => (
							<div key={drink.name}>
								<img
									src={drink.imgUrl}
									alt=''
									className='w-full h-full object-cover rounded-lg'
								/>
								<h3 className='ml-1 font-medium'>{drink.name}</h3>
							</div>
						))}
				</div>
			</div>

			<Footer />
		</section>
	);
};

export default Gallery;

// {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
// 	<div key={}>
// <img
// 			key={i}
// 			src={img}
// 			alt=''
// 			className='w-full h-full object-cover rounded-lg'
// 		/>

// 	</div>
// 	))}
