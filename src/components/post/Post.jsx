import "./post.css"
import { Link } from "react-router-dom"
import moment from "moment"

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="postImg" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
      </div>
      <p className="postDesc">{post?.desc}</p>
    </div>
  )
}
