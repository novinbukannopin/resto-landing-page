import React from "react";

function Button({ children }) {
  return (
    <button className="rounded-lg bg-ungubg px-4 py-2  font-poppins font-semibold text-ungu ">
      {children}
    </button>
  );
}

export default Button;
