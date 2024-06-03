import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = ({ closeModal, showNotificationVisible }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [NotificationVisible, setNotificationVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [values, setValues] = useState({
    nama_lengkap: "",
    username: "",
    email: "",
    created: new Date().toISOString(),
    jabatan: "",
    tgl_lahir: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

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
      } else {
        // alert(response.data.Message || "Error Ngab");
        console.log(response.data.status);
      }
      showNotificationVisible();
      closeModal();
    } catch (error) {
      console.error("Registration error:", error);
      alert(
        "Registration failed. Please check your details or try again later."
      );
    }
  };

  return (
    <>
      <section className="relative z-0 w-full flex flex-col justify-center items-center font-primary bg-gradient-to-l from-secondary to-white overflow-hidden rounded-xl shadow-sm">
        <div className="p-6 rounded-3xl mt-5 space-y-6 w-full md:max-w-2xl max-w-sm">
          <p className="text-2xl 2xl:text-3xl font-semibold text-primary">
            Tambah Akun
          </p>

          <form className="w-full space-y-8" onSubmit={handleSubmit}>
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

            <div className="w-full flex justify-end gap-4 pb-6">
              <button
                onClick={closeModal}
                className=" px-8 py-1.5 bg-transparent outline outline-1 outline-secondary rounded-full hover:bg-white/30 hover:text-white duration-150"
              >
                Batal
              </button>
              <button className=" px-8 py-1.5 bg-transparent outline outline-1 outline-primary rounded-full hover:bg-primary hover:text-white duration-150">
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
