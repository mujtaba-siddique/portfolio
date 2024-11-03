import Navbar from "./Comp/Navbar";
import Home from "./Comp/Home";
import './App.css';
import { useState } from "react";

function App() {
  const [darkModeComp, setDarkModeComp] = useState(true);

  // Function to toggle the dark mode state
  const handleDarkModeToggle = () => {
    setDarkModeComp(!darkModeComp);
  };

  return (
    <div className={darkModeComp ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}>
      {/* Passing the dark mode state to Navbar */}
      <Navbar darkModeComp={darkModeComp} />
      {/* Passing dark mode state and toggle function to Home */}
      <Home darkModeComp={darkModeComp} onDarkModeToggle={handleDarkModeToggle} />
    </div>
  );
}

export default App;
