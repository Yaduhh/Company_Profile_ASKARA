import { useState, useRef, useMemo, useEffect } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

const CreateArtikel = ({ namaLengkap }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState(namaLengkap);
  const [status, setStatus] = useState("0");
  const [published_date, setPublished_date] = useState("");
  const [reading_time, setReading_time] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [submitType, setSubmitType] = useState("");
  const [categories, setCategories] = useState([]);
  const editor = useRef(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const statusValue = submitType === "draft" ? "0" : "1";

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("author", author);
      formData.append("status", statusValue);
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
      readonly: false,
      placeholder: placeholder || "Start typings...",
      height: 550,
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
      setAuthor(namaLengkap);
      setStatus("");
      setPublished_date("");
      setReading_time("");
      setContent("");
      setTags("");
      setImage(null);
    }
  }, [modalVisible]);

  const handleDraftClick = () => {
    setSubmitType("draft");
  };

  const handlePostClick = () => {
    setSubmitType("post");
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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

  return (
    <>
      <div className="w-full mt-0 px-6 2xl:px-12 pt-20 2xl:pt-4 overflow-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-5 gap-5 items-center">
            <div className="col-span-2">
              <label htmlFor="title" className="block text-sm">
                Judul:
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                id="title"
                name="title"
                className="w-full bg-white/70 backdrop-blur py-1.5 px-4 rounded-xl focus:outline-primary capitalize"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="image" className="block text-sm">
                Thumbnail
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full bg-white/70 backdrop-blur py-1.5 px-4 rounded-xl focus:outline-primary capitalize"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="category" className="block text-sm">
                Kategori:
              </label>
              <select
                name="selectedcategory"
                value={category}
                onChange={handleCategoryChange}
                className="w-full bg-white/70 rounded-xl backdrop-blur py-1.5 px-4 focus:outline-primary"
              >
                <option defaultChecked value={""} className="text-grey">
                  Semua
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="author" className="block text-sm">
                Penulis:
              </label>
              <input
                readOnly
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                id="author"
                name="author"
                className="w-full bg-white/70 backdrop-blur py-1.5 px-4 rounded-xl focus:outline-primary capitalize select-none"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1">
              <label htmlFor="published_date" className="block text-sm">
                Tanggal Terbit:
              </label>
              <input
                type="date"
                onChange={(e) => setPublished_date(e.target.value)}
                value={published_date}
                min={getTodayDate()}
                id="published_date"
                name="published_date"
                className="w-full bg-white/70 backdrop-blur py-1.5 px-4 rounded-xl focus:outline-primary capitalize"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="reading_time" className="block text-sm">
                Waktu Baca:
              </label>
              <input
                type="number"
                onChange={(e) => setReading_time(e.target.value)}
                value={reading_time}
                id="reading_time"
                name="reading_time"
                className="w-full bg-white/70 backdrop-blur py-1.5 px-4 rounded-xl focus:outline-primary capitalize"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="tags" className="block text-sm">
                Tags:
              </label>
              <input
                type="text"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
                id="tags"
                name="tags"
                className="w-full bg-white/70 backdrop-blur py-1.5 px-4 rounded-xl focus:outline-primary capitalize"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="status" className="block text-sm">
                Status Artikel :
              </label>
              <div className="bg-primary py-1.5 px-4 text-white rounded-xl">
                <p>{status === 0 ? "Publish" : "Draft"}</p>
              </div>
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

          <div className="flex w-full gap-3 justify-end text-sm">
            <button
              type=""
              className="w-auto bg-white hover:bg-grey duration-200 text-primary rounded-xl py-2 px-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleDraftClick}
              className="w-auto bg-accent hover:bg-secondary/30 duration-200 text-primary rounded-xl py-2 px-4"
            >
              Simpan Sebagai Draft
            </button>
            <button
              type="submit"
              className="w-auto bg-primary hover:bg-secondary duration-200 text-white rounded-xl py-2 px-4"
              onClick={handlePostClick}
            >
              Posting
            </button>
            <button
              type="submit"
              className="w-auto hidden bg-primary hover:bg-secondary duration-200 text-white rounded-xl py-2 px-4"
            >
              Posting
            </button>
          </div>
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
