import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Project from "./views/Project";
import { useEffect } from "react";
import { isWallectConnected } from "./services/blockchain";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(async () => {
    await isWallectConnected();
    console.log("Blockchain loaded");
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      {/* {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      ) : null} */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes> */}
      {/* <ToastContainer
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
      /> */}
    </div>
  );
};

export default App;
