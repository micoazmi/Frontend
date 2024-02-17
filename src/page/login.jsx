import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    pass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "https://62.72.13.124/api/login",
        data: form,
      });
      console.log(data);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("user", data.user.user);
      navigate("/home");
      Swal.fire({ text: "Sukses Login" });
    } catch (error) {
      console.log(error);
      Swal.fire({ text: "Username/password salah" });
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <form
        style={{
          width: "300px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="user"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="pass"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Log In
          </button>
        </div>
        <div className="mb-3">
          <a href="#forgotPassword">Forgot Password?</a>
        </div>
        <hr />
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-success"
            style={{ width: "100%" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
}
