import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "./page/login";
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
    path: "/",
    element: <div>Hello world!</div>,
    loader: access,
  },
]);

export default router;
