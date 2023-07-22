import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/sidebar.jpeg";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/inish99">
          <i className="topIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/inishbashyal/">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://twitter.com/Inish91939581">
          <i className="topIcon fa-brands fa-square-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/inish-bashyal-3736801b5/">
          <i className="topIcon fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/dashboard">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/workout">
              Workout Plans
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/dashboard">
              Routines
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/aboutUs">
              About Us
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <div className="dropdown">
          <img
            className="topImg"
            src={pic}
            alt=""
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="dropdownContent">
              <Link to="/settings">Update Account</Link>
              <Link to="/">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
