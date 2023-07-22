import React from "react";
import { Link } from "react-router-dom";
import { TbBusinessplan } from "react-icons/tb";
import { connectWallet, test } from "../services/blockchain";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { truncate } from "../store";
import { useGlobalState } from "../store";
const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <div className="flex space-x-2 justify-center">
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-blue-700"
        onClick={test}
      >
        {"Tester"}
      </button>
      <ConnectButton />
      {/* {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-blue-700"
          >
            {truncate(connectedAccount, 4, 4, 13)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-blue-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )} */}
    </div>
  );
};

export default Header;

//styles after this part will not be accounted as only the styles inside the Header() has been exported to routes.
