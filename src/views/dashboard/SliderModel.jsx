import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Spinner,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import { imageUpload } from "../../lib/create";
import { resizeAndUploadImage } from "../../lib/update";
import { fetchFirebase } from "../../redux/menuSlice";
const imgPlaceholder =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

export function SliderModel() {
	const imgUid = uid();
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	// const resizeAndUploadImage = file => {
	// 	return new Promise(resolve => {
	// 		Resizer.imageFileResizer(
	// 			file,
	// 			1920, // Max width
	// 			1080, // Max height
	// 			"JPEG", // Output type (JPEG, PNG)
	// 			90, // Image quality (0 to 100)
	// 			0, // Rotation
	// 			uri => {
	// 				resolve(uri);
	// 			},
	// 			"blob", // Output type (blob, base64)
	// 		);
	// 	});
	// };

	const handleUploadGalleryImage = async () => {
		try {
			const resizedImage = await resizeAndUploadImage(image, 1920, 1080, 90);
			const url = await imageUpload("sliderImages", resizedImage);
			console.log("successfully uploaded slider images", url);

			setTimeout(() => {
				dispatch(fetchFirebase());
				setOpen(false);
				setLoading(false);
				setImage(null);
			}, 500);
		} catch (e) {
			setOpen(false);
			setLoading(false);
			setImage(null);
			console.error("Error adding document: ", e);
		}

		// setLoading(true);
		// try {
		//   const resizedImage = await resizeAndUploadImage(image);
		//   const storageRef = ref(storage, `galleryImages/${imgUid}`);
		//   uploadBytes(storageRef, resizedImage).then((snapshot) => {
		//     console.log("Uploaded a blob or file!", snapshot.metadata.fullPath);
		//     setTimeout(() => {
		//       dispatch(fetchFirebase());
		//       setOpen(false);
		//       setLoading(false);
		//     }, 500);
		//   });
		// } catch (e) {
		//   setOpen(false);
		//   setLoading(false);
		//   console.error("Error adding document: ", e);
		// }
	};

	return (
		<>
		
			<Button
				colorScheme='green'
				size='sm'
				className='flex items-center gap-3 font-poppins'
				onClick={() => setOpen(true)}
			>
				<FaCloudUploadAlt className='text-lg' />
				Upload Images
			</Button>
			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader> Slider Image</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<div className='w-1/2'>
							<input
								id='gallery'
								type='file'
								className='hidden'
								onChange={e => setImage(e.target.files[0])}
								accept='image/jpeg, image/jpg, image/png'
							/>
							<label
								htmlFor='gallery'
								className='cursor-pointer flex items-center gap-3 font-poppins py-[6px] px-5 rounded-md font-medium text-white bg-gradient-to-r bg-blue-600'
							>
								<MdOutlineCloudUpload className='text-lg' />
								Upload Images
							</label>
						</div>

						<div>
							<img
								src={image ? URL.createObjectURL(image) : imgPlaceholder}
								alt='Selected'
								className='h-[350px] w-full object-cover mt-5 rounded-md'
							/>
						</div>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='red'
							onClick={() => {
								setOpen(false);
								setImage(null);
							}}
							className='mr-1'
						>
							<span>Cancel</span>
						</Button>
						<Button
							isDisabled={loading}
							colorScheme='green'
							className='text-green-500'
							onClick={handleUploadGalleryImage}
						>
							{loading ? <Spinner color='red.500' /> : "Confirm"}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
