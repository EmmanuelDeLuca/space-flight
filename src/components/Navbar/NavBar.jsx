import React from "react";
import logoImg from "../../assets/images/tecnologia.png";
import "../Navbar/styles.css";

export function NavBar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h2>Space Flight News</h2>
        </div>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
