import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Comp/Navbar";
import About from "./Comp/About";
import Home from "./Comp/Home";
import './App.css';

import { useState } from "react";

function App() {
  const [darkModeComp, setDarkModeComp] = useState(true);

  const handleDarkMode = () => {
    setDarkModeComp(prevMode => !prevMode);
  };

  return (
    <div className={darkModeComp ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}>
      <Router>
        <Navbar darkModeComp={darkModeComp} onToggleDarkMode={handleDarkMode} />
        <Routes>
          <Route path="/Home" element={<Home darkModeComp={darkModeComp} onDarkMode={handleDarkMode} />} />
          <Route path="/about" element={<About darkModeComp={darkModeComp} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
