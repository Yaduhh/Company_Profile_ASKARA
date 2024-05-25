import { useState, useRef, useMemo, useEffect } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

const CreateArtikel = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [authorPic, setAuthorPic] = useState("");
  const [published_date, setPublished_date] = useState("");
  const [reading_time, setReading_time] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const editor = useRef(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("author", author);
      formData.append("authorPic", authorPic);
      formData.append("published_date", published_date);
      formData.append("reading_time", reading_time);
      formData.append("content", content);
      formData.append("tags", tags);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:8081/postarticles/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
      height: 500,
    }),
    [placeholder]
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (modalVisible) {
      setTitle("");
      setCategory("");
      setAuthor("");
      setAuthorPic("");
      setPublished_date("");
      setReading_time("");
      setContent("");
      setTags("");
      setImage(null);
    }
  }, [modalVisible]);

  return (
    <>
      <div className="w-full mt-0 px-12 pt-28">
        <p className="text-lg font-medium leading-snug mb-4 text-primary">
          Tambah Artikel Baru
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-5 items-center">
            <div className="w-full">
              <label htmlFor="title" className="block">
                Judul:
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                id="title"
                name="title"
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="image" className="block">
                URL Gambar:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <div className="w-full">
              <label htmlFor="category" className="block">
                Kategori:
              </label>
              <select
                id="category"
                name="category"
                className="w-full py-1 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">Pilih Kategori</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Curhatan">Curhatan</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Edukasi">Edukasi</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="author" className="block">
                Penulis:
              </label>
              <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                id="author"
                name="author"
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="authorPic" className="block">
                URL Gambar Penulis:
              </label>
              <input
                type="text"
                onChange={(e) => setAuthorPic(e.target.value)}
                value={authorPic}
                id="authorPic"
                name="authorPic"
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-5">
            <div className="w-full">
              <label htmlFor="published_date" className="block">
                Tanggal Terbit:
              </label>
              <input
                type="date"
                onChange={(e) => setPublished_date(e.target.value)}
                value={published_date}
                id="published_date"
                name="published_date"
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="reading_time" className="block">
                Waktu Baca:
              </label>
              <input
                type="text"
                onChange={(e) => setReading_time(e.target.value)}
                value={reading_time}
                id="reading_time"
                name="reading_time"
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="tags" className="block">
                Tags:
              </label>
              <input
                type="text"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
                id="tags"
                name="tags"
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          {/* COBA COBA */}
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
          />

          <button
            type="submit"
            className="w-full bg-primary text-white rounded py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-xl font-semibold mb-4">
              Artikel berhasil dibuat!
            </p>
            <button
              onClick={closeModal}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateArtikel;
