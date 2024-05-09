import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false); // State untuk visibilitas modal
  const [selectedArticle, setSelectedArticle] = useState(null); // State untuk menyimpan artikel yang dipilih

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8081/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/articles/${id}`);
      setArticles(articles.filter((article) => article.id !== id));
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleDeleteClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
  };

  const handleEditClick = (id) => {
    // Redirect to EditArticle page
    window.location.href = `/articles/${id}/edit`;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-primary mb-4">Dashboard</h1>
      <div>
        {articles.map((article, index) => (
          <div key={article.id} className="mb-2 p-4 bg-gray-100 rounded-lg">
            <div className="flex gap-3 border-2 border-primary/30 p-5 rounded-xl">
              <h1 className="p-2 text-xs font-semibold bg-primary text-white rounded-full h-min">
                {index + 1}
              </h1>
              <div>
                <div className="inline-flex items-center w-full justify-between">
                  <h2 className="text-xl font-semibold mb-2 underline underline-offset-8">
                    {article.title}
                  </h2>
                  <h3 className="text-right bg-third italic text-white px-3 py-1 rounded-full text-xs">
                    {article.category}
                  </h3>
                </div>
                <div className="text-gray-700 line-clamp-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(article.content),
                    }}
                  ></div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleEditClick(article.id)}
                    className="bg-third hover:bg-secondary text-white font-medium py-2 px-4 mr-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(article)} // Menampilkan modal saat tombol hapus diklik
                    className="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p>Apakah Anda yakin ingin menghapus artikel ini?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal} // Menutup modal tanpa menghapus artikel
                className="text-gray-500 mr-4"
              >
                Batal
              </button>
              <button
                onClick={() => deleteArticle(selectedArticle.id)} // Menghapus artikel saat dikonfirmasi
                className="bg-accent hover:bg-third text-white font-semibold py-2 px-4 rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
