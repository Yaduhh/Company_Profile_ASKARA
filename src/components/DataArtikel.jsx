import React from "react";
import CardArtikelMaster from "./CardArtikelMaster";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

const DataArtikel = () => {
  return (
    <>
      <section
        id="dataArtikel"
        className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20 overflow-hidden"
      >
        <div className="w-full grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <form>
              <div className="relative flex items-center">
                <input
                  id="Artikel"
                  name="Artikel"
                  type="text"
                  className="w-full bg-white/70 backdrop-blur py-2 px-14 rounded-xl focus:outline-primary"
                  placeholder="Cari Artikel"
                />
                <IoSearch className="absolute left-3" size={20} />
                <div className="h-[60%] w-[2px] rounded-full bg-grey absolute left-10"></div>
              </div>
            </form>
          </div>
          <div className="col-span-1">
            <div className="relative flex items-center">
              <select
                name="selectedcategory"
                className="w-full bg-white/70 rounded-xl backdrop-blur py-2 px-14 focus:outline-primary"
              >
                <option defaultChecked className="text-grey">
                  Pilih Kategori Artikel
                </option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>
              <BiCategoryAlt className="absolute left-3" size={20} />
              <div className="h-[60%] w-[2px] rounded-full bg-grey absolute left-10"></div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative flex items-center">
              <select
                name="selectedcategory"
                className="w-full bg-white/70 rounded-xl backdrop-blur py-2 px-14 focus:outline-primary"
              >
                <option defaultChecked className="text-grey">
                  Penulis
                </option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>
              <FaRegUser className="absolute left-3" size={20} />
              <div className="h-[60%] w-[2px] rounded-full bg-grey absolute left-10"></div>
            </div>
          </div>
        </div>

        <div className="space-y-5 overflow-auto h-full no-scrollbar pb-24 rounded-2xl mt-5">
          <CardArtikelMaster />
          <CardArtikelMaster />
          <CardArtikelMaster />
          <CardArtikelMaster />
          <CardArtikelMaster />
        </div>
      </section>
    </>
  );
};

export default DataArtikel;
