import React from 'react';
import "./settings.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/sidebar.jpeg";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={pic} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Username" />

          <label>Email</label>
          <input type="text" placeholder="email@gmail.com" />

          <label>Password</label>
          <input type="password" />
          <div className="buttonContainer">
            <button className="settingsSubmit">Update</button>
            <button className="settingsDelete">Delete Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}
