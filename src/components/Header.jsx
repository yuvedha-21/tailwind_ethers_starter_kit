import React from "react";
import { Link } from "react-router-dom";
import { TbBusinessplan } from "react-icons/tb";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0">
      <Link
        to="/"
        className="flex justify-start items-center text-xl text-black space-x-1"
      >
        <span>Genesis</span>
        <TbBusinessplan></TbBusinessplan>
      </Link>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;

//styles after this part will not be accounted as only the styles inside the Header() has been exported to routes.
