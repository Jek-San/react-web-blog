import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src=" https://images.pexels.com/photos/10208449/pexels-photo-10208449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        impedit odio ab illum cumque, debitis in quasi quis natus voluptas
        itaque sunt error ea optio similique animi id aliquam. Aut. ipsum dolor
        sit amet, consectetur adipisicing elit. Placeat impedit odio ab illum
        cumque, debitis in quasi quis natus voluptas itaque sunt error ea optio
        similique animi id aliquam. Aut. ipsum dolor sit amet, consectetur
        adipisicing elit. Placeat impedit odio ab illum cumque, debitis in quasi
        quis natus voluptas itaque sunt error ea optio similique animi id
        aliquam. Aut. ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat impedit odio ab illum cumque, debitis in quasi quis natus
        voluptas itaque sunt error ea optio similique animi id aliquam. Aut.
      </p>
    </div>
  )
}
