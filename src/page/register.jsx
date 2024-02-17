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
  console.log(form);
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
        url: "https://62.72.13.124/api/register",
        data: {
          name: form.name,
          user: form.user,
          pass: form.pass,
        },
      });
      navigate("/login");
      console.log(data, "<-----------");
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
          onSubmit={handleSubmit}
        >
          <h1>Sign Up</h1>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="user"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="pass"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <hr />
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-success"
              style={{ width: "100%" }}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
