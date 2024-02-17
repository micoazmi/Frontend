import React from "react";

export default function TableUser({ el }) {
  console.log(el);
  return (
    <>
      <tr>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.user}</td>
        <td>{el.created_at}</td>
        <td>{el.updated_at}</td>
        <td className="d-flex gap-1">
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-secondary">Edit</button>
          <button className="btn btn-info">Detail</button>
        </td>
      </tr>
    </>
  );
}
