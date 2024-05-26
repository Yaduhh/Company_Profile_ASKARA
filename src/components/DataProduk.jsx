import React from "react";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import axios from "axios";
import { MdAddBox } from "react-icons/md";

const DataProduk = () => {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [jenis_produk, setJenis_produk] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [values, setValues] = useState({
    nama: "",
    jenis_produk: "",
    kategori: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/postproduk/",
        values
      );

      console.log(response);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (modalVisible) {
      setNama("");
      setKategori("");
      setJenis_produk("");
    }
  }, [modalVisible]);

  const closeModal = () => {
    setShowModal(false);
  };
  const handleAddProduct = () => {
    setShowModal(true);
  };

  const handleCategoryChange = (e) => {
    setJenis_produk(e.target.value);
  };

  console.log(nama, jenis_produk, kategori);
  return (
    <>
      <section
        id="dataProduk"
        className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20"
      >
        <div className="grid grid-cols-7 gap-10">
          <div className="col-span-3">
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
          <div className="col-span-3">
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
          <div className="col-span-1">
            <button
              onClick={() => handleAddProduct()}
              className="bg-secondary rounded-xl w-full h-full flex items-center gap-2 text-white justify-center hover:bg-primary hover:text-white/80 duration-200"
            >
              <MdAddBox />
              Add Product
            </button>
          </div>
        </div>

        <div className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center">
          <div className="bg-white py-10 px-12 rounded-lg w-full max-w-3xl -mt-80">
            {/* CREATE PRODUK */}
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 items-center w-full">
                <div className="col-span-1">
                  <label htmlFor="title" className="block">
                    Nama Produk :
                  </label>
                  <input
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                    type="text"
                    id="nama"
                    name="nama"
                    className="w-full py-2 capitalize px-2 border-primary border-b-2 focus:outline-none"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="category" className="block">
                    Jenis Produk :
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full py-2 px-2 border-primary border-b-2 outline-none"
                    value={jenis_produk}
                    onChange={handleCategoryChange}
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="1">Pharma Product</option>
                    <option value="2">Cosmetic Product</option>
                    <option value="3">Chemical Product</option>
                    <option value="4">Feed Product</option>
                    <option value="5">Food Product</option>
                    <option value="6">Veterinery Product</option>
                    <option value="7">Flavour Product</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="author" className="block">
                    Kategori :
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setKategori(e.target.value)}
                    value={kategori}
                    id="kategori"
                    name="kategori"
                    className="w-full py-2 capitalize px-2 border-primary border-b-2 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex w-full gap-3 justify-end text-sm pt-10">
                <button
                  onClick={closeModal}
                  className="w-auto bg-grey hover:bg-secondary/20 duration-200 text-white rounded-xl py-2 px-4"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-auto bg-secondary hover:bg-primary duration-200 text-white rounded-xl py-2 px-4"
                >
                  Tambah Produk
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center">
            <div className="bg-white py-10 px-12 rounded-lg w-full max-w-3xl -mt-80">
              {/* CREATE PRODUK */}
              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 items-center w-full">
                  <div className="col-span-1">
                    <label htmlFor="title" className="block">
                      Nama Produk :
                    </label>
                    <input
                      onChange={(e) => setNama(e.target.value)}
                      value={nama}
                      type="text"
                      id="nama"
                      name="nama"
                      className="w-full py-2 capitalize px-2 border-primary border-b-2 focus:outline-none"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="category" className="block">
                      Jenis Produk :
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full py-2 px-2 border-primary border-b-2 outline-none"
                      value={jenis_produk}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Pilih Kategori</option>
                      <option value="1">Pharma Product</option>
                      <option value="2">Cosmetic Product</option>
                      <option value="3">Chemical Product</option>
                      <option value="4">Feed Product</option>
                      <option value="5">Food Product</option>
                      <option value="6">Veterinery Product</option>
                      <option value="7">Flavour Product</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="author" className="block">
                      Kategori :
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setKategori(e.target.value)}
                      value={kategori}
                      id="kategori"
                      name="kategori"
                      className="w-full py-2 capitalize px-2 border-primary border-b-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex w-full gap-3 justify-end text-sm pt-10">
                  <button
                    onClick={closeModal}
                    className="w-auto bg-grey hover:bg-secondary/20 duration-200 text-white rounded-xl py-2 px-4"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="w-auto bg-secondary hover:bg-primary duration-200 text-white rounded-xl py-2 px-4"
                  >
                    Tambah Produk
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DataProduk;
