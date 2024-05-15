import { MdExpandMore } from "react-icons/md";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import ArtikelCards from "./ArtikelCards";

const Banner = () => {
  return (
    <>
      <section id="home">
        <div className="w-full h-screen relative z-0 font-primary overflow-hidden flex flex-col items-center justify-center gap-6 px-16 2xl:px-28">
          <img
            className="w-full absolute -z-10 select-none"
            src="./images/banner.png"
            alt="banner"
          />

          <div className="w-full flex flex-col justify-around items-start gap-3 h-full ">
            <div className="text-3xl text-primary font-medium tracking-wide pt-10">
              <p>Hi, There</p>
            </div>

            <div>
              <h1 className="text-grey text-3xl font-medium tracking-widest">
                OUR MISSON
              </h1>
              <h1 className="text-4xl 2xl:text-5xl text-primary font-semibold w-[40%]">
                We Always Provide The Best Quality Products And The Best
                Solution {">>>"}
              </h1>
            </div>

            <div className="flex gap-4 items-center text-secondary text-xl animate-bounce">
              <p>See More</p>
              <MdExpandMore />
            </div>
          </div>
        </div>
      </section>

      <section id="product">
        <div className="w-full h-screen relative z-0 font-primary overflow-hidden flex flex-col items-start justify-center gap-6 ">
          <img
            className="absolute -z-10 top-0"
            src="./icons/bubble.svg"
            alt="bubble"
          />
          <img
            className="absolute -z-10 right-44 top-20"
            src="./icons/bubble2.svg"
            alt="bubble"
          />

          <img
            className="absolute -z-10 right-0 top-20"
            src="./icons/bubble3.svg"
            alt="bubble"
          />

          <div className="space-y-2 px-16 2xl:px-28">
            <p className="uppercase text-grey text-2xl font-medium">
              Our Product
            </p>
            <h1 className="text-3xl 2xl:text-4xl font-semibold capitalize text-primary">
              We are committed to helping more than 1000 people <br />
              from all regions in Indonesia {">>>"}
            </h1>
          </div>

          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col gap-5 p-16 2xl:px-28">
              <div className="flex gap-5 items-center">
                <img src="./icons/people.svg" alt="ipeople" />
                <p className="text-3xl 2xl:text-4xl font-semibold text-primary">
                  1000+
                </p>
              </div>
              <div className="w-rull h-[2px] bg-grey"></div>
              <p className="text-xl text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
            <div className="flex flex-col gap-5 p-16">
              <div className="flex gap-5 items-center">
                <img src="./icons/products.svg" alt="ipeople" />
                <p className="text-3xl 2xl:text-4xl font-semibold text-primary">
                  199+
                </p>
              </div>
              <div className="w-rull h-[2px] bg-grey"></div>
              <p className="text-xl text-justify">
                Text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </div>
            <div className="flex flex-col gap-5 p-16">
              <div className="flex gap-5 items-center">
                <img src="./icons/testimoni.svg" alt="ipeople" />
                <p className="text-3xl 2xl:text-4xl font-semibold text-primary">
                  2K Testimoni
                </p>
              </div>
              <div className="w-rull h-[2px] bg-grey"></div>
              <p className="text-xl text-justify">
                Scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting.
              </p>
            </div>
          </div>
          <div className="bg-primary absolute bottom-0 h-56 w-full"></div>
        </div>
      </section>

      <section id="artikel">
        <div className="w-full h-screen relative z-0 font-primary overflow-hidden grid grid-cols-5 ">
          <img
            className="absolute bottom-0 left-0 -z-10"
            src="./icons/accentLogo.svg"
            alt="accent logo"
          />

          <div className="col-span-2 place-content-center capitalize pr-20 space-y-6 px-16 2xl:px-28">
            <p className="text-5xl text-primary font-semibold">
              berita terkini tentang kesehatan yang relevan.
            </p>
            <div className="w-96">
              <p className="text-grey capitalize">
                Tetap terhubung dengan perkembangan terbaru di dunia farmasi dan
                kesehatan.
              </p>
            </div>
            <button className="bg-accent px-7 py-2 rounded-xl capitalize border-primary border flex gap-2 items-center">
              Baca Berita{" "}
              <span>
                <HiOutlineArrowSmRight />
              </span>
            </button>
          </div>
          <div className="col-span-3 place-content-center capitalize pr-20 space-y-8 px-16 2xl:px-28 bg-gradient-to-b from-primary to-secondary">
            <p className="text-3xl text-white font-semibold">
              POSTINGAN TERBARU
            </p>
            <ArtikelCards />
            <ArtikelCards />
            <ArtikelCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
