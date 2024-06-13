import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { BiShow, BiHide } from "react-icons/bi";
import { RiErrorWarningFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import AuthRedirect from "./AuthRedirect.jsx";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [logoutNotif, setLogoutNotif] = useState(false);
  const location = useLocation();
  const loggedOut = location.state?.loggedOut;

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { email: "", password: "" };

    if (!values.email) {
      newErrors.email = "is required";
      formIsValid = false;
    }

    if (!values.password) {
      newErrors.password = "is required";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/login", values);
      if (response.data.Status === "Success") {
        login();
        navigate("/master");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Terjadi kesalahan saat login. Silakan coba lagi.");
      }
    }
  };

  useEffect(() => {
    console.log("Logged Out State:", loggedOut);
    if (loggedOut) {
      setLogoutNotif(true);
      setTimeout(() => {
        setLogoutNotif(false);
      }, 4000);
    }
  }, [loggedOut]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <AuthRedirect>
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
          <div className="p-8 md:p-12 2xl:p-12 bg-white/40 backdrop-blur rounded-3xl shadow shadow-white/50 mt-5 space-y-8 w-full md:max-w-lg max-w-xs">
            <p className="text-2xl 2xl:text-3xl font-semibold text-primary text-center">
              Masuk Akun
            </p>

            <form className="w-full space-y-8" onSubmit={handleSubmit}>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <label>Email*</label>
                  {errors.email && (
                    <p className="text-[#FF4D4D] font-medium">{errors.email}</p>
                  )}
                </div>
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
                <div className="flex item-center gap-2">
                  <label>Password*</label>
                  {errors.password && (
                    <p className="text-[#FF4D4D] font-medium">
                      {errors.password}
                    </p>
                  )}
                </div>
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

              {message && (
                <div className="mt-0 text-[#FF4D4D] text-start font-semibold flex items-center gap-2">
                  <RiErrorWarningFill />
                  {message}
                </div>
              )}
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

          {logoutNotif && (
            <div className="notification font-normal capitalize bg-[#FF4D4D]">
              Berhasil Keluar!
            </div>
          )}
        </section>
      </AuthRedirect>
    </>
  );
};

export default Login;
