import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const TextSlider = ({ slides, count }) => {
	const variants = {
		enter: { opacity: 0, x: 200 },
		center: { opacity: 1, x: 0 },
		exit: { opacity: 0, y: -200 },
	};

	return (
		<AnimatePresence initial={false} custom={count - 1}>
			<motion.div
				key={count - 1}
				className='slide absolute w-full top-0'
				variants={variants}
				initial='enter'
				animate='center'
				exit='exit'
				// transition={{ type: "tween" }}
				transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
			>
				<h3>{slides[count - 1].split("\n")[0]}</h3>
				<h3>{slides[count - 1].split("\n")[1]}</h3>
			</motion.div>
		</AnimatePresence>
	);
};

export default TextSlider;
