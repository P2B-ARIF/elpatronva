import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { MdEditDocument } from "react-icons/md";
import { EditCategoryImg } from "./EditCategoryImg";
const imgPlaceholder =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const CategoryCard = ({ category }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* {category?.imgUrl ? ( */}
        {category && (
          <>
            <img
              src={category?.imgUrl || imgPlaceholder}
              alt="profile-picture"
              className="rounded-lg shadow-md w-full h-full max-h-[180px] object-cover"
            />
            <div className="absolute top-2 left-2">
              <IconButton onClick={() => setOpen(true)} color="cyan" size="sm">
                <MdEditDocument className="w-[35px] h-[35px] p-2" />
              </IconButton>
            </div>
            <h2 className="font-poppins text-lg font-bold text-blue-gray-700 ml-2">
              {category?.name}
            </h2>
          </>
        )}
        {/* ) : (
          <div className="relative font-poppins text-xl font-medium flex items-center justify-center py-2 md:py-3 px-7 md:px-12 shadow-xl rounded-lg cursor-pointer hover:text-red-800 border-[1px] border-transparent border-gray-400 hover:border-red-800 hover:shadow-md transition-all duration-100 ease-linear overflow-hidden">
            <h1 className="relative z-10 drop-shadow-lg whitespace-nowrap">
              {category?.name}
            </h1>
          </div>
        )} */}
      </div>
      <EditCategoryImg category={category} open={open} setOpen={setOpen} />
    </>
  );
};

export default CategoryCard;
