import { FaEthereum } from "react-icons/fa";
import Identicon from "react-identicons";
import Moment from "react-moment";
import { truncate } from "../store";

const ProjectBackers = ({ backers }) => {
  return (
    <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div
        className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Refunded
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {backers.map((backer, i) => (
              <Backer key={i} backer={backer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

{
  /* <a href={`https://etherscan.io/address/${backer.owner}`} target="_blank" rel="noopener noreferrer">
        <span>{truncate(backer.owner, 4, 4, 11)}</span>
      </a> */
}

const Backer = ({ backer }) => (
  <tr className="border-b border-gray-200">
    {/* <p>h</p> */}

    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      <div className="flex justify-start items-center space-x-2">
        {/* identication for avatar image */}

        {/* <Identicon
          className="h-10 w-10 object-contain rounded-full shadow-md"
          string={backer.owner}
          size={25}
        /> */}
        <a
          href={`https://sepolia.etherscan.io/address/${backer.owner}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{truncate(backer.owner, 4, 4, 11)}</span>
        </a>
      </div>
    </td>
    <td
      className="text-sm font-light
                  px-6 py-4 whitespace-nowrap"
    >
      <small className="flex justify-start items-center space-x-1">
        {/* below for ethereum icon */}
        {/* <FaEthereum /> */}
        <span className="text-gray-700 font-medium">
          {backer.contribution} ETH
        </span>
      </small>
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      {backer.refunded ? "Yes" : "No"}
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      <Moment fromNow>{backer.timestamp}</Moment>
    </td>
  </tr>
);

export default ProjectBackers;
