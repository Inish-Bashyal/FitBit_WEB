import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/sidebar.jpeg";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userDataLoaded, setUserDataLoaded] = useState(false);

  useEffect(() => {
    // Fetching user details from the backend using the getMe API endpoint
    const fetchUserDetails = async () => {
      try {
        // Get the bearer token from local storage
        const token = localStorage.getItem("token");

        console.log("Token:", token);


        // Decoding the JWT token to get the user ID
        const decodedToken = parseJwt(token);
        const userId = decodedToken ? decodedToken.id : null;

        if (!userId) {
          // Handling the case where the token is invalid or missing user ID
          console.error("Invalid token or missing user ID");
          return;
        }

        // Set the request headers with the bearer token
        const headers = {
          Authorization: "Bearer " + token,
        };

        // Make the API call with the headers
        const response = await axios.get(
          "http://localhost:3001/users/getMe/" + userId,
          { headers }
        );

        // Assuming the response contains the user details, update the state
        setUser(response.data.user);
        setUserDataLoaded(true); // Set userDataLoaded to true after fetching user data
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Function to decode the JWT token
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    fetchUserDetails();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    // Redirect to the home page or login page
    window.location.href = "/";
  };

  console.log("userDataLoaded:", userDataLoaded);
  console.log("user:", user);

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
          {userDataLoaded && user ? ( // Show topImg only when user data is loaded and the user is logged in
            user.image ? (
              <img
                className="topImg"
                crossorigin="anonymous"
                src={"http://localhost:3001/uploads/" + user.image}
                alt=""
                onClick={toggleDropdown}
              />
            ) : (
              <img
                className="topImg"
                src={pic}
                alt=""
                onClick={toggleDropdown}
              />
            )
          ) : null}
          {dropdownOpen && (
            <div className="dropdownContent">
              <Link to="/settings">Update Account</Link>
              <Link onClick={handleLogout}>Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}