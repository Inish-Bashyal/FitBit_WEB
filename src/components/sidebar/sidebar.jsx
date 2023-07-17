import "./sidebar.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/sidebar.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img 
        src={pic}
        alt=""
        />
        <p>
            Hello, My name is Inish Bashyal. I am currently studying IT in Softwarica College of IT and E-Commerce. I live in Kalopul, Kathmandu. But my permanent adress is Butwal, Rupandehi.
        </p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Travel</li>

        </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">

            <a href="https://www.facebook.com/inish99">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            </a>

            <a href="https://www.instagram.com/inishbashyal/">
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </a>

            <a href="https://twitter.com/Inish91939581">  
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/in/inish-bashyal-3736801b5/">
            <i className="sidebarIcon fa-brands fa-linkedin"></i> 
            </a>
            
            </div>
        </div>

    </div>
  )
}