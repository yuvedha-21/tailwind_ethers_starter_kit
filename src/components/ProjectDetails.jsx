import React from "react";
import Identicon from "react-identicons";
import { FaEthereum } from "react-icons/fa";
import { setGlobalState } from "../store";
import { truncate, daysRemaining } from "../store";
import { useGlobalState } from "../store";

const ProjectDetails = ({ project }) => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const expired = new Date().getTime() > Number(project?.expiresAt + "000");
  return (
    <div className="px-6 py-24 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <img
          src={project?.imageURL}
          alt={project?.title}
          className="rounded-lg h-64 w-full object-cover sm:w-1/3"
        />
        <div className="flex-1 sm:py-0 py-4">
          <div className="flex flex-col justify-start flex-wrap">
            <h5 className="text-green-900 text-sm font-medium mb-2">
              {project?.title}
            </h5>
            <small className="text-gray-500 ">
              {new Date().getTime() > Number(project?.expiresAt + "000")
                ? "ExpiresAt"
                : daysRemaining(project?.expiresAt)}{" "}
              left
            </small>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-start space-x-2 ">
              {/* <Identicon
                className="rounded-full shadow-md"
                string={project?.owner}
                size={15}
              /> */}
              {project?.owner ? (
                <small className="text-gray-700">
                  {truncate(project?.owner, 4, 4, 11)}
                </small>
              ) : null}{" "}
              <small className="text-gray-500 font-bold">
                {project?.backers} Backer{project?.backers == 1 ? "" : "s"}
              </small>
            </div>
            <div className="font-bold ">
              {project?.status == 0 ? (
                <small className="text-green-500">Open</small>
              ) : project?.status == 1 ? (
                <small className="text-green-500">Accepted</small>
              ) : project?.status == 2 ? (
                <small className="text-red-500">Reverted</small>
              ) : project?.status == 3 ? (
                <small className="text-red-500">Deleted</small>
              ) : (
                <small className="text-red-500">Paid</small>
              )}
            </div>
          </div>
        </div>
        <p className="text-sm font-light mt-4">{project?.description}</p>
        <div className="w-full bg-gray-300  mt-4">
          {/* <div
            className="bg-blue-600 text-xs font-medium text-green-100 text-centerp-0.5 leadind-none rounded-l-full h-1  "
            style={{ width: `${(project?.raised / project?.cost) * 100}%` }}
          ></div> */}
        </div>
        <div className="flex justify-between items-center font-bold w-full mt-2">
          <small>{project?.raised} ETH Raised</small>

          <small className="flex justify-start items-center">
            {/* <FaEthereum /> */}
            <span>{project?.cost} ETH</span>
          </small>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-5">
          {project?.status == 0 ? (
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-blue-700"
              onClick={() => setGlobalState("backModal", "scale-100")}
            >
              Back Project
            </button>
          ) : null}
          {connectedAccount == project?.owner ? (
            project?.status != 3 ? (
              project?.status == 1 ? (
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 border border-blue-600 text-blue-600 text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:text-white"
                >
                  Payout
                </button>
              ) : project?.status != 4 ? (
                <>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 border border-blue-600 text-blue-600 text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:text-white"
                    onClick={() => setGlobalState("updateModal", "scale-100")}
                  >
                    Edit Projects
                  </button>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 border border-red-600 text-red-600 text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:text-white"
                    onClick={() => setGlobalState("deleteModal", "scale-100")}
                  >
                    Delete Projects
                  </button>
                </>
              ) : (
                <div className="  text-red-600 text-xs font-medium leading-tight uppercase  ">
                  Project Closed
                </div>
              )
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
