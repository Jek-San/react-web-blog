import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture </label>
          <div className="settingsPP">
            <img
              src=" https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt="profilPicture"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" name="" id="fileInput" hidden />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ihsan" />
          <label>Email</label>
          <input type="email" placeholder="ihsan@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="*****" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>

      <Sidebar />
    </div>
  )
}
