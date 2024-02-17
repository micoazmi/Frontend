import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function TableUser({ el, Refetch }) {
  const navigate = useNavigate();
  const updated = el?.updated_at?.split("T")[0];
  const created = el?.created_at?.split("T")[0];
  const deleteUser = async () => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `https://62.72.13.124/api/users/${el.id}`,
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
    <>
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.user}</td>
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
                state: { id: el.id, name: el.name, user: el.user },
              });
            }}
          >
            Edit
          </button>
          <button className="btn btn-info">Detail</button>
        </td>
      </tr>
    </>
  );
}
