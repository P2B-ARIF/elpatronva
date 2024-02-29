import { deleteObject, ref } from "firebase/storage";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { IconButton, Spinner } from "@chakra-ui/react";
import { fetchFirebase } from "../redux/menuSlice";
import { storage } from "../config/firebase";

const SliderCard = ({ setKnock, img }) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	// Assuming img is a string
	let image = img.split("?alt=")[0].split("sliderImages%2F")[1];
	const storageRef = ref(storage, `sliderImages/${image}`);

	const handleDelete = async () => {
		setLoading(true);
		try {
			await deleteObject(storageRef);
			toast.success("File deleted successfully");
			dispatch(fetchFirebase());
		} catch (error) {
			console.error("Error deleting file:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='relative'>
			<img
				src={img}
				alt='profile-picture'
				className='rounded-lg shadow-md w-full max-h-[200px] h-full object-cover'
			/>
			<div className='absolute top-2 left-2'>
				{loading ? (
					<Spinner />
				) : (
					<IconButton onClick={handleDelete} color='red' size='sm'>
						<MdDelete className='w-[35px] h-[35px] p-2' />
					</IconButton>
				)}
			</div>
		</div>
	);
};

export default SliderCard;
