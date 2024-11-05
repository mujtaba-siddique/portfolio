import { Link } from "react-router-dom";
import "@fontsource/bebas-neue";
import NavbarList from "./NavbarList";

function Navbar({ darkModeComp }) {
  return (
    <div
      className={`navbar shadow-md h-16 ${
        darkModeComp ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost lg:hidden ${
              darkModeComp ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sa dropdown-content mt-2 w-52 p-2 shadow-xl text-xl font-bebas ${
              darkModeComp
                ? "bg-gray-800 text-white rounded-lg border border-gray-600"
                : "bg-white text-black rounded-lg border border-gray-300"
            }text-center`}
          >
            <NavbarList />
          </ul>
        </div>
        <Link
          to="/Home"
          className=" btn btn-ghost text-4xl font-bebas text-purple-700 px-4"
        >
          {" "}
          WELCOME!
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex font-bold">
        <ul
          className={`menu menu-horizontal px-1 text-lg ${
            darkModeComp ? "text-white" : "text-black"
          }`}
        >
          <NavbarList />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
