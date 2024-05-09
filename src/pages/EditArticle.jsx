import { useLoaderData } from "react-router-dom";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";

const EditArticle = () => {
  const articleData = useLoaderData();
  const [title, setTitle] = useState(articleData[0].title);
  const [content, setContent] = useState(articleData[0].content);
  const [category, setCategory] = useState(articleData[0].category);
  const [reading_time, setReading_time] = useState(articleData[0].reading_time);
  const [author, setAuthor] = useState(articleData[0].author);
  const [tags, setTags] = useState(articleData[0].tags);
  const [modalVisible, setModalVisible] = useState(false); // State untuk mengontrol modal

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };
  const editor = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8081/articles/${articleData[0].id}`,
        {
          title,
          content,
          category,
          reading_time,
          author,
          tags,
        }
      );
      console.log("Article updated successfully:", response.data);
      setModalVisible(true);
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    window.location.href = "/master"; // Arahkan ke halaman "/master"
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Edit Article</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex gap-10">
            <div className="mb-4 w-full">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full outline-1 outline outline-primary py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* Tambahkan input untuk kategori */}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full outline-1 outline outline-primary py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Pilih Kategori</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Curhatan">Curhatan</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Edukasi">Edukasi</option>
              </select>
            </div>
          </div>

          <div className="w-full flex gap-10">
            {/* Tambahkan input untuk waktu baca */}
            <div className="mb-4 w-full">
              <label
                htmlFor="readingTime"
                className="block text-gray-700 font-bold mb-2"
              >
                Reading Time
              </label>
              <input
                type="text"
                id="readingTime"
                className="w-full outline-1 outline outline-primary py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                value={reading_time}
                onChange={(e) => setReading_time(e.target.value)}
              />
            </div>
            {/* Tambahkan input untuk penulis */}
            <div className="mb-4 w-full">
              <label
                htmlFor="author"
                className="block text-gray-700 font-bold mb-2"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                className="w-full outline-1 outline outline-primary py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            {/* Tambahkan input untuk tag */}
            <div className="mb-4 w-full">
              <label
                htmlFor="tags"
                className="block text-gray-700 font-bold mb-2"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                className="w-full outline-1 outline outline-primary py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </div>

          {/* COBA */}
          <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">
            Content
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
          />

          <button
            type="submit"
            className="bg-third hover:bg-accent text-white font-bold py-2 px-4 rounded mt-10"
          >
            Update
          </button>
        </form>
      </div>
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-xl font-semibold mb-4">
              Article updated successfully!
            </p>
            <button
              onClick={closeModal}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditArticle;
