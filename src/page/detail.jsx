import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const [OneNote, setOneNote] = useState({});

  const getOneNote = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://62.72.13.124/api/notes/${location.state.id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      setOneNote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneNote();
  }, []);
  return (
    <>
      <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
        <div className="card-body">
          <h5 className="card-title">{OneNote?.note?.title}</h5>
          <h6 className="card-title">Note Id: {OneNote?.note?.note_id}</h6>
          <h6 className="card-subtitle mb-2 text-muted">
            User Id: {OneNote?.note?.user_id}
          </h6>
          <p className="card-text">{OneNote?.note?.note}</p>
        </div>
      </div>
    </>
  );
}
