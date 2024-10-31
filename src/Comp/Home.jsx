import Light from "../assets/light.png";
import Pic from"../assets/Pic.jpg"
import './style.css';
import React, { useState } from 'react';


const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  const DarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={` text-center transition-colors duration-300  h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
      }`}>

      <div
        className="flex flex-col items-center mb-10 ml-4 cursor-pointer"
        >
        <img 
          src={Light} 
          className="h-24 duration-300 sm:ml-[35rem] "onClick={DarkMode}/>

        <p className="text-xs tracking-wide mt-1 sm:ml-[35rem] mb-16">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </p>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-16">
  I AM <span className="text-purple-500 typing-effect shadow-sm">Mohammad Ghous Mujtaba</span>
</h1>


      <p className="max-w-md mx-auto mb-8 px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        sollicitudin est eget neque vulputate.
      </p>

      <button
       className="px-6 py-2 border-2 rounded-full text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300">
        <a href={Pic} download="../assets/Pic.jpg">
          Download Resume
        </a>
      </button>  
    </div>
  );
};

export default Home;

