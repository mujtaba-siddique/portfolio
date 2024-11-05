import { Link } from "react-router-dom";

function NavbarList() {
  return (
    <ul className="text-center md:flex md:space-x-6 md:px-16">
      <li>
        <Link to="/Home" className="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/About" className="hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link to="/Projects" className="hover:underline">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/Contact" className="hover:underline">
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default NavbarList;
