import React from "react";
import { MdOutlineArticle } from "react-icons/md";
import { RiDatabase2Line } from "react-icons/ri";
import { FaChalkboardUser } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <>
      <section className="w-full h-screen 2xl:px-12 px-6 2xl:pt-4 pt-20 2xl:space-y-8 space-y-6">
        <div className="grid grid-cols-12 gap-6 2xl:gap-8 capitalize">
          <div className="col-span-4 overflow-hidden relative -z-0 min-h-20 max-h-28 2xl:min-h-36 2xl:max-h-40 bg-white/70 rounded-2xl backdrop-blur p-4 2xl:p-6 flex justify-between text-primary items-start">
            <MdOutlineArticle size={90} />
            <MdOutlineArticle
              size={200}
              className="absolute w-full 2xl:-left-56 -left-44 -top-7 -z-10 text-grey/20"
            />
            <div className="text-end">
              <p className="text-lg 2xl:text-xl font-medium">Jumlah Artikel</p>
              <p className="text-4xl 2xl:text-6xl font-semibold">25</p>
            </div>
          </div>
          <div className="col-span-4 overflow-hidden relative -z-0 min-h-20 max-h-28 2xl:min-h-36 2xl:max-h-40 bg-white/70 rounded-2xl backdrop-blur p-4 2xl:p-6 flex justify-between text-primary items-start">
            <RiDatabase2Line size={90} />
            <RiDatabase2Line
              size={200}
              className="absolute w-full 2xl:-left-56 -left-44 -top-7 -z-10 text-grey/20"
            />
            <div className="text-end">
              <p className="text-lg 2xl:text-xl font-medium">Data Produk</p>
              <p className="text-4xl 2xl:text-6xl font-semibold">169</p>
            </div>
          </div>
          <div className="col-span-4 overflow-hidden relative -z-0 min-h-20 max-h-28 2xl:min-h-36 2xl:max-h-40 bg-white/70 rounded-2xl backdrop-blur p-4 2xl:p-6 flex justify-between text-primary items-start">
            <FaChalkboardUser size={90} />
            <FaChalkboardUser
              size={200}
              className="absolute w-full 2xl:-left-56 -left-44 -top-7 -z-10 text-grey/20"
            />
            <div className="text-end">
              <p className="text-lg 2xl:text-xl font-medium">User</p>
              <p className="text-4xl 2xl:text-6xl font-semibold">19</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-4 space-y-8">
            <div className="min-h-72 p-6 bg-white/70 backdrop-blur rounded-2xl text-primary">
              <p className="text-xl font-medium">Kategori Produk</p>
              <p className="text-9xl font-semibold">12</p>
            </div>
            <div className="min-h-72 p-6 bg-white/70 backdrop-blur rounded-2xl text-primary">
              <p className="text-xl font-medium">Kategori Artikel</p>
              <p className="text-9xl font-semibold">32</p>
            </div>
          </div>
          <div className="col-span-4 bg-white/70 backdrop-blur p-6 rounded-2xl min-h-56">
            <p>Kritik & Saran</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
