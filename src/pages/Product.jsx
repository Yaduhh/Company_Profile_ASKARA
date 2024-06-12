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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                  className="w-full bg-white/70 border-grey border-2 backdrop-blur py-2 h-full px-14 rounded-xl focus:outline-primary"
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
            <div className="col-span-1 flex justify-end">
              <button className="bg-secondary hover:bg-grey duration-150 py-1.5 h-full px-8 rounded-lg text-white w-full md:w-auto">
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 py-6 gap-8">
            <div className="col-span-5 rounded-xl h-auto px-1">
              <table
                {...getTableProps()}
                className="min-w-full rounded-t-xl outline-1 outline outline-grey overflow-hidden"
              >
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
              <div className="flex items-center bg-grey outline-1 outline outline-grey justify-between">
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className={`py-1 px-4 text-white rounded${
                    !canPreviousPage
                      ? "opacity-50 cursor-not-allowed text-sm"
                      : "hover:bg-blue-700 text-sm"
                  }`}
                >
                  Previous
                </button>
                <span className="text-white font-normal text-sm">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className={`py-1 px-4 text-white rounded ${
                    !canNextPage
                      ? "opacity-50 cursor-not-allowed text-sm"
                      : "text-sm"
                  }`}
                >
                  Next
                </button>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="py-1 px-4 rounded focus:outline-none mr-4 bg-transparent text-white  text-sm"
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option
                      key={pageSize}
                      value={pageSize}
                      className="text-sm bg-primary"
                    >
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
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
