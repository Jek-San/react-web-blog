import { Link } from "react-router-dom"
import "./topbar.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
  loginUser,
  logoutUser,
  selectIsFetching,
  selectUserData,
} from "../../redux/userSlice"

export default function TopBar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)
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
          <Link to={"/settings"}>
            <img
              className="topImg"
              src={
                userData ? PF + userData?.profilePicture : PF + "noAvatar.png"
              }
              alt="profilPicture"
            />
          </Link>
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
