import { Link } from "react-router-dom"
import "./topbar.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { loginUser, logoutUser, selectUserData } from "../../redux/userSlice"

export default function TopBar() {
  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData)
      dispatch(loginUser(parsedUserData))
    } else {
      dispatch(loginUser(null))
    }
  }, [dispatch])

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"} className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/about"} className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/contact"} className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/write"} className="link">
              WRITE
            </Link>
          </li>
          {userData && (
            <li className="topListItem">
              <a className="link" onClick={handleLogout}>
                LOGOUT
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {userData ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&dpr=1"
            alt="profilPicture"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to={"/login"} className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to={"/register"} className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
