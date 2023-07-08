import "./header.css"
import pic from "/Users/inishbashyal/Desktop/REACT/blog_latest/src/assets/images/IMG_4047.JPG"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span> */}
      </div>
      <img 
      className="headerImg" 
      src={pic}
        alt="" />
    </div>
  )
}