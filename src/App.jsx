import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./components/Projects";
import Project from "./views/Project";
const App = () => {
  useEffect(async () => {
    await isWallectConnected();
    console.log("Blockchain loaded");
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div>Hi</div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
