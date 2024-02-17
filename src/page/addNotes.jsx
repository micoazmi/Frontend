import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddNotes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setform] = useState({
    note: location?.state?.note || "",
    title: location?.state?.title || "",
  });
  console.log(form);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };
  const newPost = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "https://62.72.13.124/api/notes/",
        data: form,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      Swal.fire({ text: "sukses tambah" });
      navigate("/home");
    } catch (error) {
      console.log(error);
      Swal.fire({ text: "gagal menambah" });
    }
  };

  const editPost = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "put",
        url: `https://62.72.13.124/api/notes/${location.state.id}`,
        data: form,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      Swal.fire({ text: "sukses Edit" });
      navigate("/home");
    } catch (error) {
      console.log(error);
      Swal.fire({ text: "gagal Edit" });
    }
  };

  return (
    <>
      <div>
        <form onSubmit={location.state ? editPost : newPost}>
          <div class="d-flex flex-column">
            <div class="p-2">
              {" "}
              <input
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={form.title}
              ></input>
            </div>
            <div class="p-2">
              {" "}
              <input
                placeholder="Note"
                name="note"
                onChange={handleChange}
                value={form.note}
              ></input>
            </div>
            <div class="p-2">
              {" "}
              <button type="submit" className="btn btn-primary">
                {location.state ? "Edit Notes" : "Add Notes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
