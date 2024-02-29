import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GalleryModel } from "./GalleryModel";
import { useSelector } from "react-redux";
import GalleryCard from "../../components/GalleryCard";

const Gallery = () => {
	// const [gImg, setGImg] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [knock, setKnock] = useState("");
	const { gallery, isLoading } = useSelector(state => state.menu);

	// console.log(menu, "menu");

	// useEffect(() => {
	// const fetchImages = async () => {
	//   setLoading(true);
	//   try {
	//     const images = await listAll(ref(storage, "galleryImages"));
	//     const imgArr = [];
	//     const downloadUrlPromises = images.items.map(async (val) => {
	//       const url = await getDownloadURL(val);
	//       imgArr.push(url);
	//     });
	//     await Promise.all(downloadUrlPromises);
	//     setGImg(imgArr);
	//     setLoading(false);
	//   } catch (error) {
	//     console.error("Error fetching images:", error);
	//   }
	// };
	//   fetchImages();
	// }, [knock]);

	return (
		<div className='p-3 md:p-8 shadow-lg rounded-md'>
			<div className='flex gap-5 items-center'>
				<h2 className='text-lg font-poppins font-bold text-gray-800'>
					Gallery
				</h2>
				<GalleryModel />
			</div>
			{isLoading === false && gallery?.length > 0 && (
				<figure className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3'>
					{gallery?.map((img, i) => (
						<GalleryCard img={img} key={i} />
					))}
				</figure>
			)}
		</div>
	);
};

export default Gallery;
