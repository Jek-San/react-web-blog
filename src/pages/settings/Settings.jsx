import React, { useState } from "react"
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useDispatch, useSelector } from "react-redux"
import { loginUser, selectUserData } from "../../redux/userSlice"
import axios from "axios"

export default function Settings() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const userData = useSelector(selectUserData)
  const dispatch = useDispatch()

  const [file, setFile] = useState(null)
  const [formUserData, setFormUserData] = useState({
    userId: userData._id,
    username: userData.username,
    email: userData.email,
    password: "", // This should be handled separately, typically not in settings
  })

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create a new user data object based on the form input
    const newUserData = {
      userId: formUserData.userId,
      username: formUserData.username,
      email: formUserData.email,
      password: formUserData.password,
    }

    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newUserData.profilePicture = filename
      console.log(newUserData)
      try {
        const uploadFileRes = await axios.post("/upload", data)

        // for (const [key, value] of data.entries()) {
        //   console.log(`${key}: ${value}`)
        // }
      } catch (error) {
        setError(error.response.data)
      }
    }
    try {
      const res = await axios.put("/users/" + userData._id, newUserData)
      dispatch(loginUser(res.data))

      localStorage.setItem("userData", JSON.stringify(res.data))
      setSuccess(true)
    } catch (err) {
      setError(err.response.data)
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  const handleFormDataUserChange = (e) => {
    setSuccess(false)
    setError(false)
    const { name, value } = e.target
    setFormUserData({
      ...formUserData,
      [name]: value,
    })
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          {/* Add a delete account functionality */}
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                file ? URL.createObjectURL(file) : PF + userData.profilePicture
              }
              alt="Profile"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formUserData.username}
            onChange={handleFormDataUserChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formUserData.email}
            onChange={handleFormDataUserChange}
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="Confirm your password"
            value={formUserData.password}
            onChange={handleFormDataUserChange}
          />
          <button type="submit" className="settingsSubmit">
            Update
          </button>
          {error && (
            <p className="settingsError" style={{ color: "red" }}>
              {error}
            </p>
          )}
          {success && (
            <p className="settingsSuccess" style={{ color: "green" }}>
              Profile has been updated...
            </p>
          )}
        </form>
      </div>

      <Sidebar />
    </div>
  )
}
