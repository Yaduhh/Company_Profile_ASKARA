import React from "react";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import axios from "axios";
import { MdAddBox } from "react-icons/md";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";

const DataProduk = () => {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [jenis_produk, setJenis_produk] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/products")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama Produk",
        accessor: "nama",
      },
      {
        Header: "Kategori",
        accessor: "kategori",
      },
      {
        Header: "Jenis Produk",
        accessor: "jenis_produk",
        Cell: ({ value }) => jenisProdukMap[value] || "Unknown",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const jenisProdukMap = {
    1: "Pharma Product",
    2: "Cosmetic Product",
    3: "Chemical Product",
    4: "Feed Product",
    5: "Food Product",
    6: "Veterinery Product",
    7: "Flavour Product",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nama,
      jenis_produk,
      kategori,
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/postproduk",
        data
      );
      console.log(response.data);
      if (response.data.Status === "Success") {
        alert("Produk berhasil ditambahkan!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
      alert("Terjadi kesalahan saat menambahkan produk.");
    }
    resetForm();
    showNotification();
  };

  useEffect(() => {
    if (showModal) {
      resetForm();
    }
  }, [showModal]);

  const resetForm = () => {
    setNama("");
    setKategori("");
    setJenis_produk("");
  };

  const showNotification = () => {
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 4000); // 4 detik
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleAddProduct = () => {
    setShowModal(true);
  };

  const handleCategoryChange = (e) => {
    setJenis_produk(e.target.value);
  };

  return (
    <>
      <section
        id="dataProduk"
        className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20"
      >
        <div className="grid grid-cols-7 2xl:gap-10 gap-2">
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

        <div className="mt-6 h-[75%] overflow-auto rounded no-scrollbar">
          <table {...getTableProps()} className="min-w-full rounded">
            <thead className="bg-primary text-white uppercase text-sm leading-normal font-normal">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="">
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="py-3 px-12 text-left cursor-pointer"
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="border-b border-grey bg-white/50"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="py-1.5 px-12 text-left"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center py-1 bg-primary shadow-md rounded-lg mt-4">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`py-1 px-4 bg-blue-500 text-white rounded ${
              !canPreviousPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
          >
            Previous
          </button>
          <span className="text-white font-normal">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`py-1 px-4 text-white rounded ${
              !canNextPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="py-1 px-4 rounded focus:outline-none mr-4 bg-transparent text-grey"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center">
            <div className="bg-white py-10 px-12 rounded-lg w-full max-w-3xl 2xl:-mt-80 -mt-20">
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

        {/* NOTIF */}
        {notificationVisible && (
          <div className="notification font-normal">
            Berhasil menambahkan produk!
          </div>
        )}
      </section>
    </>
  );
};

export default DataProduk;
