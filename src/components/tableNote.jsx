import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function TableNote({ el, Refetch }) {
  let key = 0;
  const navigate = useNavigate();
  const deleteNote = async () => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `https://62.72.13.124/api/notes/${el.note_id}`,
        headers: { Authorization: "Bearer " + localStorage.access_token },
      });
      Swal.fire({ text: "Berhasil Delete" });
      Refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({ text: "gagal delete" });
    }
  };
  return (
    <>
      <tr key={el.note_id}>
        <td>{el.note_id}</td>
        <td>{el.note}</td>
        <td>{el.title}</td>
        <td>{el.user_id}</td>
        <td>{el.user_name}</td>
        <td className="d-flex gap-1">
          <button className="btn btn-danger" onClick={deleteNote}>
            Delete
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              navigate("/addNote", {
                state: {
                  note: el.note,
                  title: el.title,
                  id: el.note_id,
                },
              })
            }
          >
            Edit
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              navigate("/detail", {
                state: {
                  id: el.note_id,
                },
              });
            }}
          >
            Detail
          </button>
        </td>
      </tr>
    </>
  );
}
