import { createBrowserRouter, redirect } from "react-router-dom";

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
    element: <div>Login</div>,
    loader: cantBack,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
    loader: access,
  },
]);

export default router;
