import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    // here i am getting the intial data from local strorage to persist the mode
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // Apply dark mode styles when component mounts
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Save the dark mode preference to localStorage
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="toggle-mode-button btn-sm btn btn-danger text-white"
      onClick={toggleMode}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleModeButton;
