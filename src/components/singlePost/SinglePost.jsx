import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import { useSelector } from "react-redux"
import { selectUserData } from "../../redux/userSlice"

export default function SinglePost() {
  const PF = "http://localhost:8800/images/"
  const userData = useSelector(selectUserData)

  const [post, setPost] = useState({})
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)

  const location = useLocation()
  const path = location.pathname.split("/")[2]
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }

    fetchPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: userData.username },
      })
      setUpdateMode(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = async () => {
    setUpdateMode(true)
  }

  const handleReset = (e) => {
    setTitle(post.title)
    setDesc(post.desc)
  }

  const handleSubmitUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: userData.username,
        title: title,
        desc: desc,
      })
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <>
            <input
              type="text"
              className="singlePostTitleInput"
              value={title}
              autoFocus
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <div className="singlePostEdit updateMode">
              <i
                class="singlePostIcon fa-solid fa-rotate-right"
                onClick={handleReset}
              ></i>
              <button className="singlePostButton" onClick={handleSubmitUpdate}>
                Update
              </button>
            </div>
          </>
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === userData?.username && (
              <div className="singlePostEdit">
                <i
                  className=" singlePostIcon fa-regular fa-pen-to-square"
                  onClick={handleEdit}
                ></i>
                <i
                  className=" singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {moment(post.createdAt).fromNow()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
            }}
          />
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}
      </div>
    </div>
  )
}
