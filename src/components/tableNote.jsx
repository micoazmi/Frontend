import React from "react";

export default function TableNote({ el }) {
  return (
    <>
      <tr>
        <td>{el.note_id}</td>
        <td>{el.note}</td>
        <td>{el.title}</td>
        <td>{el.user_id}</td>
        <td>{el.user_name}</td>
        <td className="d-flex gap-1">
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-secondary">Edit</button>
        </td>
      </tr>
    </>
  );
}
