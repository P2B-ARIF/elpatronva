import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Footer from "../views/Footer";
import cover from "./../assets/pdf-cover.jpeg";
import image from "./../assets/slide1.jpg";

const Menu = () => {
	// const { data } = useSelector(state => state.menu);
	// const [data, setData] = useState([]);
	const [menu, setMenu] = useState([]);
	const [item, setItem] = useState("APPETIZERS");

	// const handleDownload = () => {
	// 	const pdfFilePath = file;
	// 	const link = document.createElement("a");
	// 	link.download = "menu.pdf";
	// 	link.href = pdfFilePath;
	// 	document.body.appendChild(link);
	// 	link.click();
	// 	document.body.removeChild(link);
	// };

	const data = [
		{
			name: "Quesadillas",
			description:
				"Flour tortillas stuffed with cheese, green onions, and jalapeño peppers with your choice of chicken, steak, shrimp or any combination. Served with lettuce, pico de gallo, guacamole, and sour cream.",
			category: "APPETIZERS",
			price: "Cheese- $10.95 / Steak-$14.95 / Chicken- $13.95 / Shrimp-$15.95",
		},
		{
			name: "Nachos",
			description:
				"Crispy chips, covered with refried beans, melted cheese, with your choice of chicken, steak or any combination. Topped with guacamole, sour cream, and jalapeño peppers",
			category: "APPETIZERS",
			price:
				"Cheese- $10.95/Steak-516.95/ Chicken-515.95/ Steak and Chicken-518.95",
		},
		{
			name: "Guacamole Dip",
			description:
				"A crispy flour tortilla bowl, filled with fresh guacamole, served with flour tortilla chips.",
			category: "APPETIZERS",
			price: "11.95",
		},
		{
			name: "Queso Dip",
			description: "Mild or spicy homemade cheese dip.",
			category: "APPETIZERS",
			price: "$9.95",
		},

		{
			name: "Caballero's Camarones",
			description: "Shrimp sautéed in our homemade garlic wine sauce.",
			category: "APPETIZERS",
			price: "$13.95",
		},
		{
			name: "Chorizo con Queso",
			description:
				"Spanish sausage sautéed with onions and green peppers, topped with melted cheese. Served with warm corn tortillas",
			category: "APPETIZERS",
			price: "$12.95",
		},
		{
			name: "Taquitos",
			description:
				"Crispy taquitos, filled with your choice of chicken or beef, served with lettuce, pico de gallo, guacamole, and sour cream.",
			category: "APPETIZERS",
			price: "$10.95",
		},

		{
			name: "House Salad",
			description:
				"Romaine, spinach, ch, tomatoes. green peppers, hard hard egg, with with your choice of steak or chicken. Served with our homemade dressing.",
			category: "SALADS",
			price: "Steak-515.95/Chicken-$14.95/Steak and Chicken-517.95",
		},
		{
			name: "Caballero's Salad",
			description:
				"A crispy flour tortilla bowl, filled with romaine, tomatoes, cheese, house dressing, guacamole, and sour cream and your choice of steak or chicken.",
			category: "SALADS",
			price: "Steak-$18.95 / Chicken-517.95 / Steak and Chicken-519.95",
		},
		{
			name: "Burritos",
			description:
				"Flour tortilla, stuffed with your choice of shredded beef or chicken, grilled steak or chicken, or seafood.",
			title:
				"All Burritos and Enchiladas are served with refried beans, rice, lettuce, pico de gallo, guacamole and sour cream.",
			category: "BURRITOS Y ENCHILADAS",
			price:
				"Shredded beef or chicken- $15.95/Grilled Chicken-516.95/Grilled Steak-518.95/ Seafood-520.95",
		},
		{
			name: "Enchiladas",
			description:
				"Com tortillas, stuffed with your choice of cheese, shredded beef or chicken, or seafood. Topped with our homemade sauce and melted cheese.",
			category: "BURRITOS Y ENCHILADAS",
			price: "Cheese-$14.95/ Shredded beef or chicken-515.95/Seafood-$19.95",
		},
		{
			name: "Tacos Al Carbon",
			title:
				"All Tacos, Chimichangas, and Flautas are served with refried beans, rice, lettuce, pico de gallo, guacamole and sour cream.",
			description:
				"3 Flour tortillas stuffed with your choice of grilled steak or chicken.",
			category: "TACOS, CHIMICHANGAS, FLAUTAS",
			price: "Steak- $18.95/Chicken-516.95",
		},
		{
			name: "Crispy Tacos",
			description:
				"3 Corn taco shells stuffed with your choice of shredded chicken or beef, topped with lettuce, pico de gallo, and cheese.",
			category: "TACOS, CHIMICHANGAS, FLAUTAS",
			price: "Shredded chicken or Beef-$15.95",
		},
		{
			name: "Chimichangas",
			description:
				"Rolled lightly fried flour tortilla stuffed with rice, cheese, and your choice of shredded beef or chicken, or seafood.",
			category: "TACOS, CHIMICHANGAS, FLAUTAS",
			price: "Shredded beef or chicken-515.95/ Seafood-520.95",
		},
		{
			name: "Flautas",
			description:
				"2 Rolled lightly fried flour tortillas stuffed with your choice of shredded beef or chicken.",
			category: "TACOS, CHIMICHANGAS, FLAUTAS",
			price: "Shredded beef or chicken-$15.95",
		},
		{
			name: "Chicken Enchilada and Chicken Taco",
			title:
				"All house combinati ions are served served with refried beans, rice, pico de gallo, guacamole, and sour cream. lettuce,",
			description: "",
			category: "HOUSE COMBINATIONS",
			price: "$15.95",
		},
		{
			name: "Beef Enchilada and Beef Taco",
			description: "",
			category: "HOUSE COMBINATIONS",
			price: "$15.95",
		},
		{
			name: "Chile relleno and Chicken Enchilada",
			description: "",
			category: "HOUSE COMBINATIONS",
			price: "$15.95",
		},
		{
			name: "Chile relleno and Beef Enchilada",
			description: "",
			category: "HOUSE COMBINATIONS",
			price: "$15.95",
		},
		{
			name: "Caballero's favorite Seafood Enchilada, Chicken Enchilada, Beef Enchilada",
			description: "",
			category: "HOUSE COMBINATIONS",
			price: "$19.95",
		},

		{
			name: "Vegetable fajitas",
			title:
				"All Vegetarian's Favorites are served with refried beans, rice, lettuce, pico de gallo, guacamole and sour cream.",
			description: "Sautéed onions, green peppers, zucchini, and tomatoes.",
			category: "VEGETARIAN'S FAVORITES",
			price: "$14.95",
		},
		{
			name: "Enchiladas",
			description:
				"Corn tortillas, stuffed with your choice of cheese, or refried beans. Topped with our homemade sauce and melted cheese.",
			category: "VEGETARIAN'S FAVORITES",
			price: "$14.95",
		},
		{
			name: "Chimichanga",
			description:
				"Rolled lightly fried flour tortilla stuffed with rice, cheese, and refried beans.",
			category: "VEGETARIAN'S FAVORITES",
			price: "$14.95",
		},
		{
			name: "Quesadillas",
			description:
				"Flour tortillas stuffed with monterrey jack and cheddar cheese, or your choice of cheese and spinach.",
			category: "VEGETARIAN'S FAVORITES",
			price: "$14.95",
		},
		{
			name: "Chile Rellenos",
			description:
				"Poblano peppers stuffed with monterrey jack cheese, wrapped in our homemade batter. Topped with our homemade ranchera sauce and melted cheese.",
			category: "VEGETARIAN'S FAVORITES",
			price: "$14.95",
		},
		{
			name: "Fajitas",
			title:
				"All House Specialties are served with White Rice, and Black Beans except Fajitas. Fajitas are served with flefried beans and Mexican Rice",
			description:
				"Sautéed onions, onions, green peppers, tomatoes, with your choice of grilled steak, chicken, shrim imp or any combination.",
			category: "HOUSE SPECIALTIES FAJITAS Y PARRILLADA",
			price:
				"Grilled steak-523.95/ Grilled chicken-$21.95/Shrimp-523.95/ Grilled chicken & Steak- $25.95/ Supreme-$29.95",
		},
		{
			name: "Caballero's Parrillada",
			description:
				"Combination of chicken and and steak fajitas, pork ribs, and camarones diablos.",
			category: "HOUSE SPECIALTIES FAJITAS Y PARRILLADA",
			price: "For 1-$29.95 For 2-558.95",
		},
		{
			name: "Mariscada",
			description:
				"A combination of sauteed shrimp, scallops, salmon, squid, mussels, diced green peppers and onions.",
			category: "SEAFOOD",
			price: "$27.95",
		},
		{
			name: "Mariscos Soteados",
			description:
				"A combination of sautéed shrimp, scallops, squid, mussels, onions, green peppers, tomatoes, and cilantro,",
			category: "SEAFOOD",
			price: "$26.95",
		},
		{
			name: "Salmon Cancun",
			description:
				"Grilled salmon filet, topped with shrimp, scallops, and our homemade seefood sauce.",
			category: "SEAFOOD",
			price: "$27.95",
		},
		{
			name: "Salmon Supremo",
			description:
				"Grilled salmon filet, topped with our homemade seafood mix and our homemade seafood sauce.",
			category: "SEAFOOD",
			price: "$30.95",
		},
		{
			name: "Camarones Diablo",
			description:
				"Large shrimp, broiled and topped with our diablo butter sauce.",
			category: "SEAFOOD",
			price: "$26.95",
		},
		{
			name: "Camarones Tampico",
			description:
				"Shrimp sautéed with tampico butter sauce, served over white rice and black beans on the side.",
			category: "SEAFOOD",
			price: "$26.95",
		},
		{
			name: "Pollo Encebollado",
			description: "Grilled chicken breast covered in sauteed onions.",
			category: "CHICKEN AND MEATS",
			price: "$17.95",
		},
		{
			name: "Pollo Ranchero",
			description:
				"Grilled chicken breast covered in zucchini, tomatoes, onions, and cilantro.",
			category: "CHICKEN AND MEATS",
			price: "$18.95",
		},
		{
			name: "Mar Y Tierra",
			description:
				"12 az Grilled Ribeye Steak, topped with sautéed shrimp, scallops in or homemade garlic butter sauce.",
			category: "CHICKEN AND MEATS",
			price: "$29.95",
		},
		{
			name: "Bistec Encebollado",
			description: "12 oz Grilled Ribeye Steak, topped with sautéed onions.",
			category: "CHICKEN AND MEATS",
			price: "$26.95",
		},
		{
			name: "Lomo Saltado",
			description:
				"Sliced Steak, sautéed in a mixture of tomatoes onions, green peppers, cilantro, jalapeños, and fries.",
			category: "CHICKEN AND MEATS",
			price: "$27.95",
		},
		{
			name: "Carne Asada",
			description:
				"Grilled marinated steak served with refried beans, rice, lettuce, pico de gallo, guacamole, and sour cream.",
			category: "CHICKEN AND MEATS",
			price: "$26.95",
		},

		{
			name: "Margarita",
			description: "",
			category: "DRINKS",
			price: "Glass $10.95 / Half pitcher $24.95 / Pitcher $39.95",
		},
		{
			name: "Gold Margarita",
			description: "",
			category: "DRINKS",
			price: "Glass $12.95 / Half pitcher $26.95 / Pitcher $41.95",
		},
		{
			name: "Cadillac",
			description: "",
			category: "DRINKS",
			price: "Glass $14.95 / Half pitcher $32.95 / Pitcher $48.95",
		},
		{
			name: "Jalapeño Margarita",
			description: "",
			category: "DRINKS",
			price: "Glass $11.95 / Half pitcher $26.95 / Pitcher $41.95",
		},
		{
			name: "Crocodile Margarita",
			description: "",
			category: "DRINKS",
			price: "Glass $11.95 / Half pitcher $26.95 / Pitcher $41.95",
		},
		{
			name: "(Patron, Don Julio, Casa Amigos etc) Margarita",
			description: "",
			category: "DRINKS",
			price: "Glass $15.95 / Half pitcher $36.95 / Pitcher $50.95",
		},
		{
			name: "Frozen Lime, Strawberry, Mango",
			description: "",
			category: "DRINKS",
			price: "Glass $11.95 / Half pitcher $27.95 / Pitcher $46.95",
		},
		{
			name: "Sangria",
			description: "",
			category: "DRINKS",
			price: "Glass $10.95 / Half pitcher $23.95 / Pitcher $40.95",
		},
		{
			name: "Caballeros Margarona",
			description:
				"Caballero's favorite! Delicious mega margarita with a coronita.",
			category: "DRINKS",
			price: "$16.95",
		},
		{
			name: "Mojitos",
			description: "Regular, Strawberry, Mongo, Passionfruit.",
			category: "DRINKS",
			price: "$11.95",
		},
		{
			name: "Paloma",
			description: "Tequila, grapefruit juice, grapefruit soda, salt.",
			category: "DRINKS",
			price: "$11.95",
		},
		{
			name: "Cantarito",
			description:
				"Tequila, orange/ grapefruit/ lime juice, grapefruit soda, tajin.",
			category: "DRINKS",
			price: "$11.95",
		},
		{
			name: "Mariposa",
			description: "Rum, fresh orange/ pineapple juice, fresh strawberry.",
			category: "DRINKS",
			price: "$11.95",
		},
		{
			name: "Imported Beers",
			description: "Corona, Corona Light, Dos XX, Modelo, Negra Modelo.",
			category: "DRINKS",
			price: "$6.95",
		},
		{
			name: "Domestic Beers",
			description: "Bud Light, Miller Light, Budweiser.",
			category: "DRINKS",
			price: "$5.95",
		},

		{
			name: "Merlot/ Cabernet/ Pinot Grigio/ Chardonnay",
			description: "",
			category: "HOUSE WINE",
			price: "Glass- $9.95",
		},
		{
			name: "Margaritas",
			title: "Mon-Fri / 2:30pm-5:30pm",
			description: "",
			category: "HAPPY HOUR",
			price: "$6.95",
		},
		{
			name: "Frozen Margaritas",
			description: "",
			category: "HAPPY HOUR",
			price: "$8.95",
		},
		{
			name: "Cocktails",
			description: "",
			category: "HAPPY HOUR",
			price: "$9.95",
		},
		{
			name: "Imported beers",
			description: "",
			category: "HAPPY HOUR",
			price: "$5.95",
		},
		{
			name: "Domestic beers",
			description: "",
			category: "HAPPY HOUR",
			price: "$4.95",
		},
		{
			name: "SOFT DRINKS",
			description: "",
			category: "SOFT DRINKS",
			price: " $2.95",
		},
	];

	const categories = [
		{ category: "APPETIZERS" },
		{ category: "SALADS" },
		{ category: "BURRITOS Y ENCHILADAS" },
		{ category: "TACOS, CHIMICHANGAS, FLAUTAS" },
		{ category: "HOUSE COMBINATIONS" },
		{ category: "VEGETARIAN'S FAVORITES" },
		{ category: "HOUSE SPECIALTIES FAJITAS Y PARRILLADA" },
		{ category: "SEAFOOD" },
		{ category: "CHICKEN AND MEATS" },
		{ category: "DRINKS" },
		{ category: "HOUSE WINE" },
		{ category: "HAPPY HOUR" },
		{ category: "SOFT DRINKS" },
	];

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await fetch("./../assets/menus.json");
	// 			if (!res.ok) {
	// 				throw new Error("Network response was not ok");
	// 			}
	// 			const data = await res.json();
	// 			console.log(data, "data");
	// 		} catch (error) {
	// 			console.error("There was a problem fetching the data:", error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);
	useEffect(() => {
		if (data) {
			setMenu(data?.filter(i => i.category === item));
		}
	}, [item]);

	return (
		<section className='absolute top-0 z-0 w-full'>
			<div className='bg-[#f5f5f5]'>
				<div
					className='h-[50vh] flex items-center relative '
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					{/* Overlay with light gray color */}
					<div className='absolute inset-0 bg-gray-700 opacity-60'></div>

					{/* <p className='absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] text-7xl text-white z-20 font-bold'>
						Menu.
					</p> */}
				</div>

				{/* <button className='bg-green-700 p-3 rounded-lg fixed top-[47%] -right-1 z-10 flex gap-1 items-center text-white'>
				<FaCartPlus />0
			</button> */}

				<div className='py-20 container mx-auto px-5'>
					<div className='my-5 flex flex-col items-center gap-5 mx-auto'>
						<h1 className='text-3xl font-bold font-poppins'>Our Menu</h1>
						<img src={cover} alt='' className='w-[220px]' />
						<div className='flex items-center gap-5 md:gap-10'>
							<label className='h-[2px] shadow-lg w-[100px] md:w-[300px] bg-slate-700 flex'></label>
							<button
								//	onClick={handleDownload}
								className='bg-slate-700 text-slate-100 py-2 px-3 md:px-5 font-semibold'
							>
								Download Menu
							</button>
							<label className='h-[2px] shadow-lg w-[100px] md:w-[300px] bg-slate-700 flex'></label>
						</div>
					</div>
					<br />
					<section className='h-full w-[100%] hidden md:flex'>
						<div className='w-[33%]'>
							{categories?.map((category, i) => (
								<h1
									key={i}
									onClick={() => setItem(category.category)}
									className={`${
										item === category.category &&
										"border-[1px] border-l-4 relative left-[1px] border-yellow-500 border-r-transparent bg-white"
									} w-full p-5 font-medium bg-transparent cursor-pointer`}
								>
									{category.category}
								</h1>
							))}
						</div>
						<div className='w-[70%] min-h-[800px] bg-white border rounded-md rounded-tl-none'>
							<div className='w-full grid grid-cols-1 md:grid-cols-2 p-5'>
								{menu
									?.sort((a, b) => {
										if (item === "HOUSE COMBINATIONS") {
											const matchA = a.name && a.name.match(/#(\d+)/);
											const matchB = b.name && b.name.match(/#(\d+)/);
											const numA = matchA ? parseInt(matchA[1]) : 0;
											const numB = matchB ? parseInt(matchB[1]) : 0;

											return numA - numB;
										} else {
											return 0;
										}
									})
									?.map((item, i) => {
										const price = item.price;
										return (
											<div
												key={i}
												className={`border-b-[1px] ${
													i % 2 === 0 && "md:border-r-[1px]"
												} p-10 px-7 `}
											>
												<div className='text-xl font-medium flex items-start justify-between gap-2'>
													<h1 className='min-w-1/2 font-semibold'>
														{item.name}
													</h1>
													<div className='text-base flex flex-col items-end text-right'>
														{price.includes("/") ? (
															price.split("/").map(i => (
																<h2 key={i} className='font-semibold'>
																	{i}
																</h2>
															))
														) : (
															<h2 className='text-xl font-semibold'>{price}</h2>
														)}
													</div>
												</div>
												<p className='mt-2 text-slate-500'>
													{item.description}
												</p>
											</div>
										);
									})}
								{menu?.length % 1 === 0 &&
									data
										?.slice(0, 1)
										.map(i => (
											<div
												key={i}
												className={`border-b-[1px] w-full h-full flex`}
											></div>
										))}
							</div>
						</div>
					</section>

					<section className='flex md:hidden'>
						<Accordion defaultIndex={[0]} allowMultiple className='w-full'>
							{categories?.map((cate, i) => {
								let filters = data?.filter(i => i.category === cate.category);

								return (
									<AccordionItem key={i}>
										<h2>
											<AccordionButton>
												<Box as='span' flex='1' textAlign='left'>
													{cate?.category}
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											{filters
												?.sort((a, b) => {
													if (filters[0].category === "HOUSE COMBINATIONS") {
														const matchA = a.name && a.name.match(/#(\d+)/);
														const matchB = b.name && b.name.match(/#(\d+)/);

														const numA = matchA ? parseInt(matchA[1]) : 0;
														const numB = matchB ? parseInt(matchB[1]) : 0;

														return numA - numB;
													} else {
														return 0;
													}
												})
												?.map((item, i) => {
													const price = item.price;

													return (
														<div
															key={i}
															className={`border-t-[1px] ${
																i % 2 === 0 && "md:border-r-[1px]"
															} p-5`}
														>
															<div className='text-xl font-medium flex items-start justify-between gap-2'>
																<h1 className='min-w-1/2 font-semibold'>
																	{item.name}
																</h1>
																<div className='text-base flex flex-col items-end text-right'>
																	{price.includes("/") ? (
																		price.split("/").map(i => (
																			<h2 key={i} className='font-semibold'>
																				{i}
																			</h2>
																		))
																	) : (
																		<h2 className='text-xl font-semibold'>
																			{price}
																		</h2>
																	)}
																</div>
															</div>
															<p className='mt-2 text-slate-500'>
																{item.description}
															</p>
														</div>
													);
												})}
										</AccordionPanel>
									</AccordionItem>
								);
							})}
						</Accordion>
					</section>

					{/* <Link
					to={"/menu"}
					className='font-bold text-green-600 bg-green-200 rounded-md py-2 px-5 border-l-4 border-green-600'
				>
					APPETIZERS
				</Link>
				<br />
				<br /> */}
					{/* <div className='flex gap-5 flex-wrap items-center'>
					{categories?.map((item, i) => (
						<Link
							to={`/menu/${item}}`}
							key={item}
							className={`font-bold ${
								i === 0 &&
								"text-green-600 bg-green-200 rounded-md py-2 px-5 border-l-4 border-green-600"
							}`}
						>
							{item}
						</Link>
					))}
				</div> */}

					{/* <br />
				<br />
				<div className='grid grid-cols-2 gap-5'>
					{Array.from(Array(10).keys()).map(item => (
						<article
							key={item}
							className='h-[150px] flex justify-between border-2 border-green-700 rounded-lg overflow-hidden'
						>
							<div className='w-[60%] pl-10 py-8 flex flex-col'>
								<p className='text-2xl font-berkshire-swash'>
									Pupusas (Queso & Frijol or Mixta)
								</p>
								<button className='bg-green-600 py-2 px-3 text-white rounded-md mt-2 self-end'>
									<FaCartPlus />
								</button>
							</div>
							<div className='w-[30%] relative'>
								<span className='absolute top-1 right-2 bg-secondary-color py-1 px-3 '>
									$2.99
								</span>
								<img className='w-full h-full object-cover' src={food} alt='' />
							</div>
						</article>
					))}
				</div> */}
				</div>
			</div>

			<Footer />
		</section>
	);
};

export default Menu;
