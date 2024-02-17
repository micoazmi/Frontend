import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function TableOneUser({
  id,
  name,
  user,
  created,
  updated,
  Refetch,
}) {
  const navigate = useNavigate();
  const deleteUser = async () => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `https://62.72.13.124/api/users/${id}`,
        headers: { Authorization: "Bearer " + localStorage.access_token },
      });
      Swal.fire({ text: "Berhasil Delete User" });
      Refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({ text: "gagal delete User" });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{user}</td>
      <td>{created ? created : ""}</td>
      <td>{updated ? updated : ""}</td>
      <td className="d-flex gap-1">
        <button className="btn btn-danger" onClick={deleteUser}>
          Delete
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate("/editUser", {
              state: { id: id, name: name, user: user },
            });
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            navigate("/detailUser", {
              state: {
                id: id,
              },
            });
          }}
        >
          Detail
        </button>
      </td>
    </tr>
  );
}
