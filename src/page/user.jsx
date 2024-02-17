import React, { useEffect, useState } from "react";
import TableUser from "../components/tableUser";
import axios from "axios";
export default function User() {
  const [Loading, setLoading] = useState(false);
  const [User, setUser] = useState({});
  const getUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        method: "get",
        url: "https://62.72.13.124/api/users/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  const Refetch = () => {
    getUser();
  };
  useEffect(() => {
    getUser();
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80vw" }}>
        <table className="table table-dark mt-5 mx-auto">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">user</th>
              <th scope="col">created At</th>
              <th scope="col">updated At</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {User?.users?.map((el) => {
              return (
                <TableUser key={el.id} el={el} Refetch={Refetch}></TableUser>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
