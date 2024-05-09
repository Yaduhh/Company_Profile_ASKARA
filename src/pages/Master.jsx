import { MdSpaceDashboard } from "react-icons/md";
import { useState } from "react";
import CreateArtikel from "../components/CreateArtikel";
import Dashboard from "./master/Dashboard";
import { LiaBlogSolid } from "react-icons/lia";
import { IoCreate } from "react-icons/io5";

const Master = () => {
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
      <section id="master" className="flex font-primary justify-end flex-row">
        <div className="w-[20%] min-h-screen bg-primary flex flex-col gap-4 items-center text-white pt-10 fixed top-0 left-0">
          <div className="space-y-2">
            <img
              src="./images/fotopribadi.jpg"
              alt="foto pribadi"
              className="2xl:w-56 rounded-full 2xl:h-56 md:w-40 md:h-40 outline outline-white"
            />
            <div className="text-center text-xl">
              <h3>Vega Anggara</h3>
              <p className="text-sm text-white/50">Master Admin</p>
            </div>
          </div>

          {/* Menu Admin */}
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

          <div className="w-[80%] bg-white h-[1px] rounded-full"></div>
        </div>
        <div className="w-[80%] min-h-screen bg-white">{renderContent()}</div>
      </section>
    </>
  );
};

export default Master;
