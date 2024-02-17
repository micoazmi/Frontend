import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function DetailUser() {
  const location = useLocation();
  const [OneUser, setOneUser] = useState({});
  console.log(OneUser);

  const getOneUser = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://62.72.13.124/api/users/${location.state.id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      setOneUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneUser();
  }, []);
  console.log(location.state);

  return (
    <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">Id: {OneUser.user?.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Name:{OneUser.user?.name}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          User:{OneUser.user?.user}
        </h6>
        <p className="card-text">created At : {OneUser.user?.created_at}</p>
        <p className="card-text">updated At : {OneUser.user?.updated_at}</p>
      </div>
    </div>
  );
}
