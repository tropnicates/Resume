import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Project";
import Projecttwo from "./components/projects/Projecttwo";
import Footer from "./components/Footer/Footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Projecttwo />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
