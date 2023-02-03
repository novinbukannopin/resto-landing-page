import React from "react";

function SearchBar({ icon, children }) {
  const variant = {
    search: (
      <img
        src="src\assets\search-icon.png"
        className="mx-auto mr-2 inline-block h-[16px] items-center justify-center"
        alt=""
      />
    ),
  };
  const pickVariant = variant[icon];
  return (
    <div className="flex  justify-center">
      <button className="font-regular rounded-lg bg-putih py-2 pl-4 pr-6 font-poppins text-textgray ">
        {pickVariant}
        {children}
      </button> 
    </div>
  );
}

export default SearchBar;
