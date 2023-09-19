import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { useDispatch } from "react-redux"
import { loginUser } from "../../redux/userSlice"
import { useState } from "react"
import axios from "axios"

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [usernameOrEmail, setUsernameorEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault()
    setError(false)
    if (!usernameOrEmail || !password) {
      setError(true)
      return // Don't proceed with the login if fields are empty
    }
    try {
      const res = await axios.post("/auth/login", {
        usernameOrEmail: usernameOrEmail,
        password: password,
      })
      dispatch(loginUser(res.data))
      localStorage.setItem("userData", JSON.stringify(res.data))

      res.data && navigate("/")
    } catch (err) {
      setError(true)
    }
  }
  console.log(usernameOrEmail)
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>Username/Email</label>
        <input
          type="text"
          placeholder="Enter your email or username..."
          onChange={(e) => {
            setUsernameorEmail(e.target.value)
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
        <button className="loginRegisterButton">
          <Link to={"/register"} className="link">
            Register
          </Link>
        </button>
        <span>User Or Password is Incorect</span>
      </form>
    </div>
  )
}
