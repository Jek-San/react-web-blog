import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom"
const user = false;
const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: (
          user ?
            <Write /> :
            <Register />),
      },
      {
        path: "/settings",
        element: (

          <Settings />),
      },
      {
        path: "/login",
        element: (
          user ? <Home /> :
            <Login />),
      },
      {
        path: "/register",
        element: (
          user ? <Home /> :
            <Register />

        ),
      },
    ],
  },


  {
    path: "/"
  }
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;
