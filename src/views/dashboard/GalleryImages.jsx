import React, { useEffect, useState } from "react";
import GalleryTextModel from "./GalleryTextModel";
import { useSelector } from "react-redux";
import GalleryTextModelCard from "../../components/controller/GalleryTextModelCard";

export const GalleryImages = () => {
	const { galleryText, isLoading } = useSelector(state => state.menu);

	const [galleryTextImg, setGalleryTextImg] = useState(null);


	useEffect(() => {
		if (galleryText) {
			const modifiedCategories = Object.entries(galleryText[0]).map(
				([id, data]) => ({
					id,
					...data,
				}),
			);

			setGalleryTextImg(modifiedCategories);
		}
	}, [galleryText, isLoading]);


	return (
		<div className='p-3 md:p-8 shadow-lg rounded-md'>
			<div className='flex gap-5 items-center'>
				<h2 className='text-lg font-poppins font-bold text-gray-800'>
					Gallery Images With Text
				</h2>
				<GalleryTextModel />
			</div>

			{isLoading === false && galleryTextImg?.length > 0 && (
				<figure className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3'>
					{galleryTextImg?.map((gt, i) => (
						<GalleryTextModelCard gt={gt} key={i} />
					))}
				</figure>
			)}

			{isLoading && (
				<div className='flex flex-wrap gap-5 mt-5'>
					{[1, 2, 3].map(i => (
						<div
							key={i}
							className='flex items-center justify-center max-w-[250px] h-48 bg-gray-300 rounded sm:w-96 '
						>
							<svg
								className='w-10 h-10 text-gray-200 dark:text-gray-600'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 18'
							>
								<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
							</svg>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
