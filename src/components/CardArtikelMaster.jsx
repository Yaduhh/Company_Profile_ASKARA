import React from "react";
import { FaCalendar } from "react-icons/fa";
import { IoOpen } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

const CardArtikelMaster = () => {
  return (
    <>
      <div className="w-full bg-white/70 backdrop-blur rounded-2xl h-auto overflow-hidden">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <img
              src="./images/dumyimg.svg"
              alt="Thumbnails"
              className="h-32 w-full object-cover"
            />
          </div>
          <div className="col-span-3 p-3 2xl:p-6 space-y-2">
            <div className="flex justify-between">
              <h1 className="text-xl">Title Postingan</h1>
              <div className="gap-2 flex">
                <div className="bg-primary/70 px-3 py-1.5 text-xs text-white rounded-2xl backdrop-blur">
                  <p>Category</p>
                </div>
                <div className="bg-grey px-3 py-1.5 text-xs text-white rounded-2xl backdrop-blur">
                  <p>Publish</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-grey h-[1.5px] rounded-full"></div>
            <p className="text-black/50 text-sm text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>

          <div className="col-span-1 p-3 2xl:p-6 flex flex-col gap-2 text-sm items-end justify-between">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-grey">
                <FaCalendar />
                <p>12 Mei 2024</p>
              </div>
              <div className="flex items-center gap-2 text-grey">
                <FaUserAlt />
                <p>Angie Marcheria</p>
              </div>
            </div>
            <div className="space-x-3">
              <button className="px-3 py-3 bg-grey hover:bg-accent hover:text-grey duration-200  rounded-lg text-base text-white">
                <IoOpen className="ml-0.5" />
              </button>
              <button className="px-3 py-3 bg-secondary hover:bg-primary/70 hover:text-white duration-200 rounded-lg text-base text-white">
                <FaRegEdit className="ml-0.5" />
              </button>
              <button className="p-3 bg-[#FF4D4D] hover:bg-[#FF4D4D]/50 duration-200  rounded-lg text-base text-white">
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArtikelMaster;
