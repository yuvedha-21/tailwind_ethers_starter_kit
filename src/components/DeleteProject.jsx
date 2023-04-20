import React from "react";
import { FaTimes } from "react-icons/fa";
// import { toast } from "react-toastify";
// import { DeleteProject } from "../services/blockchain";
import { useGlobalState, setGlobalState } from "../store";

const DeleteProject = () => {
  const [deleteModal] = useGlobalState("deleteModal");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [cost, setCost] = useState("");
  // const [date, setDate] = useState("");
  // const [imageURL, setImageURL] = useState("");

  // const toTimestamp = (dateStr) => {
  //   const dateObj = Date.parse(dateStr);
  //   return dateObj / 1000;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!title || !description || !cost || !date || !imageURL) return;

  //   const params = {
  //     title,
  //     description,
  //     cost,
  //     expiresAt: toTimestamp(date),
  //     imageURL,
  //   };

  //   await DeleteProject(params);
  //   toast.success("Project created successfully, will reflect in 30sec.");
  //   onClose();
  // };

  // const onClose = () => {
  //   setGlobalState("deleteModal", "scale-0");
  //   reset();
  // };

  // const reset = () => {
  //   setTitle("");
  //   setCost("");
  //   setDescription("");
  //   setImageURL("");
  //   setDate("");
  // };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
  items-center justify-center bg-black bg-opacity-50
  transform transition-transform duration-300 ${deleteModal}`}
    >
      <div
        className="bg-white shadow-xl shadow-black
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6 "
      >
        <form action="" className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold ">Back Project</p>
            <button
              onClick={() => setGlobalState("deleteModal", "scale-0")}
              type="button"
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
              <img
                src="https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg"
                alt="project title"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center
         rounded-xl mt-5"
          >
            <p> Are you sure, you want to delete?</p>
            {/* <small className="text-red-400"></small> */}
          </div>

          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-red-600
            text-white font-medium text-md leading-tight
            rounded-full shadow-md hover:bg-red-700 mt-5"
          >
            Delete Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProject;
