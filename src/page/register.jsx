import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    name: "",
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
      Swal.fire({ text: "Sukses Register" });
    } catch (error) {
      console.log(error);
      Swal.fire({ text: "Register Error" });
    }
  };
  return (
    <>
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
        >
          <h1>Sign Up</h1>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
            />
          </div>

          <hr />
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "100%" }}
              onClick={() => {}}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
