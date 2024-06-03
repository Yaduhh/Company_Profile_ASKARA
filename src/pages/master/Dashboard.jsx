import React, { useEffect, useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { MdOutlineArticle } from "react-icons/md";
import { RiDatabase2Line } from "react-icons/ri";
import { FaChalkboardUser } from "react-icons/fa6";
import axios from "axios";

const Dashboard = () => {
  const [contactUsData, setContactUsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    articleCount: 0,
    productCount: 0,
    userCount: 0,
    categoryCount: 0,
    categoryArticlesCount: 0,
  });

  useEffect(() => {
    // Fetch data from the backend
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/contactus");
        console.log("Contact Us Data:", response.data);
        setContactUsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact us data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Define columns for React Table
  const columns = React.useMemo(
    () => [
      {
        Header: "NO",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "No Phone",
        accessor: "nophone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Message",
        accessor: "message",
      },
    ],
    []
  );

  // Create a new instance of React Table with pagination and sorting
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: contactUsData,
      initialState: { pageIndex: 0, pageSize: 8 },
    },
    useSortBy,
    usePagination
  );

  if (loading) {
    return <div>Loading...</div>;
  }
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
              <p className="text-4xl 2xl:text-6xl font-semibold">
                {stats.articleCount}
              </p>
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
              <p className="text-4xl 2xl:text-6xl font-semibold">
                {stats.productCount}
              </p>
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
              <p className="text-4xl 2xl:text-6xl font-semibold">
                {stats.userCount}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-6 bg-white/70 backdrop-blur rounded-xl overflow-hidden min-h-[91%] no-scrollbar relative -z-0">
            <table {...getTableProps()} className="w-full ">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="bg-primary text-white border border-primary"
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="px-4 py-2"
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
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="border border-gray-300 px-4 py-2 "
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="w-full flex justify-between p-3 bg-primary text-white">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </button>{" "}
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                Next
              </button>{" "}
            </div>
          </div>
          <div className="col-span-2 space-y-8">
            <div className="p-6 bg-white/70 backdrop-blur rounded-2xl text-primary flex justify-between">
              <p className="text-lg font-medium">Jumlah Kategori Produk</p>
              <p className="text-5xl font-semibold">{stats.categoryCount}</p>
            </div>
            <div className="p-6 bg-white/70 backdrop-blur rounded-2xl text-primary flex justify-between">
              <p className="text-lg font-medium">Jumlah Kategori Artikel</p>
              <p className="text-5xl font-semibold">
                {stats.categoryArticlesCount}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
