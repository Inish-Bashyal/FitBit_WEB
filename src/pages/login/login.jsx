import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">

        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username" />

        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password" />

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