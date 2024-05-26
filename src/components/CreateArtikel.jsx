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
      formData.append("status", "1");
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
                className="w-full py-1 capitalize px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                className="w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="category" className="block text-sm">
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
                className="w-full py-1 select-none px-2 rounded shadow-sm"
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
                id="published_date"
                name="published_date"
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                className="w-full py-1 px-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="status" className="block text-sm">
                Status Artikel :
              </label>
              <div className="bg-primary rounded px-6 py-1 text-white">
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
              type=""
              className="w-auto bg-accent hover:bg-secondary/30 duration-200 text-primary rounded-xl py-2 px-4"
            >
              Simpan Sebagai Draft
            </button>
            <button
              type="submit"
              className="w-auto bg-primary hover:bg-secondary duration-200 text-white rounded-xl py-2 px-4"
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
