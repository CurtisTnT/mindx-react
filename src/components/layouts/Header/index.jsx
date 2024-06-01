import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Header() {
  return (
    <div>
      <ul className="nav-container">
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          Register
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active-nav" : "")}
        >
          Profile
        </NavLink>
      </ul>
    </div>
  );
}
