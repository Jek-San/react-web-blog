import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../posts/Posts"
import axios from "axios"

import "./home.css"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserData } from "../../redux/userSlice"

export default function Home() {
  const userData = useSelector(selectUserData)
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}
