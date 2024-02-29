import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Spinner,
} from "@chakra-ui/react";
import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { IoIosImages } from "react-icons/io";
import { IoCloudUpload } from "react-icons/io5";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { db } from "../../config/firebase";
import { imageUpload } from "../../lib/create";
import { resizeAndUploadImage } from "../../lib/update";
import { fetchFirebase } from "../../redux/menuSlice";

export function CreateCategory() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [image, setImage] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const handleCreateCategory = async e => {
		e.preventDefault();
		setLoading(true);
		const id = uniqid.time();
		const name = e.target.name.value;
		const slug = name.split(" ").join("-").toLowerCase();

		if (!name) setError("Name, Category & Price Field Is Required");

		if (image) {
			const resizedImage = await resizeAndUploadImage(image, 800, 600, 80);
			const url = await imageUpload("images", resizedImage);

			try {
				const usersCollectionRef = collection(db, "elpatronva");
				const userDocRef = doc(usersCollectionRef, "categories");
				await updateDoc(userDocRef, {
					[id]: { imgUrl: url, name: name, slug: slug },
				});
				console.log("New Category added successfully.");
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		} else {
			const usersCollectionRef = collection(db, "elpatronva");
			const userDocRef = doc(usersCollectionRef, "categories");
			await updateDoc(userDocRef, {
				[id]: { imgUrl: null, name: name, slug: slug },
			});

			console.log("New Category added successfully Without Image..");
		}

		dispatch(fetchFirebase());
		setLoading(false);
		setOpen(false);
		setImage("");
		setError("");
	};

	return (
		<>
			<Button colorScheme='cyan' onClick={handleOpen}>
				Create Category
			</Button>

			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader className='text-blue-gray-800 font-poppins'>
						Create Category.
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleCreateCategory}>
							<div className='flex flex-col gap-3'>
								<Input
									label='Category Name'
									name='name'
									placeholder='Enter category name'
									required
								/>
								<div className='flex items-start gap-3'>
									<div>
										<input
											type='file'
											id='imageUpload'
											className='hidden'
											name='image'
											onChange={e => setImage(e.target.files[0])}
										/>
										<label
											htmlFor='imageUpload'
											className='cursor-pointer flex items-center gap-3 font-lato bg-cyan-600 text-white py-2 px-5 rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600 whitespace-nowrap'
										>
											<IoCloudUpload className='w-[20px] h-[20px]' />
											Upload Files
										</label>
										{image && (
											<label className='mt-3 flex items-center gap-3 font-lato bg-pink-600 text-white py-2 px-5 rounded-md bg-gradient-to-r from-pink-400 to-pink-600'>
												<IoIosImages className='w-[20px] h-[20px]' />
												Preview:
											</label>
										)}
									</div>
									{image && (
										<img
											src={URL.createObjectURL(image)}
											alt='Selected'
											className='h-[150px] w-full object-cover rounded-lg'
										/>
									)}
								</div>
							</div>
							<p className='text-red-500 text-sm mt-1'>{error}</p>

							<div className='my-5 text-end'>
								<Button
									colorScheme='red'
									isDisabled={loading}
									onClick={() => {
										setOpen(false);
										setImage("");
										setError("");
									}}
									className='mr-3'
								>
									<span className='font-poppins'>Cancel</span>
								</Button>
								<Button type='submit' colorScheme='cyan'>
									{loading ? (
										<Spinner className='h-4 w-4' />
									) : (
										<span className='font-poppins'>Confirm</span>
									)}
								</Button>
							</div>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
