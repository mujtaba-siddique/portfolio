import "@fontsource/bebas-neue";
import NavbarList from "./NavbarList";

function Navbar({ darkModeComp }) {
  return (
    <div className={`navbar shadow-lg h-16 ${darkModeComp ? 'bg-gray-900 text-white' : 'bg-Gainsboro text-black'}`}>
      <div className="navbar-start">
        <div className="dropdown bg-gray-200">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-8 w-52 p-2 shadow-xl font-BebasNeue text-2xl"
          >
            <NavbarList />
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-BebasNeue text-purple-700 px-20">
          WELCOME!
        </a>
      </div>
      <div className="navbar-end hidden lg:flex font-bold font-BebasNeue">
        <ul className="menu menu-horizontal px-1 text-l pr-10 text-black-300">
          <NavbarList />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
