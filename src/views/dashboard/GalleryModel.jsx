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
import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import Resizer from "react-image-file-resizer"; // Import the Resizer library
import { useDispatch } from "react-redux";
import { uid } from "uid";
import { storage } from "../../config/firebase";
import { fetchFirebase } from "./../../redux/menuSlice";
import { FaCloudUploadAlt } from "react-icons/fa";
const imgPlaceholder =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

export function GalleryModel() {
	const imgUid = uid();
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const resizeAndUploadImage = file => {
		return new Promise(resolve => {
			Resizer.imageFileResizer(
				file,
				1920, // Max width
				1080, // Max height
				"JPEG", // Output type (JPEG, PNG)
				90, // Image quality (0 to 100)
				0, // Rotation
				uri => {
					resolve(uri);
				},
				"blob", // Output type (blob, base64)
			);
		});
	};

	const handleUploadGalleryImage = async () => {
		setLoading(true);
		try {
			const resizedImage = await resizeAndUploadImage(image);
			const storageRef = ref(storage, `galleryImages/${imgUid}`);
			uploadBytes(storageRef, resizedImage).then(snapshot => {
				console.log("Uploaded a blob or file!", snapshot.metadata.fullPath);
				setTimeout(() => {
					dispatch(fetchFirebase());
					setOpen(false);
					setLoading(false);
				}, 500);
			});
		} catch (e) {
			setOpen(false);
			setLoading(false);
			console.error("Error adding document: ", e);
		}
	};

	return (
		<>
			{/* <Button onClick={() => setOpen(true)}>Open Modal</Button> */}
			<Button
				// variant='gradient'
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
					<ModalHeader>Gallery Images</ModalHeader>
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
							onClick={() => setOpen(false)}
							className='mr-1'
							size={"sm"}
						>
							<span>Cancel</span>
						</Button>
						<Button
							colorScheme='green'
							size={"sm"}
							className='text-green-500'
							onClick={handleUploadGalleryImage}
						>
							{loading ? <Spinner /> : "Confirm"}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
