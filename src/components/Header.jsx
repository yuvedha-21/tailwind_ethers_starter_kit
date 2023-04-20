import React from "react";
import { Link } from "react-router-dom";
import { TbBusinessplan } from "react-icons/tb";
import { connectWallet } from "../services/blockchain";
import { truncate } from "../store";
const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
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
        {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

//styles after this part will not be accounted as only the styles inside the Header() has been exported to routes.
