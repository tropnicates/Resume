import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Project";
import Skills from "./components/Skills/Skillset";
import Footer from "./components/Footer/Footer";
import Hobbies from "./components/Hobby/hobbies";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Projects />
        <Skills />
        <Hobbies />
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
