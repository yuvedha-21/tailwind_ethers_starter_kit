import React from "react";
import { setGlobalState, useGlobalState } from "../store";
const Hero = () => {
  const [stats] = useGlobalState("stats");
  return (
    <div className="text-center bg-white text-grey-800 py-24 px-6 ">
      <h1 className="text-5xl ms:text-6xl xl:text-7xl font-bold tracking-tight mb-12"></h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-500 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 "
          onClick={() => setGlobalState("createModal", "scale-100")}
        >
          Add Project
        </button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center h-20   w-full">
          <span className="text-lg font-bold leading-5">
            {stats?.totalProjects || 0}
          </span>
          <span>projects</span>
        </div>

        <div className="flex flex-col justify-center items-center h-20   w-full">
          <span className="text-lg font-bold leading-5">
            {stats?.totalBacking || 0}
          </span>
          <span>Backing</span>
        </div>

        <div className="flex flex-col justify-center items-center h-20  w-full">
          <span className="text-lg font-bold leading-5">
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
