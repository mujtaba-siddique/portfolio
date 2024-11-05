import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
const About = ({ darkModeComp }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center text-center h-screen ${
          darkModeComp ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <h1 className="text-4xl font-bold mb-5 underlinemd:text-4xl md:font-bold md:mb-10 underline typing-effect">
          About Me
        </h1>
        <p className="max-w-screen-sm mb-[10rem] ">
          I'm a self-taught web developer with experience in designing new
          features from ideation to production, implementation of wireframes and
          design flows into high-performance software applications. I take into
          consideration the user experience while writing reusable and efficient
          code. I passionately combine good design, technology, and innovation
          in all my projects, which I like to accompany from the first idea to
          release. Currently, I'm focused on backend development.</p>
          <div className="grid grid-cols-3 gap-4 mt-[40px] mx-10">
            <label className="form-control w-full">
              <span className="mr-auto font-bold text-xl">06.69</span>
              <div className="label">
                <span className="text-sm text-gray-500">Aggregate</span>
              </div>
              <div className="label">
                <span className="text-sm text-gray-500">CGPA</span>
              </div>
            </label>
            <label className="form-control w-full">
              <span className="mr-auto font-bold text-xl">4+</span>
              <div className="label">
                <span className="text-sm text-gray-500">Projects</span>
              </div>
            </label>
            <label className="form-control w-full">
              <span className="mr-auto font-bold text-xl">01</span>
              <div className="label">
                <span className="text-sm text-gray-500">Month</span>
              </div>
              <div className="label">
                <span className="text-sm text-gray-500">experience</span>
              </div>
            </label>
          </div>
          <div className="flex justify-center space-x-10 mt-10 cursor-pointer  ">
            <a href="https://in.linkedin.com/" className="opacity-20 hover:opacity-100">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" className="opacity-20 hover:opacity-100">
              <IoLogoGithub />
            </a>
            <a href="https://x.com/?lang=en" className="opacity-20 hover:opacity-100">
              <FaTwitter />
            </a>
          </div>
        
      </div>
    </>
  );
};

export default About;
