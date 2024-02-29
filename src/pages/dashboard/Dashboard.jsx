import React from "react";

import { GalleryImages } from "../../views/dashboard/GalleryImages";
import SliderImages from "../../views/dashboard/SliderImages";
import Gallery from "./../../views/dashboard/Gallery";

const Dashboard = () => {
	return (
		<div className='min-w-[100%] h-full min-h-screen '>
			{/* <button onClick={handleclick}>click</button> */}
			<Gallery />
			<br />
			<SliderImages />
			<br />
			{/* <CategoriesImg /> */}

			<GalleryImages />

			<br />
			<br />
		</div>
	);
};

export default Dashboard;
