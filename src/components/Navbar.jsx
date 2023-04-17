import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/html">HTML</Link>
      </li>
      <li>
        <Link to="/css">CSS</Link>
      </li>
      <li>
        <Link to="/js">JS</Link>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;