import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div>Profile</div>
      <ul>
        <NavLink to="/profile/about-me">About me</NavLink>
        <NavLink to="/profile/settings">Settings</NavLink>
      </ul>
      <Outlet />
    </div>
  );
}
