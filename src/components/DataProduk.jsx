import React from "react";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import axios from "axios";
import { MdAddBox, MdEdit, MdDelete } from "react-icons/md";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { HashLoader } from "react-spinners";
import Loading from "./Loading";

const DataProduk = () => {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [jenis_produk, setJenis_produk] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [updateNotificationVisible, setUpdateNotificationVisible] =
    useState(false);
  const [deleteNotificationVisible, setDeleteNotificationVisible] =
    useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [data, setData] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/products");
      if (Array.isArray(response.data)) {
        const filteredData = response.data.filter((item) => {
          const lowerCaseSearchQuery = searchQuery.toLowerCase();
          const matchesSearchQuery =
            item.nama.toLowerCase().includes(lowerCaseSearchQuery) ||
            item.kategori.toLowerCase().includes(lowerCaseSearchQuery) ||
            item.jenis_produk_label
              .toLowerCase()
              .includes(lowerCaseSearchQuery);

          const matchesCategory = selectedCategory
            ? item.jenis_produk_label === selectedCategory
            : true;

          return matchesSearchQuery && matchesCategory;
        });
        setData(filteredData);
      } else {
        setData([]);
        console.error("Data is not an array:", response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/product-categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchQuery, selectedCategory]);

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: (row, i) => i + 1, // Calculate row index
      },
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
        accessor: "jenis_produk_label",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.original)}
              className="bg-grey rounded-lg p-1.5 text-white text-sm"
            >
              <MdEdit />
            </button>
            <button
              onClick={() => handleModalDelete(row.original.id)}
              className="bg-[#FF4D4D] rounded-lg p-1.5 text-white text-sm"
            >
              <MdDelete />
            </button>
          </div>
        ),
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    if (!nama || !jenis_produk || !kategori) {
      setError("Semua field harus diisi !");
      return;
    }
    setError("");

    const newData = {
      nama,
      jenis_produk,
      kategori,
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/postproduk",
        newData
      );
      if (response.data.Status === "Success") {
        setData((prevData) => [...prevData, newData]);
        alert("Produk berhasil ditambahkan!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
      alert("Terjadi kesalahan saat menambahkan produk.");
    }
    resetForm();
    fetchData();
    showNotification();
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      nama,
      jenis_produk,
      kategori,
    };

    try {
      const response = await axios.put(
        `http://localhost:8081/products/${currentProduct.id}`,
        productData
      );
      if (response.status === 200) {
        setData(
          data.map((item) =>
            item.id === currentProduct.id ? { ...item, ...productData } : item
          )
        );
        fetchData();
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat memperbarui data:", error);
      alert("Terjadi kesalahan saat memperbarui produk.");
    }
    closeEditModal();
    showUpdateNotification();
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
      setUpdateNotificationVisible(false);
    }, 4000); // 4 detik
  };

  const showUpdateNotification = () => {
    setUpdateNotificationVisible(true);
    setTimeout(() => {
      setUpdateNotificationVisible(false);
    }, 4000); // 4 detik
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleAddProduct = () => {
    setShowModal(true);
  };

  const handleModalDelete = (id) => {
    setDeleteProductId(id);
    setDeleteModal(true);
  };

  const handleCategoryChange = (e) => {
    setJenis_produk(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/products/${deleteProductId}`
      );
      if (response.status === 200) {
        setData(data.filter((item) => item.id !== deleteProductId));
        fetchData();
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus produk:", error);
      alert("Terjadi kesalahan saat menghapus produk.");
    }
    setDeleteModal(false); // Close modal after deletion
    showDeleteNotification();
  };

  const showDeleteNotification = () => {
    setDeleteNotificationVisible(true);
    setTimeout(() => {
      setDeleteNotificationVisible(false);
    }, 4000); // 4 detik
  };

  const handleEdit = (product) => {
    setNama(product.nama);
    setKategori(product.kategori);
    setJenis_produk(product.jenis_produk);
    setCurrentProduct(product);
    setShowEditModal(true);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section
        id="dataProduk"
        className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20"
      >
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-3">
            <form>
              <div className="relative flex items-center">
                <input
                  id="produk"
                  name="produk"
                  type="text"
                  className="w-full bg-white/70 backdrop-blur py-2 px-14 rounded-xl focus:outline-primary"
                  placeholder="Cari Produk"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option defaultChecked value={""} className="text-grey">
                  Semua
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
              <BiCategoryAlt className="absolute left-3" size={20} />
              <div className="h-[60%] w-[2px] rounded-full bg-grey absolute left-10"></div>
            </div>
          </div>
          <div className="col-span-2">
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
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="text-center py-4 border-b border-grey bg-white/50 capitalize"
                  >
                    Tidak ada data !
                  </td>
                </tr>
              ) : (
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="border-b border-grey bg-white/50 capitalize"
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
                })
              )}
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
              <h1 className="pb-6 text-2xl font-semibold text-primary">
                Tambah Produk
              </h1>
              <form
                className="space-y-4 w-full"
                onSubmit={handleSubmit}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              >
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
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.label}
                        </option>
                      ))}
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

                {error && <p className="text-[#FF4D4D]">{error}</p>}

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

        {showEditModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center">
            <div className="bg-white py-10 px-12 rounded-lg w-full max-w-3xl 2xl:-mt-80 -mt-20">
              <h2 className="text-lg font-bold mb-4">Edit Produk</h2>
              <form onSubmit={handleEditSubmit}>
                <div className="mb-4">
                  <label className="block mb-2">Nama Produk</label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded capitalize"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Kategori</label>
                  <input
                    type="text"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded capitalize"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Jenis Produk</label>
                  <select
                    value={jenis_produk}
                    onChange={handleCategoryChange}
                    className="w-full p-2 border border-gray-300 rounded capitalize"
                    required
                  >
                    <option value="">Pilih Jenis Produk</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeEditModal}
                    className="mr-4 px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-secondary hover:bg-primary/80 duration-200 text-white rounded"
                  >
                    Update
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
        {updateNotificationVisible && (
          <div className="notification font-normal capitalize bg-[#35a033]">
            data berhasil diupdate !
          </div>
        )}
        {deleteNotificationVisible && (
          <div className="notification font-normal capitalize bg-[#FF4D4D]">
            data berhasil dihapus !
          </div>
        )}
        {deleteModal && (
          <div className="fixed z-50 top-0 left-0 flex flex-col items-center justify-center w-full h-screen capitalize">
            <div className="bg-white/80 backdrop-blur rounded-lg px-8 py-6 space-y-6">
              <h1 className="text-lg">
                Apa kamu yakin ingin menghapus produk ini ?
              </h1>
              <div className="flex items-center gap-5 justify-end">
                <button
                  className="hover:text-grey"
                  onClick={() => {
                    setDeleteModal(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#FF4D4D] px-4 py-1.5 rounded text-white hover:bg-[#FF4D4D]/60 duration-150"
                  onClick={() => handleDelete()}
                  type="submit"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DataProduk;
