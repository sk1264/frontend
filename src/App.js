import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { aboutLoader, projectsLoader } from "./apiCalls";

function App() {
  const [aboutInfo, setAboutInfo] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await aboutLoader();
        setAboutInfo(data);
      } catch (error) {
        console.log(error);
      }
    };   
		fetchAbout();
  }, []);

  useEffect(()=> {
    const fetchProjects = async () => {
      try {
        const data = await projectsLoader();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
   
  }, [])

  if (!projects || !aboutInfo) {
    return (<h1>Loading...</h1>)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About about={aboutInfo}/>} />
        <Route path="/projects" element={<Projects projects={projects}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;