import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TableNote from "../components/tableNote";

export default function Home() {
  const [Loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const getNotes = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        method: "get",
        url: "https://62.72.13.124/api/notes/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setNotes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);
  if (Loading) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <p className="mt-3">
              <h1 className="text-uppercase fs-1 text-light">Loading...</h1>
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/addNote");
        }}
      >
        {" "}
        Add new note
      </button>
      <table class="table table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">note_id</th>
            <th scope="col">note</th>
            <th scope="col">title</th>
            <th scope="col">user_id</th>
            <th scope="col">user_name</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {notes?.notes?.map((el, i) => {
            return (
              <>
                <TableNote key={i} el={el}></TableNote>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}