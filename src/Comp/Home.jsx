import Light from "../assets/light.png";
import Pic from "../assets/Pic.jpg";
import './style.css';

const Home = ({ darkModeComp, onDarkMode }) => {
  return (
    <div
      className={`text-center transition-colors duration-300 h-screen ${
        darkModeComp ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      <div className="flex flex-col items-center mb-10 ml-4 cursor-pointer">
        <img
          src={Light}
          className="h-24 duration-300 sm:ml-[35rem]"
          onClick={onDarkMode}
          alt="Dark Mode"
        />
        <p className="text-xs tracking-wide mt-1 sm:ml-[35rem] mb-16">
          {darkModeComp ? 'Dark Mode' : 'Light Mode'}
        </p>
      </div>

      <h1 className="text-2xl md:text-6xl font-bold mb-16 whitespace-nowrap flex justify-center">
  I AM <span className="text-purple-500 typing-effect shadow-sm underline ml-1">Mohammad Ghous Mujtaba</span>
</h1>
      <p className="max-w-md mx-auto mb-8 px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        sollicitudin est eget neque vulputate.
      </p>

      <button
        className="px-6 py-2 border-2 rounded-full text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300"
      >
        <a href={Pic} download="Pic.jpg">
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Home;
