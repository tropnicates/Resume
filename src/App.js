import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Project";
import Skills from "./components/Skills/Skillset";
import Projecttwo from "./components/projects/Projecttwo";
import Projectthird from "./components/projects/Projectthird";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projectthird />
      <Projecttwo />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;
