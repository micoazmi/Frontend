import React, { useState } from "react";
export default function Login() {
  const [form, setForm] = useState({
    user: "",
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
  const handleSubmit = () => {};

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
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
}
