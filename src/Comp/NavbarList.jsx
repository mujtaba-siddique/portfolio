import { Link } from "react-router-dom";

function NavbarList() {
    return (
        <ul className="text-center md:flex md:space-x-6 md:px-16"> 
            <li>
                <Link to="/Home" className="hover:underline">Home</Link>
            </li>
            <li>
                <Link to="/About" className="hover:underline">About</Link>
            </li>
            <li>
                <Link to="/Projects" className="hover:underline">Projects</Link>
            </li>
            <li>
                <Link to="/Contact" className="hover:underline">Contact Me</Link>
            </li>
        </ul>
    );
}

export default NavbarList;


    {/* <li className="m-4"><a>HOME</a></li>
    <li className="m-4"><a >ABOUT</a></li>
    <li className="m-4"><a>PROJECTS</a></li>
    <li className="m-4"><a>CONTACT ME</a></li> */}
    
    
// );
// }
// export default NavbarList;


// import { Link } from 'react-router-dom';

// function NavbarList() {
//   return (
//     <li className="menu-item ">
//       <Link to="/Home" className="hover:underline">Home</Link>
//       <Link to="/About" className="hover:underline ml-4">About</Link>
//     </li>
//   );
// }

// export default NavbarList;
