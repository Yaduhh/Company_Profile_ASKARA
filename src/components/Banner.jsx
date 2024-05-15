import { MdExpandMore } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <section id="home">
        <div className="w-full h-screen relative z-0 font-primary overflow-hidden flex flex-col items-center justify-center gap-6 px-16">
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
          <div className="space-y-2 px-16">
            <p className="uppercase text-grey text-2xl font-medium">
              Our Product
            </p>
            <h1 className="text-3xl 2xl:text-4xl font-semibold capitalize text-primary">
              We are committed to helping more than 1000 people <br />
              from all regions in Indonesia {">>>"}
            </h1>
          </div>

          <div className="px-16 w-full grid grid-cols-3">
            <div className="bg-primary">
              <img src="./icons/people.svg" alt="ipeople" />
              <p>1000+</p>
            </div>
            <div className="bg-grey">
              <img src="./icons/products.svg" alt="iproducts" />
              <p>199+</p>
            </div>
            <div className="bg-accent">
              <img src="./icons/testimoni.svg" alt="ipeople" />
              <p>2K+ testimoni</p>
            </div>
          </div>
          <div className="bg-primary absolute bottom-0 h-56 w-full"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
