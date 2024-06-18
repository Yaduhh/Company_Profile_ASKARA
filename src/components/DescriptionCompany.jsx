import React, { useEffect, useState, useRef } from "react";
import Loading from "./Loading";
import { IoMdSave } from "react-icons/io";
import axios from "axios";
import { MdCancel, MdEdit } from "react-icons/md";

const DescriptionCompany = () => {
  const [loading, setLoading] = useState(true);
  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editNotificationVisible, setEditNotificationVisible] = useState(false);

  const misiRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/description");
      setVisi(response.data.visi);
      setMisi(response.data.misi);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:8081/description", { visi, misi });
      showEditNotification();
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const insertAtCursor = (text) => {
    const textarea = misiRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = misi.slice(0, start) + text + misi.slice(end);
    setMisi(newValue);
    textarea.setSelectionRange(start + text.length, start + text.length);
    textarea.focus();
  };

  const addBullet = () => {
    insertAtCursor("• ");
  };

  const addNumberedPoint = () => {
    const lines = misi.split("\n");
    const lastNumber = lines.reduce((acc, line) => {
      const match = line.match(/^(\d+)\. /);
      if (match) {
        return Math.max(acc, parseInt(match[1], 10));
      }
      return acc;
    }, 0);
    insertAtCursor(`${lastNumber + 1}. `);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showEditNotification = () => {
    setEditNotificationVisible(true);
    setTimeout(() => {
      setEditNotificationVisible(false);
    }, 4000);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section
          id="descriptionCompany"
          className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20 space-y-5"
        >
          <div className="w-full h-full overflow-auto">
            <div className="space-y-2">
              <h1 className="bg-primary rounded-xl px-6 py-1.5 w-fit text-white">
                VISI
              </h1>
              <form className="min-h-20">
                <textarea
                  value={visi}
                  onChange={(e) => setVisi(e.target.value)}
                  className="bg-white rounded-xl px-3 py-1.5 w-full"
                  readOnly={!isEditing}
                />
              </form>
            </div>
            <div className="space-y-2">
              <h1 className="bg-primary rounded-xl px-6 py-1.5 w-fit text-white">
                MISI
              </h1>
              {isEditing ? (
                <>
                  <div className="flex gap-2 mb-2 text-sm">
                    <button
                      type="button"
                      onClick={addBullet}
                      className="bg-secondary hover:bg-grey duration-150 text-white px-3 py-1.5 rounded-xl"
                      disabled={!isEditing}
                    >
                      Add Point
                    </button>
                    <button
                      type="button"
                      onClick={addNumberedPoint}
                      className="bg-secondary hover:bg-grey duration-150 text-white px-3 py-1.5 rounded-xl"
                      disabled={!isEditing}
                    >
                      Add Number
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div></div>
                </>
              )}
              <form className="h-auto">
                <textarea
                  ref={misiRef}
                  value={misi}
                  rows={6}
                  onChange={(e) => setMisi(e.target.value)}
                  className="bg-white rounded-xl px-3 py-1.5 w-full h-full"
                  readOnly={!isEditing}
                />
              </form>
            </div>

            <div className="flex w-full justify-end mt-3 gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                    }}
                    className="flex items-center gap-2 bg-transparant border border-primary hover:bg-white duration-150 text-primary px-6 py-1.5 rounded-xl"
                  >
                    <MdCancel />
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-secondary hover:bg-grey duration-150 text-white px-6 py-1.5 rounded-xl"
                  >
                    <IoMdSave />
                    Save
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 bg-secondary hover:bg-grey duration-150 text-white px-6 py-1.5 rounded-xl"
                >
                  <MdEdit />
                  Edit
                </button>
              )}
            </div>
          </div>
          {editNotificationVisible && (
            <div className="notification font-normal capitalize bg-[#0E5F4C]">
              Berhasil Disimpan!
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default DescriptionCompany;
