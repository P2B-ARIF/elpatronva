import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export const fetchFirebase = createAsyncThunk(
	"menu/fetchFirebase",
	async () => {
		try {
			// const querySnapshot = await getDocs(collection(db, "menu"));
			// const queryCategories = await getDocs(collection(db, "categories"));

			const menuData = [];
			const cateData = [];
			const imgArr = [];
			const sliderImgs = [];
			const galleryText = [];

			const usersCollectionRef = collection(db, "elpatronva");
			const userDocRef = doc(usersCollectionRef, "categories");
			const userDocRefMenu = doc(usersCollectionRef, "menu");
			const userDocRefGalleryText = doc(usersCollectionRef, "galleryText");

			const docSnap = await getDoc(userDocRef);
			const docSnapMenu = await getDoc(userDocRefMenu);
			const docSnapGalleryText = await getDoc(userDocRefGalleryText);

			if (docSnap.exists()) {
				const categoriesData = docSnap.data();
				cateData.push(categoriesData);
			} else {
				console.log("No such document!");
			}

			if (docSnapMenu.exists()) {
				const menu = docSnapMenu.data();
				menuData.push(menu);
			} else {
				console.log("No such document!");
			}

			if (docSnapGalleryText.exists()) {
				const gt = docSnapGalleryText.data();
				galleryText.push(gt);
			} else {
				console.log("No such document!");
			}

			const gImages = await listAll(ref(storage, "galleryImages"));
			const sImages = await listAll(ref(storage, "sliderImages"));
			const downloadUrlPromises = gImages.items.map(async val => {
				const url = await getDownloadURL(val);
				imgArr.push(url);
			});
			await Promise.all(downloadUrlPromises);

			const downloadUrlPromisesSlider = sImages.items.map(async val => {
				const url = await getDownloadURL(val);
				sliderImgs.push(url);
			});
			await Promise.all(downloadUrlPromisesSlider);

			// querySnapshot.forEach(doc => {
			// 	menuData.push({ ...doc.data(), id: doc.id });
			// });

			// queryCategories.forEach(doc => {
			// 	cateData.push({ ...doc.data(), id: doc.id });
			// });
			console.log(cateData);
			return {
				menu: menuData,
				categories: cateData,
				gallery: imgArr,
				sliderImgs,
				galleryText,
			};
		} catch (error) {
			console.error("Error fetching menu:", error);
		}
	},
);

export const menuSlice = createSlice({
	name: "menu",
	initialState: {
		menu: null,
		categories: null,
		gallery: null,
		sliderImgs: null,
		galleryText: null,
		isLoading: false,
	},
	reducers: {
		// addMenu: (state, action) => {
		// 	state.menu = action.payload;
		// },
		// addCategories: (state, action) => {
		// 	state.categories = action.payload;
		// },
		// setIsLoading: (state, action) => {
		// 	state.isLoading = action.payload;
		// },
	},
	extraReducers(builder) {
		builder
			.addCase(fetchFirebase.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchFirebase.fulfilled, (state, action) => {
				state.menu = action.payload.menu;
				state.galleryText = action.payload.galleryText;
				state.categories = action.payload.categories;
				state.gallery = action.payload.gallery;
				state.sliderImgs = action.payload.sliderImgs;
				state.isLoading = false;
			})
			.addCase(fetchFirebase.rejected, state => {
				state.isLoading = false;
			});
	},
});

// Action creators are generated for each case reducer function
export const { addMenu, setIsLoading, addCategories } = menuSlice.actions;

export default menuSlice.reducer;
