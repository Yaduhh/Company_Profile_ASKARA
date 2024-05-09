import { useState } from "react";
import React from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
        <div className="p-8 md:p-12 bg-white/40 backdrop-blur rounded-3xl shadow shadow-white/50 mt-5 space-y-8 w-full md:max-w-lg max-w-xs">
          <p className="text-2xl md:text-3xl font-semibold text-primary text-center">
            Masuk Akun
          </p>

          <form className="space-y-5 text-primary">
            <div className="w-full flex flex-col">
              <label className="font-semibold">Email*</label>
              <input
                type="email"
                className="px-1 py-2 bg-transparent border-b outline-none"
                placeholder=""
              />
            </div>

            <div className="w-full flex flex-col relative">
              <label className="font-semibold">Password*</label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="px-1 py-2 bg-transparent border-b outline-none"
                placeholder=""
              />
              <button
                type="button"
                className="text-primary hover:text-secondary duration-100 absolute right-0 bottom-3"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <BiHide /> : <BiShow />}
              </button>
            </div>

            <div className="space-x-2">
              <input type="checkbox" id="remember" className="rounded-full" />
              <label>Ingat Kata Sandi</label>
            </div>

            <div className="w-full flex justify-end">
              <button className="px-14 py-1.5 w-full md:w-auto rounded-full bg-transparent border hover:bg-secondary/30 hover:text-white duration-150">
                Masuk
              </button>
            </div>
          </form>
        </div>

        <p className="text-white font-light tracking-wide text-xs lg:text-lg absolute bottom-10 select-none">
          © Copyright by YaduhUI. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default Login;
