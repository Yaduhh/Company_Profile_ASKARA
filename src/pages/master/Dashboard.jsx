import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const Dashboard = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          navigate("/login");
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="">
          {auth ? (
            <div>
              <h3>You're Authorized --- {name}</h3>
              <button onClick={handleDelete}>Logout</button>
            </div>
          ) : (
            <div>
              <h3>{message}</h3>
              <h3>Login NOW</h3>
            </div>
          )}
          <p>INi dashboard master</p>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
