import React from "react";
import { Link,NavLink } from "react-router-dom";
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full shadow-md px-2 py-2">
      <Link to="/addmemory" className="text-2xl font-semibold text-blue-600">Memory Tracker</Link>
      <ul className="flex p-3 gap-8">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/addmemory">Add Memory</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
