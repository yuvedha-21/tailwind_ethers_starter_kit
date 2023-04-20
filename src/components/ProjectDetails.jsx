import React from "react";
import Identicon from "react-identicons";
import { FaEthereum } from "react-icons/fa";
import { setGlobalState } from "../store";

const ProjectDetails = () => {
  return (
    <div className="px-6 py-24 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <img
          src="https://sloanreview.mit.edu/wp-content/uploads/2022/02/GEN-Davenport-Bean-AI-Value-1290x860-1.jpg"
          alt="project_img_card"
          className="rounded-lg h-64 w-full object-cover sm:w-1/3"
        />
        <div className="flex-1 sm:py-0 py-4">
          <div className="flex flex-col justify-start flex-wrap">
            <h5 className="text-green-900 text-sm font-medium mb-2">
              Creating househole robot
            </h5>
            <small className="text-gray-500 ">3 days left</small>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-start space-x-2 ">
              <Identicon
                className="rounded-full shadow-md"
                string="0x3e4......3b24a"
                size={15}
              />
              <small className="text-gray-700">0x3e4......3b24a</small>
              <small className="text-gray-500 font-bold">{16} Backing</small>
            </div>
            <div className="font-bold ">
              <small className="text-gray-500 ">Open</small>
            </div>
          </div>
        </div>
        <p className="text-sm font-light mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="w-full bg-gray-300  mt-4">
          <div
            className="bg-green-600 text-xs font-medium text-green-100 text-centerp-0.5 leadind-none rounded-l-full h-1  "
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="flex justify-between items-center font-bold w-full mt-2">
          <small>{3} ETH Raised</small>

          <small className="flex justify-start items-center">
            <FaEthereum />
            <span>{10} ETH</span>
          </small>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-5">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
            onClick={() => setGlobalState("backModal", "scale-100")}
          >
            Back Project
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 border border-green-600 text-green-600 text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:text-white"
            onClick={() => setGlobalState("updateModal", "scale-100")}
          >
            Edit Projects
          </button>

          <button
            type="button"
            className="inline-block px-6 py-2.5 border border-green-600 text-green-600 text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:text-white"
            onClick={() => setGlobalState("deleteModal", "scale-100")}
          >
            Delete Projects
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 border border-green-600 text-green-600 text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:text-white"
          >
            Payout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
