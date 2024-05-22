import { useState } from "react";
import React from "react";
import axios from "axios";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/login", values);
      if (response.data.Status === "Success") {
        navigate("/master");
      } else {
        alert(response.data.Message || "Error Ngab");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your details or try again later.");
    }
  };

  return (
    <>
      <section className="relative z-0 w-full h-screen flex flex-col justify-center items-center font-primary bg-gradient-to-l from-secondary to-white overflow-hidden">
        <img
          src="./images/logo_accent.svg"
          alt="logo_accent"
          className="absolute bottom-0 md:left-0 -left-20 -z-10 select-none"
        />
        <img
          src="./images/bubble_one.svg"
          alt="logo_accent"
          className="absolute top-20 translate-x-3/4 -z-10 select-none"
        />
        <img
          src="./images/bubble_two.svg"
          alt="logo_accent"
          className="absolute right-1/4 -z-10 select-none"
        />
        <img
          src="./images/bubble_three.svg"
          alt="logo_accent"
          className="absolute right-80 top-1/4 -z-10 select-none"
        />
        <img
          src="./images/bubble_one.svg"
          alt="logo_accent"
          className="absolute -bottom-36 -right-20 -z-10 select-none hidden md:block"
        />

        <img
          src="./images/logo_primary.svg"
          alt="logo"
          className="w-2/4 md:w-auto"
        />
        <div className="p-8 2xl:p-12 bg-white/40 backdrop-blur rounded-3xl shadow shadow-white/50 mt-5 space-y-8 w-full md:max-w-lg max-w-xs">
          <p className="text-2xl 2xl:text-3xl font-semibold text-primary text-center">
            Masuk Akun
          </p>

          <form className="w-full space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full">
              <label>Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                className="bg-transparent border-b outline-none py-1.5 px-1"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col w-full relative">
              <label>Password*</label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder=""
                className="bg-transparent border-b outline-none py-1.5 px-1"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <button
                type="button"
                className="text-lg absolute bottom-12 right-0"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <BiShow /> : <BiHide />}
              </button>
              <div className="space-x-2 mt-3">
                <input type="checkbox" className="rounded-full" />
                <label>Ingat Kata Sandi</label>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <button className="text-primary px-14 py-1.5 bg-transparent outline outline-1 outline-primary rounded-full hover:bg-primary hover:text-white duration-150">
                Masuk
              </button>
            </div>
          </form>
        </div>

        <p className="text-white font-light tracking-wide text-sm 2xl:text-lg absolute bottom-6 2xl:bottom-10 select-none">
          © Copyright by YaduhUI. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default Login;
