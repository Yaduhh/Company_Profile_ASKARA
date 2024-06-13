import React, { useState } from "react";
import axios from "axios";

const EditUserModal = ({ user, closeModal, fetchUsers }) => {
  const [name, setName] = useState(user.nama_lengkap);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8081/users/${user.id}`, {
        nama_lengkap: name,
        username: username,
        email: email,
        gender: gender,
      });
      closeModal();
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-8 py-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Data Diri</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-2 py-1"
            />
          </div>
          <div>
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-2 py-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-2 py-1"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border px-2 py-1"
            >
              <option value={0}>Laki - Laki</option>
              <option value={1}>Perempuan</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
