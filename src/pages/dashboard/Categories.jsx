import { Spinner } from "@chakra-ui/react";
import { collection, deleteField, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { MdOutlineFolderDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import { fetchFirebase } from "../../redux/menuSlice";

const CategoryCard1 = ({ count, category }) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const { menu, categories, isLoading } = useSelector(state => state.menu);

	const [modiMenu, setModiMenu] = useState([]);
	const [modiCategories, setModiCategories] = useState(null);

	useEffect(() => {
		if (menu || categories) {
			const modifiedCategories = Object.entries(categories[0]).map(
				([id, data]) => ({
					id,
					...data,
				}),
			);
			const modifiedMenu = Object.entries(menu[0]).map(([id, data]) => ({
				id,
				...data,
			}));
			setModiCategories(modifiedCategories);
			setModiMenu(modifiedMenu);
		}
	}, [menu, categories, isLoading]);

	const handleDelete = async () => {
		const confirmation = window.confirm(
			"Are you sure to delete this category.?",
		);
		if (confirmation) {
			setLoading(true);
			try {
				const docRef = doc(collection(db, "elpatronva"), "categories");
				const docRefMenu = doc(collection(db, "elpatronva"), "menu");
				await updateDoc(docRef, {
					[category.id]: deleteField(),
				});

				const items = modiMenu?.filter(m => m.category === category.name);
				items?.forEach(async item => {
					return await updateDoc(docRefMenu, {
						[item.id]: deleteField(),
					});
				});

				console.log("Successfully Delete Categories");
				dispatch(fetchFirebase());
			} catch (error) {
				console.log(error);
			}
		}

		setLoading(false);
	};

	return (
		<div className='p-3 shadow-lg rounded-lg flex justify-end relative overflow-hidden border'>
			<div className='flex flex-col items-end gap-3'>
				<Link
					to={`/dashboard/category/${category.slug}`}
					className='font-josefin text-lg z-10 relative'
				>
					{category.name}
				</Link>
				{loading ? (
					<Spinner className='w-4 h-4' />
				) : (
					<MdOutlineFolderDelete
						size={25}
						className='text-red-700 cursor-pointer'
						onClick={handleDelete}
					/>
				)}
			</div>
			<span className='absolute top-[45%] left-0 -translate-y-[50%] text-[150px] text-red-100'>
				{count?.length}
			</span>
		</div>
	);
};

const Categories = () => {
	const { menu, categories, isLoading } = useSelector(state => state.menu);

	const [modiMenu, setModiMenu] = useState([]);
	const [modiCategory, setModiCategory] = useState(null);

	useEffect(() => {
		if (menu || categories) {
			const modifiedCategories = Object.entries(categories[0]).map(
				([id, data]) => ({
					id,
					...data,
				}),
			);
			const modifiedMenu = Object.entries(menu[0]).map(([id, data]) => ({
				id,
				...data,
			}));
			setModiCategory(modifiedCategories);
			setModiMenu(modifiedMenu);
		}
	}, [menu, categories, isLoading]);

	console.log(modiMenu, modiCategory, "modifiedMenu");

	return (
		<div className='p-3 md:p-8'>
			<h2 className='text-xl font-poppins font-bold text-gray-800 uppercase'>
				Categories
			</h2>
			<figure className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-5 my-5'>
				{modiCategory &&
					modiCategory?.map((category, i) => {
						const count = modiMenu?.filter(c => c.category === category.name);

						return (
							// <CategoryCard
							//   key={category.slug}
							//   category={category}
							//   count={count}
							// />
							<CategoryCard1 key={i} category={category} count={count || 0} />
						);
					})}
			</figure>
		</div>
	);
};

export default Categories;

// const CategoryCard = ({ count, category }) => {
//   return (
//     <Link
//       // key={category.slug}
//       to={`/dashboard/${category.slug}`}
//       className="font-poppins font-bold text-base bg-cyan-500 text-white py-3 px-10 text-center rounded-md"
//     >
//       {category.name} ({count?.length})
//     </Link>
//   );
// };
