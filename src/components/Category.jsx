import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MenuCard from "../../components/dashboard/MenuCard";

const Category = () => {
  const { category } = useParams();
  const { menu, isLoading, categories } = useSelector((state) => state.menu);

  const [modiMenu, setModiMenu] = useState([]);
  const [modiCategories, setModiCategories] = useState(null);

  useEffect(() => {
    if (menu || categories) {
      const modifiedCategories = Object.entries(categories[0]).map(
        ([id, data]) => ({
          id,
          ...data,
        })
      );
      const modifiedMenu = Object.entries(menu[0]).map(([id, data]) => ({
        id,
        ...data,
      }));
      setModiCategories(modifiedCategories);
      setModiMenu(modifiedMenu);
    }
  }, [menu, categories, isLoading]);

  // const categories = [
  //   {
  //     name: "Appetizers",
  //     slug: "appetizers",
  //     imgUrl: "path/to/appetizers-image.jpg",
  //   },
  //   {
  //     name: "Ensaladas | Salads",
  //     slug: "salads",
  //     imgUrl: "path/to/salads-image.jpg",
  //   },
  //   {
  //     name: "Burritos",
  //     slug: "burritos",
  //     imgUrl: "path/to/burritos-image.jpg",
  //   },
  //   {
  //     name: "Seafood",
  //     slug: "seafood",
  //     imgUrl: "path/to/seafood-image.jpg",
  //   },
  //   {
  //     name: "Pastas",
  //     slug: "pastas",
  //     imgUrl: "path/to/pastas-image.jpg",
  //   },
  //   {
  //     name: "El Rancho Specialties",
  //     slug: "el-rancho-specialties",
  //     imgUrl: "path/to/el-rancho-specialties-image.jpg",
  //   },
  //   {
  //     name: "Nachos",
  //     slug: "nachos",
  //     imgUrl: "path/to/nachos-image.jpg",
  //   },
  //   {
  //     name: "Fajitas",
  //     slug: "fajitas",
  //     imgUrl: "path/to/fajitas-image.jpg",
  //   },
  //   {
  //     name: "Other Specialties",
  //     slug: "other-specialties",
  //     imgUrl: "path/to/other-specialties-image.jpg",
  //   },
  //   {
  //     name: "Chicken - Pollo",
  //     slug: "chicken-pollo",
  //     imgUrl: "path/to/chicken-image.jpg",
  //   },
  //   {
  //     name: "Tacos",
  //     slug: "tacos",
  //     imgUrl: "path/to/tacos-image.jpg",
  //   },
  //   {
  //     name: "Enchiladas",
  //     slug: "enchiladas",
  //     imgUrl: "path/to/enchiladas-image.jpg",
  //   },
  //   {
  //     name: "Quesadillas",
  //     slug: "quesadillas",
  //     imgUrl: "path/to/quesadillas-image.jpg",
  //   },

  //   {
  //     name: "Kid Menu",
  //     slug: "kid-menu",
  //     imgUrl: "path/to/kid-menu-image.jpg",
  //   },
  //   {
  //     name: "Lunch Special",
  //     slug: "lunch-special",
  //     imgUrl: "path/to/lunch-special-image.jpg",
  //   },
  //   {
  //     name: "Sandwiches",
  //     slug: "sandwiches",
  //     imgUrl: "path/to/sandwiches-image.jpg",
  //   },
  //   {
  //     name: "Desserts",
  //     slug: "desserts",
  //     imgUrl: "path/to/desserts-image.jpg",
  //   },
  //   {
  //     name: "Soft Drinks",
  //     slug: "soft-drinks",
  //     imgUrl: "path/to/soft-drinks-image.jpg",
  //   },
  //   {
  //     name: "Beer & Wine",
  //     slug: "beer-wine",
  //     imgUrl: "path/to/beer-wine-image.jpg",
  //   },
  //   {
  //     name: "Alcohol Drinks",
  //     slug: "alcohol-drinks",
  //     imgUrl: "path/to/alcohol-drinks-image.jpg",
  //   },
  // ];
  const c = modiCategories?.find((a) => a.slug === category);

  //   useEffect(() => {
  //     if (menu) {
  //       const b = menu?.filter((b) => b.category === c.name);
  //     }
  //   }, []);

  return (
    <div className="p-3">
      <h2 className="text-xl font-poppins font-bold text-gray-800 uppercase">
        {category}
      </h2>
      <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-3 md:gap-5 mt-5">
        {modiMenu &&
          modiMenu
            ?.filter((b) => b.category === c.name)
            ?.map((item, i) => {
              return <MenuCard key={i} item={item} />;
            })}
      </figure>
    </div>
  );
};

export default Category;
