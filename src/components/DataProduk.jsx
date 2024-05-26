import React from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

const DataProduk = () => {
  return (
    <>
      <section
        id="dataProduk"
        className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20"
      >
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="col-span-1">
            <form>
              <div className="relative flex items-center">
                <input
                  id="produk"
                  name="produk"
                  type="text"
                  className="w-full bg-white/70 backdrop-blur py-2 px-14 rounded-xl focus:outline-primary"
                  placeholder="Cari Produk"
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
                  Pilih Kategori Produk
                </option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>
              <BiCategoryAlt className="absolute left-3" size={20} />
              <div className="h-[60%] w-[2px] rounded-full bg-grey absolute left-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataProduk;
