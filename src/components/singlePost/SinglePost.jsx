import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"

export default function SinglePost() {
  const [post, setPost] = useState({})

  const location = useLocation()
  const path = location.pathname.split("/")[2]
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      setPost(res.data)
    }

    fetchPost()
  }, [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-regular fa-trash-can"></i>
          </div>
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
