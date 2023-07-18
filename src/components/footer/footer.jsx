import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerLeft">
          <p>&copy; {new Date().getFullYear()} FitBit. All rights reserved.</p>
        </div>
        <div className="footerRight">
          <ul className="footerLinks">
            <li><a href="#">Softwarica</a></li>
            <li><a href="#">SchoolWorksPro</a></li>
            <li><a href="#">FitBit</a></li>
            <li><a href="#">Home Fitnes</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
