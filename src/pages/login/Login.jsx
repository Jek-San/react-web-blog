import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { useDispatch, useSelector } from "react-redux"
import {
  loginUser,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  selectError,
  selectIsFetching,
} from "../../redux/userSlice"
import { useState } from "react"
import axios from "axios"

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  })

  const { usernameOrEmail, password } = formData
  const errorState = useSelector(selectError)
  const isFetching = useSelector(selectIsFetching)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginUserRequest())

    if (!usernameOrEmail || !password) {
      dispatch(loginUserFailure("Please enter username and password"))
      return // Don't proceed with the login if fields are empty
    }

    try {
      const res = await axios.post("/auth/login", {
        usernameOrEmail: usernameOrEmail,
        password: password,
      })
      dispatch(loginUserSuccess(res.data))
      localStorage.setItem("userData", JSON.stringify(res.data))

      res.data && navigate("/")
    } catch (err) {
      dispatch(
        loginUserFailure("Login Failed. Please check your credential", err)
      )
    }
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>Username/Email</label>
        <input
          type="text"
          name="usernameOrEmail"
          value={usernameOrEmail}
          placeholder="Enter your email or username..."
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password..."
          onChange={handleInputChange}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          {isFetching ? "Logging in..." : "Login"}
        </button>
        <button className="loginRegisterButton">
          <Link to={"/register"} className="link">
            Register
          </Link>
        </button>
        {errorState && <span>{errorState}</span>}
      </form>
    </div>
  )
}
