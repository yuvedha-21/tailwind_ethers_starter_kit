import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import CreateProject from "../components/CreateProject";
import AddButton from "../components/AddButton";
const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <div className="flex justify-center items-center my-10">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
        >
          load more
        </button>
      </div>
      <CreateProject />

      <AddButton />
    </>
  );
};

export default Home;
