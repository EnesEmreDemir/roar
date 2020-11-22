import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="login">Login</a>
        </li>
        <li>
          <a href="register">Register</a>
        </li>
      </ul>
    </div>
  );
}
