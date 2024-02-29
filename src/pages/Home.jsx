import React, { useEffect, useState } from "react";
import Footer from "../views/Footer";
import GalleryCatalog from "../views/GalleryCatalog";
import HeaderCarousel from "../views/HeaderCarousel";
import HomeGallery from "../views/HomeGallery";
import OurSite from "../views/OurSite";
import SpecialMenu from "../views/SpecialMenu";
import ProductsCatalog from "../views/ProductsCatalog";
import { useSelector } from "react-redux";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Reviews from "../views/Reviews";
import HourOpening from "../views/HourOpening";
import FindUs from "../views/FindUs";

const Home = () => {
	const { menu, isLoading, sliderImgs } = useSelector(state => state.menu);
	const [homeCategories, setHomeCategories] = useState(null);

	useEffect(() => {
		if (menu) {
			const modifiedMenu = Object.entries(menu[0]).map(([id, data]) => ({
				id,
				...data,
			}));
			const filterImg = modifiedMenu?.filter(item => item.imgUrl !== null);
			setHomeCategories(filterImg);
		}
	}, [menu]);

	return (
		<div className='absolute top-0 z-0 w-full'>
			<HeaderCarousel sliderImgs={sliderImgs} />

			<div className='relative h-[200px]'></div>

			{/* <OurSite title='Welcome To Our Site' /> */}

			<HourOpening />

			{homeCategories && (
				<div className='container mx-auto overflow-hidden'>
					{/* <ProductsCatalog
						categories={homeCategories.slice(2, homeCategories.length)}
						reverse={false}
					/> */}
					<ProductsCatalog categories={homeCategories} reverse={true} />
				</div>
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto'>
				{homeCategories === null &&
					[1, 2, 3, 4].map(i => (
						<Box key={i} padding='6' boxShadow='lg' bg='white'>
							<SkeletonCircle size='10' />
							<SkeletonText
								mt='4'
								noOfLines={4}
								spacing='4'
								skeletonHeight='2'
							/>
						</Box>
					))}
			</div>

			{/* <ProductsReverseCatalog/> */}

			<GalleryCatalog />

			<SpecialMenu categories={homeCategories} />

			<Reviews />

			{/* <HomeGallery /> */}

			<FindUs />

			<Footer />
		</div>
	);
};

export default Home;
