import React, { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoMale } from "react-icons/io5";
import { RiRadioButtonLine } from "react-icons/ri";
import { MdAddBox, MdModeEdit, MdDelete } from "react-icons/md";
import Register from "./../pages/register/Register";
import axios from "axios";
import Loading from "./Loading";

const DataPengguna = ({
  nama_lengkap,
  username,
  jabatan,
  created,
  email,
  gender,
  id,
  tgl_lahir,
  handleLogout,
}) => {
  const [users, setUsers] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteNotificationVisible, setDeleteNotificationVisible] =
    useState(false);
  const [editNotificationVisible, setEditNotificationVisible] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [status, setStatus] = useState();
  const [NotificationVisible, setNotificationVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEditModal, setUserEditModal] = useState(false);
  const [editedUser, setEditedUser] = useState({
    nama_lengkap: "",
    username: "",
    email: "",
    password: "",
    gender: 0,
    jabatan: 0,
    tgl_lahir: "",
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8081/users", {
        withCredentials: true,
      });
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Ada kesalahan saat mengambil data pengguna!", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8081/users/${userId}`);
      setModalDelete(false);
      showDeleteNotification();
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUserByMaster = async (userId) => {
    try {
      await axios.put(`http://localhost:8081/usersbymaster/${userId}`, {
        status,
      });
      setEditModal(false);
      showEditNotification();
      fetchUsers(); // Fetch updated user data
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleEditUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { ...editedUser };
      if (!updatedUser.password) {
        delete updatedUser.password; // Hapus password jika tidak diubah
      }
      await axios.put(
        `http://localhost:8081/users/${editedUser.id}`,
        updatedUser
      );

      setUserEditModal(false);
      handleLogout();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleEditUserModal = () => {
    const formattedTglLahir = new Date(tgl_lahir).toISOString().split("T")[0];

    setEditedUser({
      nama_lengkap: nama_lengkap,
      username: username,
      email: email,
      gender: gender,
      jabatan: jabatan === "master" ? 0 : 1,
      password: "",
      id: id,
      tgl_lahir: formattedTglLahir,
    });
    setUserEditModal(true);
  };

  const getJabatanLabel = (jabatan) => {
    return jabatan === 0 ? "master" : "karyawan";
  };

  const getStatusLabel = (status) => {
    return status === 0 ? "aktif" : "nonaktif";
  };

  const getGenderLabel = (gender) => {
    return gender === 0 ? "Laki - Laki" : "Perempuan";
  };

  const handleModalDelete = (user) => {
    setSelectedUser(user);
    setModalDelete(true);
  };

  const handleModalEdit = (user) => {
    setSelectedUser(user);
    setEditModal(true);
    setStatus(user.status);
  };

  const showDeleteNotification = () => {
    setDeleteNotificationVisible(true);
    setTimeout(() => {
      setDeleteNotificationVisible(false);
    }, 4000);
  };

  const showEditNotification = () => {
    setEditNotificationVisible(true);
    setTimeout(() => {
      setEditNotificationVisible(false);
    }, 4000);
  };

  const closeModal = () => {
    setModalDelete(false);
    setRegisterModal(false);
    setEditModal(false);
    userEditModal(false);
  };

  const tambahAkun = () => {
    setRegisterModal(true);
  };

  const showNotificationVisible = () => {
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 4000);
  };

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <section
            id="dataPengguna"
            className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20"
          >
            <div className="w-full bg-white/40 backdrop-blur h-28 2xl:h-44 rounded-xl p-4 relative -z-10">
              <div className="w-28 2xl:w-44 2xl:h-44 h-28 rounded-full overflow-hidden absolute -bottom-1/2 left-28 2xl:left-[12%] border-primary border-2">
                <img src="./images/profile.jpg" alt="foto profile" />
              </div>

              <div className="text-white flex items-center gap-2 relative -z-0">
                <p className="bg-primary px-4 capitalize py-1 text-sm rounded-xl absolute top-0 right-0 -z-0">
                  {jabatan}
                </p>
                <div className="absolute -top-1 -right-1 z-10">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                </div>
              </div>

              <div className="left-1/4 absolute bottom-3">
                <p className="text-primary text-xl 2xl:text-2xl font-semibold">
                  {nama_lengkap}{" "}
                </p>
                <div className="bg-primary w-full h-[1.5px] mt-1"></div>
              </div>
            </div>
            <div className="w-full h-auto grid grid-cols-4 pt-1 md:mb-3 2xl:mb-10">
              <div className="col-span-1"></div>
              <div className="col-span-3 space-y-3">
                <p>
                  Bergabung Sejak : {created} |{" "}
                  <span className="font-medium">{username}</span>
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleEditUserModal(editedUser)}
                    className="flex items-center gap-2 bg-secondary text-white px-4 py-1 rounded-lg w-fit hover:bg-grey duration-150 select-none"
                  >
                    <FaUserEdit />
                    <p>Data Diri</p>
                  </button>

                  <div className="flex items-center gap-2 bg-white/30 backdrop-blur text-white px-4 py-1 rounded-lg w-fit hover:bg-secondary/30 duration-150 select-none">
                    <RiRadioButtonLine />
                    <p>Active</p>
                  </div>
                </div>
              </div>
            </div>
            {jabatan === "master" && (
              <>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="text-lg 2xl:text-xl font-semibold text-primary underline underline-offset-8">
                    Data Akun Pekerja
                  </h1>
                  <button
                    onClick={tambahAkun}
                    className="flex items-center gap-2 bg-secondary hover:bg-secondary/30 backdrop-blur duration-200 px-3 py-1 rounded-lg text-white"
                  >
                    <MdAddBox />
                    <span>Tambah Akun</span>
                  </button>
                </div>
                <div className="overflow-x-auto mt-3 rounded-lg bg-transparent 2xl:max-h-[50%] md:max-h-[50%] no-scrollbar relative -z-0">
                  <table className="min-w-full bg-white/30 backdrop-blur border border-grey">
                    <thead>
                      <tr className="bg-primary text-white border-collapse border border-grey static top-0 text-sm">
                        <th className="py-2 px-4 ">No</th>
                        <th className="py-2 px-4 text-start">Nama Lengkap</th>
                        <th className="py-2 px-4 text-start">Username</th>
                        <th className="py-2 px-4 text-start">Gender</th>
                        <th className="py-2 px-4 text-start">Email</th>
                        <th className="py-2 px-4 text-start ">Jabatan</th>
                        <th className="py-2 px-4 text-start">Status</th>
                        <th className="py-2 px-4 text-center">Bergabung</th>
                        <th className="py-2 px-4">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr
                          key={user.id}
                          className="hover:bg-grey/20 border-collapse border border-grey text-sm"
                        >
                          <td className="py-2 px-4 text-center border-collapse border border-grey w-5">
                            {index + 1}
                          </td>
                          <td className="py-2 px-4 border-collapse border border-grey">
                            {user.nama_lengkap}
                          </td>
                          <td className="py-2 px-4 border-collapse border border-grey w-16">
                            {user.username}
                          </td>
                          <td className="py-2 px-4 border-collapse border border-grey w-fit">
                            {getGenderLabel(user.gender)}
                          </td>
                          <td className="py-2 px-4 border-collapse border border-grey">
                            {user.email}
                          </td>
                          <td className="py-2 px-4 border-collapse border border-grey w-10">
                            <p className="bg-primary capitalize w-fit px-4 py-1 rounded-lg text-xs text-white">
                              {getJabatanLabel(user.jabatan)}
                            </p>
                          </td>
                          <td className="py-2 px-4 border-collapse border border-grey w-10">
                            <p
                              className={`capitalize backdrop-blur w-min px-4 py-1 rounded-lg text-xs text-white ${
                                user.status === 0
                                  ? "bg-[#0E5F4C]"
                                  : "bg-[#FF4D4D]"
                              }`}
                            >
                              {getStatusLabel(user.status)}
                            </p>
                          </td>
                          <td className="py-2 px-4 border-collapse border border-grey w-10">
                            <p className="capitaliz w-fit rounded-lg text-sm text-primary font-semibold text-center">
                              {new Date(user.created).toLocaleDateString(
                                "en-GB"
                              )}
                            </p>
                          </td>
                          <td>
                            <div className="flex items-center gap-2 text-white justify-center mx-5">
                              <button
                                onClick={() => handleModalEdit(user)}
                                className="bg-grey hover:bg-white hover:text-grey duration-200 rounded-lg p-1 2xl:p-2 text-sm"
                              >
                                <MdModeEdit />
                              </button>
                              <button
                                onClick={() => handleModalDelete(user)}
                                className="bg-[#FF4D4D] hover:bg-white/30 rounded-lg p-1 2xl:p-2 text-sm duration-200"
                              >
                                <MdDelete />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* MODAL DELETE */}
            {modalDelete && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg">
                  <p>Apakah Anda yakin ingin menghapus akun ini?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={closeModal}
                      className="hover:text-grey duration-150 mr-4"
                    >
                      Batal
                    </button>
                    <button
                      onClick={() => deleteUser(selectedUser.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault(); // Prevent default form submission behavior if applicable
                          deleteUser(selectedUser.id);
                        }
                      }}
                      autoFocus
                      className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/60 duration-150 text-white font-semibold py-2 px-4 rounded"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Edit MASTER */}
            {editModal && (
              <div className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
                <div className="bg-white px-8 py-6 rounded-lg">
                  <form className="w-full space-y-8">
                    <div className="flex flex-col w-full">
                      <label htmlFor="jabatan">Status*</label>
                      <select
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="bg-transparent border-b outline-none py-1.5 px-1"
                      >
                        <option value="">Pilih Status</option>
                        <option value="0">Aktif</option>
                        <option value="1">Non Aktif</option>
                      </select>
                    </div>

                    <div className="w-full flex justify-end gap-0 pb-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className=" px-8 py-1.5 bg-transparentrounded-full hover:bg-white/30 hover:text-white duration-150"
                      >
                        Batal
                      </button>
                      <button
                        type="button"
                        onClick={() => editUserByMaster(selectedUser.id)}
                        className=" px-8 py-1.5 bg-[#0E5F4C] rounded-full hover:bg-grey/30 text-white duration-150"
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* CREATE AKUN */}
            {registerModal && (
              <div className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
                <div className=" w-[40%]">
                  <Register
                    fetchUsers={fetchUsers}
                    closeModal={closeModal}
                    showNotificationVisible={showNotificationVisible}
                  />
                </div>
              </div>
            )}

            {/* CurrentUser */}
            {userEditModal && (
              <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
                <div className="bg-white/90 px-16 py-10 rounded-lg shadow-lg max-w-2xl w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-primary">
                      Edit Data Akun
                    </h2>
                    <button
                      onClick={() => setUserEditModal(false)}
                      className="text-primary hover:text-grey focus:outline-none text-3xl"
                    >
                      &times;
                    </button>
                  </div>
                  <form
                    onSubmit={handleEditUserSubmit}
                    className="space-y-4 w-full"
                  >
                    <div className="form-group ">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="nama_lengkap"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="nama_lengkap"
                        value={editedUser.nama_lengkap}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            nama_lengkap: e.target.value,
                          })
                        }
                        className="bg-transparent w-full border-b outline-none py-1.5 px-1"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        value={editedUser.username}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            username: e.target.value,
                          })
                        }
                        className="bg-transparent w-full border-b outline-none py-1.5 px-1"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={editedUser.email}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            email: e.target.value,
                          })
                        }
                        className="bg-transparent w-full border-b outline-none py-1.5 px-1"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                      >
                        Password Baru (Kosongkan Jika Tidak Perlu)
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={editedUser.password}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            password: e.target.value,
                          })
                        }
                        className="bg-transparent w-full border-b outline-none py-1.5 px-1"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="tgl_lahir"
                      >
                        Birthday
                      </label>
                      <input
                        type="date"
                        id="tgl_lahir"
                        value={editedUser.tgl_lahir}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            tgl_lahir: e.target.value,
                          })
                        }
                        className="bg-transparent w-full border-b outline-none py-1.5 px-1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={editedUser.gender}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            gender: parseInt(e.target.value),
                          })
                        }
                        className="bg-transparent w-full border-b outline-none py-1.5 px-1"
                      >
                        <option value={0}>Laki - Laki</option>
                        <option value={1}>Perempuan</option>
                      </select>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary hover:bg-grey text-white rounded-md hover:bg-blue-600 focus:outline-none"
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {deleteNotificationVisible && (
              <div className="notification font-normal capitalize bg-[#FF4D4D]">
                Data berhasil dihapus!
              </div>
            )}

            {editNotificationVisible && (
              <div className="notification font-normal capitalize bg-secondary">
                Status Berhasil diubah!
              </div>
            )}

            {NotificationVisible && (
              <div className="notification font-normal capitalize bg-[#0E5F4C]">
                akun berhasil dibuat!
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default DataPengguna;
