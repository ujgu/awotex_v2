import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../Styles/Navbar.css";
import AwotexNavLogo from "../Assets/Images/awotexNav.png";

export default function Navbar(props) {
  console.log(props.user.picture);
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <img src={AwotexNavLogo} alt="Awotex" />
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="games">Games</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <div className="NavRight">
              <img src={props.user.picture} alt="user" />
              <button onClick={props.onClick}>Logout</button>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
