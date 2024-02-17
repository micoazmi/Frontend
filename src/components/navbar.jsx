import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between p-2">
        <a className="navbar-brand " href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                User
              </a>
            </li>
            <li className="nav-item " style={{ marginLeft: "80vw" }}>
              <a className="nav-link" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
