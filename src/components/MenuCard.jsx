import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { collection, deleteField, doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { fetchFirebase } from "../redux/menuSlice";
import { Button } from "@chakra-ui/react";
import { UpdateModel } from "../views/dashboard/UpdateModel";
import { db } from "../config/firebase";

const MenuCard = ({ item }) => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const handleDeleteItem = async () => {
		setLoading(true);
		if (window.confirm("Are you sure to delete this menu?")) {
			try {
				const docRef = doc(collection(db, "elpatronva"), "menu");
				await updateDoc(docRef, {
					[item.id]: deleteField(),
				});
				console.log("successfully delete item...");
				dispatch(fetchFirebase());
			} catch (error) {
				console.error("Error deleting document:", error);
			}
		}
		setLoading(false);
	};

	return (
		<>
			<div className='overflow-hidden flex flex-col justify-between h-full rounded bg-white text-slate-500 shadow-lg border shadow-slate-200'>
				{item?.imgUrl && (
					<figure>
						<img
							src={item?.imgUrl}
							alt='card image'
							className='aspect-video w-full object-cover'
						/>
					</figure>
				)}
				<div className='p-5'>
					<header className='mb-2'>
						<h3 className='text-xl font-semibold text-slate-700 font-lato'>
							{item?.name}
						</h3>
						<p className='text-slate-400 font-lato font-semibold'>
							{item?.price}
						</p>
					</header>
					<p className='font-lato text-gray-800'>{item?.description}</p>
				</div>
				<div className='flex gap-3 justify-end p-6 pt-0 items-end item-'>
					<Button
						onClick={() => setOpen(true)}
						size='sm'
						className='font-poppins flex items-center gap-1'
					>
						<MdEdit />
						Edit
					</Button>
					<Button
						color='red'
						size='sm'
						className='font-poppins flex items-center gap-1'
						onClick={() => handleDeleteItem()}
					>
						<MdDelete />
						{loading ? "Loading..." : "Delete"}
					</Button>
				</div>
			</div>
			<UpdateModel menuItem={item} open={open} setOpen={setOpen} />
		</>
	);
};

export default MenuCard;
