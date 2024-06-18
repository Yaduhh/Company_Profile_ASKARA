import React from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { IoOpen } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import Loading from "./Loading";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DataArtikel = () => {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [deleteNotificationVisible, setDeleteNotificationVisible] =
    useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isArticlesLoaded, setIsArticlesLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:8081/articles");
      if (Array.isArray(response.data)) {
        const filteredData = response.data.filter((item) => {
          const lowerCaseSearchQuery = searchQuery.toLowerCase();
          const matchesSearchQuery = item.title
            .toLowerCase()
            .includes(lowerCaseSearchQuery);

          const matchesCategory = selectedCategory
            ? item.category === selectedCategory
            : true;

          const matchesUser = selectedUser
            ? item.author === selectedUser
            : true;

          return matchesSearchQuery && matchesCategory && matchesUser;
        });
        setArticles(filteredData);
        console.log(filteredData);
      } else {
        setArticles([]);
        console.error("Data is not an array:", response.data);
      }
      setLoading(false);
      setIsArticlesLoaded(true);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [searchQuery, selectedCategory, selectedUser]);

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/articles/${id}`);
      setArticles(articles.filter((article) => article.id !== id));
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
    showDeleteNotification();
  };

  const handleDeleteClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/article-categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchAuthor = async () => {
    try {
      const response = await axios.get("http://localhost:8081/user-author");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  const handleEditClick = (id) => {
    window.location.href = `/articles/${id}/edit`;
  };

  const handleOpenClick = (id) => {
    window.location.href = `/articles/${id}`;
  };

  const showDeleteNotification = () => {
    setDeleteNotificationVisible(true);
    setTimeout(() => {
      setDeleteNotificationVisible(false);
    }, 4000); // 4 detik
  };

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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/70 rounded-xl backdrop-blur py-2 px-14 focus:outline-primary"
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
          <div className="col-span-1">
            <div className="relative flex items-center z-0">
              <select
                name="selectedcategory"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full bg-white/70 rounded-xl backdrop-blur py-2 px-14 focus:outline-primary"
              >
                <option defaultChecked className="text-grey" value={""}>
                  Semua Penulis
                </option>
                {users.map((users) => (
                  <option key={users.id} value={users.nama_lengkap}>
                    {users.nama_lengkap}
                  </option>
                ))}
              </select>
              <FaRegUser className="absolute left-3" size={20} />
              <div className="h-[60%] w-[2px] rounded-full bg-grey absolute left-10"></div>
            </div>
          </div>
        </div>

        {loading && <Loading />}
        {!loading && (
          <>
            {articles.length === 0 && isArticlesLoaded ? (
              <div className="h-full flex flex-col justify-center items-center -mt-20 text-black/50">
                Tidak ada artikel yang tersedia !
              </div>
            ) : (
              <div className="mt-2 pb-44 overflow-auto h-full no-scrollbar rounded-2xl">
                {articles.map((article, index) => (
                  <div key={article.id} className="pb-1 pt-4 rounded-lg">
                    <div className="w-full bg-white/70 backdrop-blur rounded-2xl h-auto overflow-hidden">
                      <div className="grid grid-cols-5">
                        <div className="col-span-1 overflow-hidden">
                          {loading ? (
                            <Skeleton
                              baseColor="#B0B0B0"
                              highlightColor="#FFFFFF"
                              className="w-full h-full object-cover scale-110"
                            />
                          ) : (
                            <img
                              src={`http://localhost:8081/uploads/${article.image}`}
                              alt="Thumbnails"
                              className="h-full w-full object-cover"
                            />
                          )}
                        </div>
                        <div className="col-span-3 p-3 2xl:px-6 2xl:py-4 space-y-2">
                          <div className="flex justify-between">
                            <h1 className="text-xl font-semibold capitalize line-clamp-1">
                              {article.title}
                            </h1>
                            <div className="gap-2 flex">
                              <div className="bg-primary/70 line-clamp-1 px-3 py-1.5 text-xs text-white rounded-2xl backdrop-blur">
                                <p>{article.category}</p>
                              </div>
                              <div>
                                {article.status === 1 ? (
                                  <div className="bg-secondary  px-3 py-1.5 text-xs text-white rounded-2xl backdrop-blur">
                                    <p>Publish</p>
                                  </div>
                                ) : (
                                  <div className="bg-grey  px-3 py-1.5 text-xs text-white rounded-2xl backdrop-blur">
                                    <p>Draft</p>
                                  </div>
                                )}
                              </div>
                              <div className="bg-accent flex items-center px-3 py-1.5 text-xs text-primary gap-1.5 rounded-2xl backdrop-blur">
                                <MdOutlineAccessTime />
                                <div className="flex items-center gap-1">
                                  <p>{article.reading_time}</p>
                                  <p>m</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full bg-grey h-[1.5px] rounded-full"></div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(article.content),
                            }}
                            className="text-black/50 text-sm 2xl:text-base text-justify line-clamp-3"
                          ></p>
                        </div>

                        <div className="col-span-1 p-3 2xl:px-6 2xl:py-4 flex flex-col gap-2 text-sm items-end justify-between">
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 text-grey">
                              <FaCalendar />
                              <p>
                                {new Date(
                                  article.published_date
                                ).toLocaleDateString("en-GB")}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 text-grey">
                              <FaUserAlt />
                              <p>{article.author}</p>
                            </div>
                          </div>
                          <div className="space-x-3">
                            <button
                              onClick={() => handleOpenClick(article.id)}
                              className="px-3 py-3 bg-grey hover:bg-accent hover:text-grey duration-200  rounded-lg text-base text-white"
                            >
                              <IoOpen className="ml-0.5" />
                            </button>
                            <button
                              onClick={() => handleEditClick(article.id)}
                              className="px-3 py-3 bg-secondary hover:bg-primary/70 hover:text-white duration-200 rounded-lg text-base text-white"
                            >
                              <FaRegEdit className="ml-0.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteClick(article)}
                              className="p-3 bg-[#FF4D4D] hover:bg-[#FF4D4D]/50 duration-200  rounded-lg text-base text-white"
                            >
                              <RiDeleteBinLine />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* MODAL */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <p>Apakah Anda yakin ingin menghapus artikel ini?</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={closeModal} // Menutup modal tanpa menghapus artikel
                  className="hover:text-grey duration-150 mr-4"
                >
                  Batal
                </button>
                <button
                  onClick={() => deleteArticle(selectedArticle.id)} // Menghapus artikel saat dikonfirmasi
                  className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/60 duration-150 text-white font-semibold py-2 px-4 rounded"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}

        {deleteNotificationVisible && (
          <div className="notification font-normal capitalize bg-[#FF4D4D]">
            Artikel berhasil dihapus !
          </div>
        )}
      </section>
    </>
  );
};

export default DataArtikel;
