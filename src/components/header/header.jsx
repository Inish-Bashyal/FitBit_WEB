import "./header.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/header.jpeg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">Welcome To FitBit</span>
      </div>
      <img 
      className="headerImg" 
      src={pic}
        alt="" />
    </div>
  )
}