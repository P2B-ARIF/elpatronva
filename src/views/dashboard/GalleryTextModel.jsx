import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Spinner,
} from "@chakra-ui/react";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { db } from "../../config/firebase";
import { imageUpload } from "../../lib/create";
import { resizeAndUploadImage } from "../../lib/update";
import { fetchFirebase } from "../../redux/menuSlice";
const imgPlaceholder =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const GalleryTextModel = () => {
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const id = uniqid.time();

	const [title, setTitle] = useState(null);
	const [name, setName] = useState("");
	// const [category, setCategory] = useState("");

	const handleUploadGalleryImage = async () => {
		if (!name || !title || image === null) {
			return toast.error("Please Enter Name, Title & Image");
		}

		setLoading(true);
		try {
			const resizedImage = await resizeAndUploadImage(image, 1920, 1080, 90);
			const url = await imageUpload("galleryText", resizedImage);
			console.log("successfully uploaded slider images", url);

			const usersCollectionRef = collection(db, "elpatronva");
			const userDocRef = doc(usersCollectionRef, "galleryText");
			await updateDoc(userDocRef, {
				[id]: { title, name, imgUrl: url },
			});

			console.log("successfully menu added...");
			setImage(null);
			setTitle("");
			setName("");

			setTimeout(() => {
				// dispatch(fetchFirebase());
				setOpen(false);
				setLoading(false);
			}, 500);
		} catch (e) {
			setOpen(false);
			setLoading(false);
			setImage(null);
			console.error("Error adding document: ", e);
		}
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
					<ModalHeader> Gallery Images With Text</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<div className='flex flex-col gap-4'>
							<Input
								variant='filled'
								placeholder='Name'
								name='name'
								defaultValue={name}
								onChange={e => setName(e.target.value)}
							/>

							<div className='flex items-center gap-3'>
								<Button
									onClick={() => setTitle("Food")}
									colorScheme={title === "Food" ? "green" : "gray"}
								>
									Food
								</Button>
								<Button
									onClick={() => setTitle("Desserts")}
									colorScheme={title === "Desserts" ? "green" : "gray"}
								>
									Desserts
								</Button>
								<Button
									onClick={() => setTitle("Drinks")}
									colorScheme={title === "Drinks" ? "green" : "gray"}
								>
									Drinks
								</Button>
							</div>
						</div>

						<div>
							<img
								src={image ? URL.createObjectURL(image) : imgPlaceholder}
								alt='Selected'
								className='h-[300px] w-full object-cover mt-5 rounded-md'
							/>
						</div>
					</ModalBody>

					<ModalFooter justifyContent={"space-around"} display={"flex"}>
						<div className=''>
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
						<Button
							colorScheme='red'
							onClick={() => {
								setOpen(false);
								setImage(null);
								setTitle("");
								setName("");
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
							isLoading={loading}
						>
							Confirm
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default GalleryTextModel;
