import { deleteObject, ref } from "firebase/storage";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { IconButton, Spinner } from "@chakra-ui/react";
import { db, storage } from "../../config/firebase";
import { fetchFirebase } from "../../redux/menuSlice";
import { collection, deleteField, doc, updateDoc } from "firebase/firestore";

const GalleryTextModelCard = ({ gt }) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	// Assuming img is a string
	let image = gt?.imgUrl.split("?alt=")[0].split("/galleryText%2F")[1];
	const storageRef = ref(storage, `/galleryText/${image}`);

	console.log(gt, "gt");

	const handleDelete = async () => {
		setLoading(true);
		try {
			await deleteObject(storageRef);
			const docRef = doc(collection(db, "elpatronva"), "galleryText");
			await updateDoc(docRef, {
				[gt.id]: deleteField(),
			});

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
				src={gt?.imgUrl}
				alt='profile-picture'
				className='rounded-lg shadow-md w-full max-h-[200px] h-full object-cover'
			/>
			<span className='font-semibold capitalize'>{gt?.name}</span>

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

export default GalleryTextModelCard;
