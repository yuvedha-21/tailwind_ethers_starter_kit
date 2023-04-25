import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./components/Projects";
import Project from "./views/Project";
import { useEffect } from "react";
import { isWallectConnected } from "./services/blockchain";
// import { ToastContainer } from "react-toastify";
import { ToastContainer } from "react-toastify";
const App = () => {
  useEffect(async () => {
    await isWallectConnected();
    console.log("Blockchain loaded");
    // setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div>Hi</div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
