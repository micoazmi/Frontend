import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const [getOneUser, setgetOneUser] = useState({});
  const [form, setform] = useState({
    name: location?.state?.name ? location.state.name : "",
    user: location?.state?.user ? location.state.user : "",
    pass: "",
  });
  console.log(form);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const fetchOneUsers = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://62.72.13.124/api/users/${location.state.id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      setgetOneUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatchOneUsers = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "put",
        url: `https://62.72.13.124/api/users/${location.state.id}`,
        data: form,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      Swal.fire({ text: "Sukses Edit User" });
      navigate("/user");
    } catch (error) {
      console.log(error);
      Swal.fire({ text: "Gagal Edit User" });
    }
  };

  useEffect(() => {
    fetchOneUsers();
  }, []);

  return (
    <div>
      <form onSubmit={dispatchOneUsers}>
        <div className="d-flex flex-column">
          <div className="p-2">
            {" "}
            <label className="text-white ">Name:</label>
            <input
              style={{ marginLeft: "20px" }}
              placeholder="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="p-2">
            <label className="text-white ">User: </label>
            <input
              style={{ marginLeft: "20px" }}
              placeholder="user"
              name="user"
              value={form.user}
              onChange={handleChange}
            ></input>
          </div>
          <div className="p-2">
            {" "}
            <label className="text-white ">Pass: </label>
            <input
              style={{ marginLeft: "20px" }}
              placeholder="pass"
              name="pass"
              onChange={handleChange}
            ></input>
          </div>
          <div className="p-2">
            {" "}
            <button type="submit" className="btn btn-primary">
              Edit User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
