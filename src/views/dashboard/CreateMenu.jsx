import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Select,
	Textarea,
} from "@chakra-ui/react";
import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IoIosImages } from "react-icons/io";
import { IoCloudUpload } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import uniqid from "uniqid";
import { db } from "../../config/firebase";
import { imageUpload } from "../../lib/create";
import { resizeAndUploadImage } from "../../lib/update";
import { fetchFirebase } from "../../redux/menuSlice";

export function CreateMenu() {
	const [error, setError] = useState("");
	const { menu, categories, isLoading } = useSelector(state => state.menu);
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const [theCategories, setTheCategories] = useState(null);

	useEffect(() => {
		if (categories) {
			const modifiedCategories = Object.entries(categories[0]).map(
				([id, data]) => ({
					id,
					...data,
				}),
			);

			setTheCategories(modifiedCategories);
		}
	}, [categories, isLoading]);

	//? for first time create data in firebase
	// await setDoc(doc(db, "elrrancho", "menu"), {
	//   [id]: { ...newMenu, imgUrl: url },
	// });

	// for (let i = 0; i < menu.length; i++) {
	// 	const el = menu[i];
	// 	console.log({ totalMenu: menu.length, a });

	// 	const docRef = await addDoc(collection(db, "menu"), el);
	// 	console.log("Document written with ID: ", docRef.id, docRef);
	// 	a++;
	// }

	const handleCreateMenu = async e => {
		e.preventDefault();
		const id = uniqid.time();
		setLoading(true);

		const name = e.target.name.value;
		const category = e.target.category.value;

		const description = e.target.description.value;
		const price = e.target.price.value;

		if (!name || !category || !price)
			setError("Name, Category & Price Field Is Required");

		const newMenu = {
			name,
			category,
			description,
			price,
		};

		if (image) {
			const resizedImage = await resizeAndUploadImage(image, 800, 600, 80);
			const url = await imageUpload("images", resizedImage);

			try {
				const usersCollectionRef = collection(db, "elpatronva");
				const userDocRef = doc(usersCollectionRef, "menu");
				await updateDoc(userDocRef, {
					[id]: { ...newMenu, imgUrl: url },
				});

				console.log("successfully menu added...");
			} catch (e) {
				console.error("Error adding document: ", e);
			}

			// try {
			//   const docRef = await addDoc(collection(db, "menu"), {
			//     ...newMenu,
			//     imgUrl: url,
			//   });
			//   console.log("Document written with ID: ", docRef.id);
			// } catch (e) {
			//   console.error("Error adding document: ", e);
			// }
		} else {
			// const docRef = await addDoc(collection(db, "menu"), {
			//   ...newMenu,
			//   imgUrl: null,
			// });
			// console.log("Document written with ID: ", docRef.id);

			try {
				const usersCollectionRef = collection(db, "elpatronva");
				const userDocRef = doc(usersCollectionRef, "menu");
				await updateDoc(userDocRef, {
					[id]: { ...newMenu, imgUrl: null },
				});
				console.log("successfully menu added..");
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}

		dispatch(fetchFirebase());
		setLoading(false);
		setOpen(false);
		setImage("");
		setError("");

		// try {
		//   const docRef = await addDoc(collection(db, "menu"), newMenu);
		//   console.log("Document written with ID: ", docRef.id);
		// } catch (e) {
		//   console.error("Error adding document: ", e);
		// }

		// try {
		// } catch (err) {
		//   console.error("Error adding document: ", err);
		// }
	};

	const sortedCategories = categories
		? categories.slice().sort((a, b) => a.name.localeCompare(b.name))
		: [];

	return (
		<>
			<Button colorScheme='cyan' onClick={() => setOpen(true)}>
				Add Menu
			</Button>

			<Modal isOpen={open} onClose={() => setOpen(true)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader> Add Menu Item.</ModalHeader>
					{/* <ModalCloseButton onClick={() => setOpen(false)} /> */}
					<ModalBody>
						<form onSubmit={handleCreateMenu}>
							<div className='flex flex-col gap-3'>
								<Input
									placeholder='Menu Item Name'
									variant='filled'
									name='name'
									required
								/>
								<Select
									variant='filled'
									name='category'
									placeholder='Select Category'
									required
								>
									{theCategories &&
										theCategories.map(category => (
											<option key={category.name} value={category.name}>
												{category.name}
											</option>
										))}
								</Select>
								<Textarea
									variant='filled'
									placeholder='Description'
									name='description'
								/>
								<Textarea
									variant='filled'
									placeholder='Price'
									name='price'
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
											className='cursor-pointer flex items-center gap-3 font-poppins bg-cyan-600 text-white py-2 px-5 rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600 whitespace-nowrap'
										>
											<IoCloudUpload className='w-[20px] h-[20px]' />
											Upload Files
										</label>
										{image && (
											<label className='mt-3 flex items-center gap-3 font-poppins bg-pink-600 text-white py-2 px-5 rounded-md bg-gradient-to-r from-pink-400 to-pink-600'>
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
									variant='outline'
									colorScheme='red'
									onClick={() => {
										setOpen(false);
										setImage("");
										setError("");
									}}
									className='mr-3'
								>
									<span className='font-poppins'>Cancel</span>
								</Button>
								<Button type='submit' colorScheme='green' isLoading={loading}>
									<span className='font-poppins'>Confirm</span>
								</Button>
							</div>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

// for (let i = 0; i < menu.length; i++) {
// 	const el = menu[i];
// 	console.log({ totalMenu: menu.length, a });

// 	const docRef = await addDoc(collection(db, "menu"), el);
// 	console.log("Document written with ID: ", docRef.id, docRef);
// 	a++;
// }
