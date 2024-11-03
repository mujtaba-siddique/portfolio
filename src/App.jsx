import Navbar from "./Comp/Navbar";
import Home from "./Comp/Home";
import './App.css';
import { useState } from "react";

function App() {
  const [darkModeComp, setDarkModeComp] = useState(true);

  
  const handleDarkModeToggle = () => {
    setDarkModeComp(!darkModeComp);
  };

  return (
    <div className={darkModeComp ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}>
      
      <Navbar darkModeComp={darkModeComp} />
     
      <Home darkModeComp={darkModeComp} onDarkModeToggle={handleDarkModeToggle} />
    </div>
  );
}

export default App;
