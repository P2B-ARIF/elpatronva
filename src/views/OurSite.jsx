import React, { useState } from "react";
import { useParams } from "react-router-dom";

const OurSite = ({ top, title }) => {
	const [showVideo, setShowVideo] = useState(false);
	const { branch } = useParams();

	const handleVideo = () => {
		setShowVideo(true);
	};
	const handleVideoHide = () => {
		setShowVideo(false);
	};

	return (
		<div className={`relative top-[100px] min-h-screen mb-60`}>
			<h1 className='text-center text-3xl md:text-4xl font-semibold'>
				{title}
			</h1>

			<div className='flex container mx-auto overflow-hidden my-20 flex-col-reverse md:flex-row'>
				<div
					onMouseEnter={handleVideo}
					onClick={handleVideo}
					className={`video-responsive relative md:left-[50px] mx-5 md:mx-0 ${
						showVideo ? "z-20" : ""
					}`}
				>
					{branch === "patron1" ? (
						<iframe
							className='w-full md:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]'
							// width='600'
							// height='500'
							src='https://www.youtube.com/embed/UPx9596CPc8?si=lCy2tbz6c3-Knq0a'
							title='YouTube video player'
							// frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					) : branch === "patron2" ? (
						<iframe
							className='w-full md:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]'
							// width='600'
							// height='500'
							src='https://www.youtube.com/embed/ckO77K-sNQ0?si=cWU8BMu6L0vH22yJ'
							title='YouTube video player'
							// frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					) : (
						<iframe
							className='w-full md:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]'
							// width='600'
							// height='500'
							src='https://www.youtube.com/embed/fYKqIsjFeTQ?si=tFXaWmVtMLzSgD7f'
							title='YouTube video player'
							// frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					)}
					{/* <iframe
						width='600'
						height='500'
						src='https://www.youtube.com/embed/UPx9596CPc8?si=lCy2tbz6c3-Knq0a'
						title='YouTube video player'
						// frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe> */}
				</div>
				<div
					onMouseEnter={handleVideoHide}
					className='bg-gray-100 relative z-10 md:top-[50px] md:right-[50px] rounded-[1rem] p-5 md:p-10 mb-10 md:mb-32 mx-5 md:mx-0'
				>
					<h5 className='text-primary uppercase tracking-wider font-bold'>
						El Patron
					</h5>
					<h1 className='text-5xl font-bold my-5 text-soilColor'>
						The Story Behind El Patron Restaurant.
					</h1>
					<div className='text-base flex flex-col gap-5 leading-7'>
						<p>
							Growing up on a farm in Veracruz Mexico with six siblings, food
							was naturally a central part of chef Rogelio Sosa’s life. “My
							father grew corn, beans, jalapeños, tomatoes, cactus - we had cows
							and chickens and pigs, even a fish farm,” Sosa said, who was
							second oldest. “I had to learn from my mother all the recipes to
							make for my brothers.”
						</p>
						<p>
							Sosa’s face takes on a look of nostalgia as he talks about those
							days, “It is a connection with my father” he said. “I love all the
							flavors and trying new things.”
						</p>
						<p>
							The logo of his restaurant El Patron - “The boss” in Spanish -
							features a stylized portrait of Sosa’s father. Sosa and his wife,
							Lucy, now have three locations.
						</p>
						<p>
							“Everything is made from scratch even the chips and tortillas are
							made in house.” Said Lucy Sosa. We mix our own seasoning, it’s all
							fresh.”
						</p>
						<p>
							Sosa came first to North Carolina from Mexico in 2001, working on
							farms and in restaurants at different locations until he met the
							woman he would marry in Virginia Beach in 2003. Together, they
							came to the Fredericksburg the following year.
						</p>
						<p>
							After saving their money and working together toward their goal,
							they opened their first restaurant in 2014, and the next one in
							2017.
						</p>
						<p>
							Sosa recipe is made in a tradicional Mexican three-legged stone
							pot, called a molcajete. “It is one of my mother’s recipes, one we
							would make in the spring “he said” It is nice to eat with the
							margarita, very satisfying”.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurSite;
