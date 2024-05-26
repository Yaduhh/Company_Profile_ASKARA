import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { IoCreate } from "react-icons/io5";
import Dashboard from "./master/Dashboard";
import CreateArtikel from "./../components/CreateArtikel";
import { RiUser4Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import DataProduk from "../components/DataProduk";
import { RiDatabase2Fill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";
import DataArtikel from "../components/DataArtikel";
import { MdOutlineWavingHand } from "react-icons/md";

const Master = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081/master")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setUsername(res.data.username);
          setNamaLengkap(res.data.nama_lengkap);
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
      return <Dashboard namaLengkap={namaLengkap} />;
    } else if (activeTab === "createArtikel") {
      return <CreateArtikel namaLengkap={namaLengkap} />;
    } else if (activeTab === "dataProduct") {
      return <DataProduk />;
    } else if (activeTab === "dataArtikel") {
      return <DataArtikel />;
    }
  };
  return (
    <>
      {/* LOGIN */}
      {auth ? (
        <div className="w-full h-screen flex bg-[#D9D9D9] relative -z-0 overflow-hidden font-primary">
          {/* Accent bg */}
          <img
            className="absolute -z-50 right-0 top-0 w-full"
            src="./dashboard/bg-accent.svg"
            alt="bg-accent"
          />
          <img
            className="absolute -z-50 left-0 top-0 -scale-100 w-full"
            src="./dashboard/bg-accent.svg"
            alt="bg-accent"
          />
          {/* SIDEDBAR */}
          <div className="bg-white/70 backdrop-blur w-[20%] 2xl:w-[17%] h-screen rounded-e-[30px] shadow-sm shadow-white py-6 2xl:py-12">
            <img
              className="w-full px-8 2xl:px-14"
              src="./dashboard/logoprimary.svg"
              alt="logo"
            />

            <div className="w-full p-5 2xl:p-8 space-y-2">
              <button
                className={`flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8 ${
                  activeTab === "dashboard" &&
                  "bg-primary text-white rounded-2xl"
                }`}
                onClick={() => handleTabChange("dashboard")}
              >
                <MdSpaceDashboard size={30} />
                <p>Dashboard</p>
              </button>
              <button
                className={`flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8 ${
                  activeTab === "dataProduct" &&
                  "bg-primary text-white rounded-2xl"
                }`}
                onClick={() => handleTabChange("dataProduct")}
              >
                <RiDatabase2Fill size={30} />
                <p>Data Produk</p>
              </button>
              <button
                className={`flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8 ${
                  activeTab === "dataArtikel" &&
                  "bg-primary text-white rounded-2xl"
                }`}
                onClick={() => handleTabChange("dataArtikel")}
              >
                <MdArticle size={30} />
                <p>Data Artikel</p>
              </button>
              <button
                className={`flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8 ${
                  activeTab === "createArtikel" &&
                  "bg-primary text-white rounded-2xl"
                }`}
                onClick={() => handleTabChange("createArtikel")}
              >
                <IoCreate size={30} />
                <p>Create Artikel</p>
              </button>

              <div className="pt-10">
                <p className="text-sm text-grey px-6 2xl:px-8">Website</p>
                <a
                  href="/"
                  className="flex w-full items-center gap-2 2xl:gap-3 text-lg 2xl:text-xl justify-start py-2 px-6 2xl:px-8"
                >
                  <LiaBlogSolid size={30} />
                  Web Company
                </a>
              </div>
            </div>
          </div>
          {/* END SIDEBAR */}

          {/* Content */}
          <div className="w-[80%] 2xl:w-[83%] min-h-screen relative z-0">
            {/* NAVBAR */}
            <nav className="">
              <div className="flex 2xl:p-12 w-full justify-between bg-primary">
                <div className="absolute top-6 2xl:top-10 left-6 z-50">
                  <div className="text-2xl text-primary select-none w-fit">
                    <div className="font-semibold flex items-center gap-2">
                      <MdOutlineWavingHand size={30} />
                      <p>Hello! {namaLengkap}</p>
                    </div>
                    <div className="w-auto h-[1px] bg-primary my-2"></div>
                  </div>
                </div>

                <div className="absolute top-6 2xl:top-10 2xl:right-12 right-6 z-10">
                  <div className="relative">
                    <button
                      onClick={toggleSubMenu}
                      className="bg-primary/30 hover:bg-white/30 duration-200 backdrop-blur flex items-center gap-3 w-full px-6 py-2 2xl:text-lg text-sm rounded-2xl text-white"
                    >
                      <RiUser4Fill />
                      {username}
                      <IoIosArrowDown />
                    </button>
                    {isSubMenuOpen && (
                      <div className="absolute right-0 mt-2 w-46 text-white rounded-2xl backdrop-blur py-2 bg-primary/30 z-20 hover:bg-white/30 duration-150">
                        <button
                          className="flex gap-3 px-6 2xl:text-lg text-sm items-center"
                          onClick={handleDelete}
                        >
                          <PiSignOutBold />
                          SignOut
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            {/* END NAVBAR */}

            <div>{renderContent()}</div>
          </div>
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
