import React, { useState } from "react";
import image from "./../assets/about-3.jpg";

const HourOpening = () => {
	const [show, setShow] = useState(false);

	const openingTimes = {
		Monday: {
			opening_time: "09:00",
			closing_time: "18:00",
		},
		Tuesday: {
			opening_time: "09:00",
			closing_time: "18:00",
		},
		Wednesday: {
			opening_time: "09:00",
			closing_time: "18:00",
		},
		Thursday: {
			opening_time: "09:00",
			closing_time: "18:00",
		},
		Friday: {
			opening_time: "09:00",
			closing_time: "18:00",
		},
		Saturday: {
			opening_time: "10:00",
			closing_time: "16:00",
		},
		Sunday: {
			opening_time: "Closed",
			closing_time: "Closed",
		},
	};

	const captions = [
		"Growing up on a farm in Veracruz Mexico with six siblings, food was naturally a central part of chef Rogelio Sosa’s life. “My father grew corn, beans, alapeños, tomatoes, cactus - we had cows and chickens and pigs, even a fish farm,” Sosa said, who was second oldest. “I had to learn from my mother all the recipes to make for my brothers.” \n Sosa’s face takes on a look of nostalgia as he talks about those days, “It is a connection with my father” he said. “I love all the flavors and trying new things.” \n The logo of his restaurant El Patron - “The boss” in Spanish - features a stylized portrait of Sosa’s father. Sosa and his wife, Lucy, now have three locations. \n “Everything is made from scratch even the chips and tortillas are made in house.” Said Lucy Sosa. We mix our own easoning, it’s all fresh.” \n  Sosa came first to North Carolina from Mexico in 2001, working on farms and in restaurants at different locations until he met the woman he would marry in Virginia Beach in 2003. Together, they came to the Fredericksburg the following year. \n After saving their money and working together toward their goal, they opened their first restaurant in 2014, and the next one in 2017. \n 	Sosa recipe is made in a tradicional Mexican three-legged stone pot, called a molcajete. “It is one of my mother’s recipes, one we would make in the spring “he said” It is nice to eat with the margarita, very satisfying”.",
	];

	return (
		<div
			className={`relative top-[100px] min-h-screen mb-60 container mx-auto lg:flex`}
		>
			<div className='w-[100%] lg:w-[50%] h-full flex justify-center mx-5 '>
				<img src={image} alt='' className='rounded-xl w-full' />
			</div>
			<div className='bg-white grid grid-cols-1 lg:grid-cols-2 w-[100%] lg:w-[60%] relative top-5 lg:top-14 lg:-left-32 rounded-xl'>
				<div className='p-10 md:p-16 lg:w-[120%]'>
					<h5 className='text-primary uppercase tracking-wider font-bold'>
						El Patron
					</h5>
					<h1 className='text-5xl font-bold my-5 text-soilColor'>
						The Story Behind El Patron Restaurant.
					</h1>
					<div className='text-base flex flex-col gap-5 leading-7'>
						{captions[0]
							.split("\n")
							.slice(0, show ? captions[0].split("\n").length : 1)
							.map(text => (
								<p key={text} className='my-1'>
									{text}
								</p>
							))}

						<button
							onClick={() => setShow(!show)}
							className='font-oswald tracking-wider bg-soilColor py-2 px-5 rounded-md text-white w-[200px]'
						>
							CLICK TO READ MORE
						</button>
					</div>
				</div>
				<div className='hidden lg:block z-50 rounded-xl absolute top-0 right-0 lg:-right-20 mt-10 hour'>
					<div className='bg-primary p-10 rounded-xl'>
						<h1 className='font-oswald font-bold tracking-wider uppercase text-soilColor text-3xl'>
							Hour Opening
						</h1>

						{openingTimes ? (
							<ul className='text-lightYellow w-[280px] lg:w-[300px] font-poppins tracking-wider flex flex-col gap-3 lg:gap-4 font-semibold mt-10'>
								{Object.keys(openingTimes).map(day => (
									<li key={day} className='flex items-center whitespace-nowrap'>
										{day}
										<span className='flex h-[1px] w-full bg-gray-500 mx-5'></span>
										{openingTimes[day].opening_time}{" "}
										{openingTimes[day].closing_time.toLowerCase() !==
											"closed" && "- "}
										{openingTimes[day].closing_time.toLowerCase() !==
											"closed" && openingTimes[day].closing_time}
									</li>
								))}
							</ul>
						) : (
							<p>Loading...</p>
						)}
					</div>
				</div>
			</div>

			<div className='lg:hidden z-50 rounded-xl relative mt-10 hour mx-5'>
				<div className='bg-primary p-10 rounded-xl'>
					<h1 className='font-oswald font-bold tracking-wider uppercase text-soilColor text-3xl'>
						Hour Opening
					</h1>

					{openingTimes ? (
						<ul className='text-lightYellow w-full font-poppins tracking-wider flex flex-col gap-3 lg:gap-4 font-semibold mt-10'>
							{Object.keys(openingTimes).map(day => (
								<li key={day} className='flex items-center whitespace-nowrap'>
									{day}
									<span className='flex h-[1px] w-full bg-gray-500 mx-5'></span>
									{openingTimes[day].opening_time}{" "}
									{openingTimes[day].closing_time.toLowerCase() !== "closed" &&
										"- "}
									{openingTimes[day].closing_time.toLowerCase() !== "closed" &&
										openingTimes[day].closing_time}
								</li>
							))}
						</ul>
					) : (
						<p>Loading...</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default HourOpening;
