import React from "react";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import axios from "axios";
import { MdAddBox, MdEdit, MdDelete } from "react-icons/md";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import SideBar from "../components/SideBar";

const Product = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <>
      <section
        id="product"
        className="w-full flex flex-col items-center font-primary"
      >
        <div className="w-full min-h-screen pt-20 px-6 md:pt-24 md:px-0 bg-white md:max-w-7xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-8 gap-3 md:gap-10 ">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-primary text-xl md:text-2xl font-semibold">
                PRODUK
              </h1>
            </div>
            <div className="col-span-2 md:col-span-3">
              <form>
                <div className="relative flex items-center">
                  <input
                    id="produk"
                    name="produk"
                    type="text"
                    className="w-full bg-white/70 border-grey border-2 backdrop-blur py-1.5 h-full px-14 rounded-xl focus:outline-primary"
                    placeholder="Cari Produk"
                  />
                  <IoSearch className="absolute left-3" size={20} />
                  <div className="h-[60%] w-[2px] rounded-full bg-grey absolute left-10"></div>
                </div>
              </form>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="relative flex items-center">
                <select
                  name="selectedcategory"
                  className="w-full bg-white/70 border-2 border-grey rounded-xl backdrop-blur py-1.5 h-full px-14 focus:outline-primary"
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
            <div>
              <button className="bg-secondary py-1.5 h-full px-6 rounded-lg text-white w-full md:w-auto">
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-6 py-6 gap-8">
            <div className="col-span-4 ">
              <table {...getTableProps()} className="min-w-full rounded">
                <thead className="bg-primary text-white uppercase text-sm leading-normal font-normal">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className="">
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
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
                  })}
                </tbody>
              </table>
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
            <div className="col-span-2">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
