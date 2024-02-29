import React from "react";
import scratchImage from "./../assets/scratch.png";

const Scratch = () => {
	return (
		<div
			// className={`relative z-10 w-full overflow-hidden bottom-0 h-[200px]`}
			// className={`relative z-10 w-full overflow-hidden top-[90vh] h-[200px]`}
			className='relative z-10 -top-20'
		>
			<img src={scratchImage} alt='' className='w-[110%] h-[150px]' />
		</div>
	);
};

export default Scratch;
