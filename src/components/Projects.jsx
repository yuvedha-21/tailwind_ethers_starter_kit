import React from "react";
import { Link } from "react-router-dom";
import Identicon from "react-identicons";
const Projects = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-center items-center flex-wrap ">
        {Array(6)
          .fill()
          .map((card, i) => (
            <ProjectCard key={i} id={i} project={card} />
            // <ProjectCard key={i} />
          ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, id }) => (
  <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
    <Link to={"/projects/" + id}>
      <img
        src="https://sloanreview.mit.edu/wp-content/uploads/2022/02/GEN-Davenport-Bean-AI-Value-1290x860-1.jpg"
        alt="project_img_card"
        className="rounded-lg h-64 w-full object-cover"
      />
      <div className="p-4">
        <h5>Creating household robots</h5>
        <div>
          <div className="flex justify-between items-center mb-3">
            <Identicon
              className="rounded-full shadow-md"
              string="hello"
              size={15}
            />
            <small className="text-grey-700">0x37c...1e3f</small>
          </div>
          <small className="text-grey-500">2 days left</small>
        </div>
        <div className="w-full bg-gray-300">
          <div
            className="bg-green-600 text-xs font-medium text-green-100 text-centerp-0.5 leadind-none rounded-l-full h-1"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-4 mb-2 text-gray-500 font-bold">
          <small>{14} Backers</small>
          <small className="text-green-500">Open</small>
        </div>
      </div>
    </Link>
  </div>
);

export default Projects;
