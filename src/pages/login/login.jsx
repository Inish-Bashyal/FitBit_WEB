import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <div className="formGroup">
          <label>Username</label>
          <input className="loginInput" type="text" placeholder="Enter your username" />
        </div>

        <div className="formGroup">
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password" />
        </div>

        <button className="loginButton">
          <Link className="link" to="/login">LOGIN</Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">REGISTER</Link>
      </button>
    </div>
  )
}
