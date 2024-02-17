import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Navbar from "./components/navbar";
import Home from "./page/home";
import AddNotes from "./page/addNotes";
import Detail from "./page/detail";
import User from "./page/user";
import EditUser from "./page/editUser";
import DetailUser from "./page/detailUser";
function access() {
  if (!localStorage.access_token) {
    return redirect("/login");
  }
  return null;
}

function cantBack() {
  if (localStorage.access_token) {
    return redirect("/");
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
    loader: cantBack,
  },
  {
    path: "/register",
    element: <Register></Register>,
    loader: cantBack,
  },
  {
    path: "/",
    element: <Navbar></Navbar>,
    loader: access,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "addNote",
        element: <AddNotes></AddNotes>,
      },
      {
        path: "detail",
        element: <Detail></Detail>,
      },
      {
        path: "user",
        element: <User></User>,
      },
      {
        path: "editUser",
        element: <EditUser></EditUser>,
      },
      {
        path: "detailUser",
        element: <DetailUser></DetailUser>,
      },
    ],
  },
]);

export default router;
