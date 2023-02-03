import React from "react";

function NavItems({ children, isDrop }) {
  return (
    <>
      <div className="flex space-x-1 items-center">
        <a href="" className="font-poppins text-base font-medium text-primary">
          {children}
        </a>
        <img
          src={isDrop ? "src/assets/arrow-down-solid.svg" : ""}
          className="h-[12px]"
          alt=""
        />
      </div>
    </>
  );
}

export default NavItems;
