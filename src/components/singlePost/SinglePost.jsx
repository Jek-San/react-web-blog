import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import { useSelector } from "react-redux"
import { selectUserData } from "../../redux/userSlice"

export default function SinglePost() {
  const PF = "http://localhost:8800/images/"

  const [post, setPost] = useState({})
  const userData = useSelector(selectUserData)

  const location = useLocation()
  const path = location.pathname.split("/")[2]
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      setPost(res.data)
    }

    fetchPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: userData.username },
      })
      window.location.replace("/")
    } catch (err) {
      console.log(err)
    }
  }
  console.log(post._id)
  const handleEdit = async () => {}
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
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
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  )
}
