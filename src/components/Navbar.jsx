import React from "react";
import Button from "../parts/Button";
import Logo from "../parts/Logo";
import NavItems from "../parts/NavItems";
import SearchBar from "../parts/SearchBar";

function Navbar() {
  return (
    <div className="flex items-center">
      <div className="w-5/12 ">
        <ul className="flex space-x-6">
          <NavItems>Home</NavItems>
          <NavItems isDrop>Category</NavItems>
          <NavItems>Service</NavItems>
          <NavItems>About Us</NavItems>
        </ul>
      </div>
      <div className="w-2/12 ">
        <Logo />
      </div>
      <div className="flex w-5/12 items-center justify-end text-right">
        <div className=" w-7/12">
          <SearchBar icon={"search"}>Search your favorite food </SearchBar>
        </div>
        <div className="w-2/12">
          <Button>Log In</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
