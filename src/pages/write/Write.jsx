import { useState } from "react"
import "./write.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { selectUserData } from "../../redux/userSlice"

export default function Write() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [error, setError] = useState(false)
  const userData = useSelector(selectUserData)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      title,
      desc,
      username: userData.username,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename
      try {
        const uploadFileRes = await axios.post("/upload", data)
        if (uploadFileRes.status === 200) {
          try {
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id)
          } catch (err) {
            setError(true)
          }
        }
        // for (const [key, value] of data.entries()) {
        //   console.log(`${key}: ${value}`)
        // }
      } catch (error) {
        setError(true)
      }
    }
  }

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="imgUpload"
        />
      )}

      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            name="desc"
            onChange={(e) => {
              setDesc(e.target.value)
            }}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}
