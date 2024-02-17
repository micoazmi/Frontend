import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: "https://62.72.13.124/api/logout",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
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
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                User
              </a>
            </li>
            <li className="nav-item " style={{ marginLeft: "80vw" }}>
              <a className="nav-link" href="#" onClick={Logout}>
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
