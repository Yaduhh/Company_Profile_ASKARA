import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { IoCreate } from "react-icons/io5";
import Dashboard from "./master/Dashboard";

const Master = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081/master")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setUsername(res.data.username);
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

  // State untuk melacak tab aktif
  const [activeTab, setActiveTab] = useState("dashboard");

  // Fungsi untuk menangani perubahan tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Fungsi untuk merender konten sesuai tab yang aktif
  const renderContent = () => {
    if (activeTab === "dashboard") {
      return <Dashboard />;
    } else if (activeTab === "createArtikel") {
      return <CreateArtikel />;
    }
  };
  return (
    <>
      {/* LOGIN */}
      {auth ? (
        <div className="w-full h-screen flex bg-[#D9D9D9] relative -z-0 overflow-hidden font-primary">
          {/* Accent bg */}
          <img
            className="absolute -z-10 right-0 top-0 w-full"
            src="./dashboard/bg-accent.svg"
            alt="bg-accent"
          />
          <img
            className="absolute -z-10 left-0 top-0 -scale-100 w-full"
            src="./dashboard/bg-accent.svg"
            alt="bg-accent"
          />
          {/* SIDEDBAR */}
          <div className="bg-white/60 backdrop-blur w-[20%] h-screen rounded-e-[30px] shadow-sm shadow-white py-6">
            <img
              className="w-full px-8"
              src="./dashboard/logoprimary.svg"
              alt="logo"
            />

            <div className="w-full p-5 space-y-1">
              <button
                className={`flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8 ${
                  activeTab === "dashboard" &&
                  "bg-white text-primary rounded-full"
                }`}
                onClick={() => handleTabChange("dashboard")}
              >
                <MdSpaceDashboard size={30} />
                <p>Dashboard</p>
              </button>
              <button
                className={`flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8 ${
                  activeTab === "createArtikel" &&
                  "bg-white text-primary rounded-full"
                }`}
                onClick={() => handleTabChange("createArtikel")}
              >
                <IoCreate size={30} />
                <p>Create Artikel</p>
              </button>
              <a
                href="/"
                className="flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8"
              >
                <LiaBlogSolid size={30} />
                Lihat Blog
              </a>
            </div>
          </div>
          <div className="w-[80%] min-h-screen bg-white">{renderContent()}</div>
          <h3>You're Authorized --- {username}</h3>
          <button onClick={handleDelete}>Logout</button>
        </div>
      ) : (
        // NON LOGIN
        <div className="">
          <h3 className="text-primary">{message}</h3>
          <h3 className="mb-4 font-primary">Login Now</h3>
          <Link
            to="/masterlogin"
            className="bg-primary rounded-2xl text-white px-8 py-2 "
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Master;
