import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navigation-bar">
      <ul>
        <li>
          <i className="fas fa-home fa-lg"></i>
        </li>
        <li>
          <i className="fas fa-bell fa-lg"></i>
        </li>
        <li>
          <i className="fas fa-paper-plane fa-lg"></i>
        </li>
        <li>
          <i className="fas fa-user-circle fa-lg"></i>
        </li>
        <li>
          <i className="fas fa-users fa-lg"></i>
        </li>
      </ul>
    </div>
  );
}
