import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  const user = false
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
          {user && (
            <li className="topListItem">
              <Link to={"/logout"} className="link">
                LOGOUT
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
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
