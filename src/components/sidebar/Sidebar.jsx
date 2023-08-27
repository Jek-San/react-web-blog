import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/17993801/pexels-photo-17993801/free-photo-of-hutan-pohon-vintage-lentera.jpeg?auto=compress&cs=tinysrgb&w=720&h=425&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed
          doloremque, debitis dolores iure exercitationem, delectus facere
          veniam ratione, quibusdam excepturi! Expedita est alias ipsum impedit
          officiis error soluta unde!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
