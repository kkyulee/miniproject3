import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavStyle } from "./style";

const Nav = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
        <li>
          <Link to="photo">Photo</Link>
        </li>
        <li>
          <Link to="Board">Board</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
