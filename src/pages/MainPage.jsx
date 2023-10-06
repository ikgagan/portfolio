import React, { useState } from "react";
import Contacts from "../components/contacts/Contacts";
import Home from "../components/Home/Home";
import NavBar from "../components/navbar/NavBar";
import Education from "../components/Education/Education";
import Skills from "../components/skills/Skills";
import Experience from "../components/Experience/Experience";

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Education darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Experience darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contacts darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default MainPage;
