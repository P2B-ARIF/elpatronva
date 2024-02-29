import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Input,
	Textarea,
	Button,
} from "@chakra-ui/react";

import { collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import { useSelector } from "react-redux";
const imgPlaceholder =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
import uniqid from "uniqid";
import { db } from "../../config/firebase";
import { resizeAndUploadImage } from "../../lib/update";
import { imageUpload } from "../../lib/create";

export function UpdateModel({ menuItem, open, setOpen }) {
	const [img, setImg] = useState(null);
	const { categories, menu } = useSelector(state => state.menu);
	const [item, setItem] = useState(menuItem);

	useEffect(() => {
		if (menuItem) {
			setItem(menuItem);
		}
	}, [menuItem]);

	const handleCreateMenu = async e => {
		e.preventDefault();

		const name = e.target.name.value;
		const description = e.target.description.value;
		const price = e.target.price.value;

		const newMenu = {
			name,
			category: item?.category,
			description,
			price,
		};

		console.log(newMenu, img, "newMenu");

		const docRef = doc(collection(db, "elpatronva"), "menu");
		if (img) {
			try {
				const resizedImage = await resizeAndUploadImage(img, 800, 600, 80);
				const url = await imageUpload("images", resizedImage);

				await updateDoc(docRef, {
					[`${item.id}`]: { ...newMenu, imgUrl: url },
				});
				console.log("Document updated successfully!");
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		} else {
			try {
				await updateDoc(docRef, {
					[`${item.id}`]: { ...newMenu, imgUrl: item?.imgUrl || null },
				});
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}

		setOpen(false);
		window.location.reload();
	};

	const handleRemove = () => {
		setItem({ ...item, imgUrl: null });
		setImg(null);
	};

	return (
		<>
			{/* <Button onClick={onOpen}>Open Modal</Button> */}

			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader> Add Menu Item.</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleCreateMenu}>
							<div className='flex flex-col gap-3'>
								<div>
									<p className='text-sm mb-1'>Category Name</p>
									<Input placeholder={item?.category} disabled />
								</div>

								<Input
									defaultValue={item?.name}
									placeholder='Item Name'
									name='name'
									required
								/>
								{/* <Select
                disabled
                value={item?.category}
                onChange={() => {}}
                label="Select Category"
                name="category"
              >
                {categories?.map((category, i) => (
                  <Option key={i} value={category.name}>
                    {category.name}
                  </Option>
                ))}
              </Select> */}

								<Textarea
									defaultValue={item?.description}
									placeholder='Description'
									name='description'
								/>
								<Textarea
									defaultValue={item?.price}
									placeholder='Price'
									name='price'
								/>

								<input
									type='file'
									id='imageUpload'
									className='hidden'
									name='image'
									accept='image/jpeg, image/png, image/jpg'
									onChange={e => setImg(e.target.files[0])}
								/>
								<label
									htmlFor='imageUpload'
									className='cursor-pointer flex items-center gap-3 font-poppins bg-cyan-600 text-white py-2 px-5 rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600'
								>
									<IoCloudUpload className='w-[20px] h-[20px]' />
									Upload Files
								</label>

								<div>
									<p>Image Preview:</p>
									<img
										src={
											img
												? URL.createObjectURL(img)
												: item?.imgUrl || imgPlaceholder
										}
										alt='Selected'
										className='h-[100px]'
									/>
								</div>
								<Button onClick={handleRemove}>Remove Image</Button>
							</div>
							<div className='my-5 text-end'>
								<Button
									variant='outline'
									colorScheme='red'
									onClick={() => setOpen(false)}
									className='mr-3'
								>
									<span className='font-poppins'>Cancel</span>
								</Button>
								<Button type='submit' colorScheme='cyan'>
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
