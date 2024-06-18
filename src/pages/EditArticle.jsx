import { useLoaderData } from "react-router-dom";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { encryptId } from "./../utils/cryptoUtils";

const EditArticle = () => {
  const articleData = useLoaderData();
  const [title, setTitle] = useState(articleData[0].title);
  const [content, setContent] = useState(articleData[0].content);
  const [category, setCategory] = useState(articleData[0].category);
  const [status, setStatus] = useState(articleData[0].status);
  const [reading_time, setReading_time] = useState(articleData[0].reading_time);
  const [author, setAuthor] = useState(articleData[0].author);
  const [tags, setTags] = useState(articleData[0].tags);
  const [modalVisible, setModalVisible] = useState(false);

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
          status,
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
      <div className="w-full h-auto flex bg-white relative -z-0 font-primary">
        {/* Accent bg */}
        <img
          className="absolute -z-50 right-0 top-0 h-full"
          src="./../../public/dashboard/bg-accent.svg"
          alt="bg-accent"
        />
        <img
          className="absolute -z-50 left-0 top-0 -scale-100 h-full"
          src="./../../public/dashboard/bg-accent.svg"
          alt="bg-accent"
        />

        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-primary mb-4">
            Edit Article
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full grid grid-cols-6 gap-10">
              <div className="mb-4 w-full col-span-3">
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
              <div className="mb-4 w-full">
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
                  <option value="1">Jasmani</option>
                  <option value="2">Rohani</option>
                  <option value="3">Tips & Trick</option>
                  <option value="4">Berita</option>
                  <option value="5">Ilmiah</option>
                </select>
              </div>
              {/* Tambahkan input untuk kategori */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Status
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full outline-1 outline outline-primary py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="0">Draft</option>
                  <option value="1">Publish</option>
                </select>
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="readingTime"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Reading Time
                </label>
                <input
                  type="number"
                  id="readingTime"
                  className="w-full outline-1 outline outline-primary py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={reading_time}
                  onChange={(e) => setReading_time(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex gap-10">
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
                  disabled
                  className="w-full py-1.5 px-3 rounded shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>

            {/* COBA */}
            <label htmlFor="tags" className="block font-bold mb-2">
              Content
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1}
              onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => setContent(newContent)}
            />

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-accent text-white py-2 px-4 rounded mt-10"
              >
                Update
              </button>
            </div>
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
      </div>
    </>
  );
};

export default EditArticle;
