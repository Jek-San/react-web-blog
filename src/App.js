import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store"
import { loginUser, selectUserData } from "./redux/userSlice";
import { useEffect } from "react";


const user = true;
// const Layout = () => {


//   return (
//     <>
//       <TopBar />
//       <Outlet />

//     </>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/post/:id",
//         element: <Single />,
//       },
//       {
//         path: "/write",
//         element: (
//           user ?
//             <Write /> :
//             <Register />),
//       },
//       {
//         path: "/settings",
//         element: (

//           <Settings />),
//       },
//       {
//         path: "/login",
//         element: (
//           user ? <Home /> :
//             <Login />),
//       },
//       {
//         path: "/register",
//         element: (
//           user ? <Home /> :
//             <Register />

//         ),
//       },
//     ],
//   },


//   {
//     path: "/"
//   }
// ])

function App() {
  // Use useSelector to get user data from Redux store
  const userData = useSelector(selectUserData);

  return (

    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
          <Route
            path="/write"
            element={userData ? <Write /> : <Register />}
          />
          <Route
            path="/login"
            element={(
              userData ? <Home /> :
                <Login />)}
          />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
