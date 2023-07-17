import Sidebar from "../../components/sidebar/sidebar"
import "./settings.css"
import pic from "/Users/inishbashyal/Desktop/REACT/blog_latest/src/assets/images/IMG_3872.jpeg"
 
export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete your account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                src={pic}
                alt=""
                />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>

            <label>Username</label>
            <input type="text" placeholder="Username"/>

            <label>Email</label>
            <input type="text" placeholder="email@gmail.com"/>

            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
      </div>
      <Sidebar />
    </div>
  )
}