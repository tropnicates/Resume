import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Project";
import Skills from "./components/Skills/Skillset";
import Footer from "./components/Footer/Footer";
import Hobbies from "./components/Hobby/hobbies";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
      <div className="App">
        <Navbar />
        <Header />
        <Projects />
        <Skills />
        <Hobbies />
        <Footer /> 
      </div>
  );
}

export default App;
