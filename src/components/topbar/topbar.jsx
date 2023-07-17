import { Link } from "react-router-dom";
import "./topbar.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/sidebar.jpeg";


export default function Topbar() {

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
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">CONTACT</Link>
            </li>
            <li className="topListItem">
            <Link to="/write" className="link">WRITE</Link>
            </li>
            <li className="topListItem">
            <Link to="/login" className="link">LOGOUT</Link>
            </li>

        </ul>
        </div>
      <div className="topRight">
          <Link to="/settings">
          <img className="topImg"
          src={pic}
          alt=""
          />
          </Link>

        </div>
    </div>
  )
}