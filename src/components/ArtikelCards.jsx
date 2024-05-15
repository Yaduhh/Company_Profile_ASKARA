import { Link } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";

const ArtikelCards = () => {
  return (
    <>
      <div className="w-full bg-white flex rounded-2xl overflow-hidden cursor-pointer bg-orange-400 h-[200px] relative z-0 border-primary/30 border-[1px]">
        <img
          src="./icons/imagesdumy.svg"
          alt="wire"
          className="md:w-auto w-full md:h-60 h-64 object-cover rounded-md hover:scale-105 duration-200 transition-all ease-out hover:opacity-70"
        />
        <div>
          <p className="absolute text-center text-primary py-2 bottom-2 right-5 hover:text-secondary">
            Baca Selengkapnya
          </p>
          <p className="bg-primary px-3 py-1 absolute top-1 left-1 text-white text-sm tracking-wider font-primary font-light rounded-tl-2xl rounded-br-2xl">
            ini kategori
          </p>
        </div>
        <div className="w-full p-5 space-y-2 h-full ">
          <h3 className="text-primary text-justify capitalize mb-2 font-medium text-xl hover:text-blue-600 cursor-pointer ">
            Title Postingan Artikel
          </h3>
          <div className="w-full bg-grey h-[2px]"></div>
          <p className="line-clamp-2 text-sm text-primary">
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry'...
              </p>
            </div>
          </p>
          <div className="absolute bottom-5 flex gap-2 text-primary items-center text-sm">
            <img className=" w-4" src="./icons/idate.svg" alt="idate" />
            <p>15 Mei 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtikelCards;
