import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = ({ closeModal, showNotificationVisible, fetchUsers }) => {
  const [values, setValues] = useState({
    nama_lengkap: "",
    username: "",
    email: "",
    created: new Date().toISOString(),
    jabatan: "",
    tgl_lahir: "",
    gender: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !values.nama_lengkap ||
      !values.username ||
      !values.email ||
      !values.jabatan ||
      !values.gender ||
      !values.tgl_lahir
    ) {
      alert("Semua Form Wajib Di isi!");
      return;
    }

    try {
      const formattedDate = values.tgl_lahir
        ? `${values.tgl_lahir.slice(8, 10)}${values.tgl_lahir.slice(
            5,
            7
          )}${values.tgl_lahir.slice(2, 4)}`
        : "";
      const response = await axios.post("http://localhost:8081/register", {
        ...values,
        password: formattedDate,
      });
      if (response.data.Status === "Success") {
        fetchUsers();
      } else {
        console.log(response.data.status);
      }
      showNotificationVisible();
      closeModal();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <section className="relative z-0 w-full flex flex-col justify-center items-center font-primary bg-white/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-sm">
        <div className="p-6 px-10 rounded-3xl mt-0 2xl:mt-5 md:space-y-3 2xl:space-y-6 w-full md:max-w-2xl max-w-sm">
          <p className="text-2xl 2xl:text-3xl font-semibold text-primary">
            Tambah Akun
          </p>

          <form
            className="w-full 2xl:space-y-8 space-y-4"
            onSubmit={handleSubmit}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault(); // Prevent default form submission behavior
                handleSubmit(event); // Trigger your form submission handler
              }
            }}
          >
            <div className="flex flex-col w-full">
              <label htmlFor="email">Nama Lengkap*</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                className="bg-transparent border-b outline-none py-1.5 px-1"
                onChange={(e) =>
                  setValues({ ...values, nama_lengkap: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="username">Username*</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                className="bg-transparent border-b outline-none py-1.5 px-1"
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="jabatan">Role*</label>
              <select
                id="jabatan"
                name="jabatan"
                className="bg-transparent border-b outline-none py-1.5 px-1"
                value={values.jabatan}
                onChange={(e) =>
                  setValues({ ...values, jabatan: e.target.value })
                }
              >
                <option value="">Pilih Role</option>
                <option value="0">Master</option>
                <option value="1">Karyawan</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="gender">Gender*</label>
              <select
                id="gender"
                name="gender"
                className="bg-transparent border-b outline-none py-1.5 px-1"
                value={values.gender}
                onChange={(e) =>
                  setValues({ ...values, gender: e.target.value })
                }
              >
                <option value="">Pilih Role</option>
                <option value="0">Laki - Laki</option>
                <option value="1">Perempuan</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                className="bg-transparent border-b outline-none py-1.5 px-1"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col w-full relative">
              <label htmlFor="tanggal_lahir">Tanggal Lahir*</label>
              <input
                type="date"
                name="tanggal_lahir"
                id="tanggal_lahir"
                placeholder=""
                className="bg-transparent border-b outline-none py-1.5 px-1"
                value={values.tgl_lahir}
                onChange={(e) =>
                  setValues({ ...values, tgl_lahir: e.target.value })
                }
              />
            </div>

            <div className="w-full flex justify-end gap-0 pb-6 pt-4">
              <button
                onClick={closeModal}
                className=" px-8 py-1.5  rounded-full text-black hover:text-grey duration-150"
              >
                Batal
              </button>
              <button className=" px-8 py-1.5 bg-secondary rounded-full hover:bg-primary text-white duration-150">
                Tambah Akun
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
