import React from "react";

const DataPengguna = ({ namaLengkap }) => {
  return (
    <>
      <section
        id="dataProduk"
        className="w-full h-screen px-6 2xl:px-12 2xl:pt-4 pt-20"
      >
        <div className="w-full bg-white/40 backdrop-blur h-36 rounded-xl p-4 relative -z-0">
          <div className="w-36 h-36 rounded-full overflow-hidden absolute -bottom-1/2 left-24 border-primary border-2">
            <img src="./images/profile.jpg" alt="foto profile" />
          </div>

          <div className="text-white flex items-center gap-2 relative -z-0">
            <p className="bg-primary px-4 py-1 text-sm rounded-xl absolute top-0 right-0 -z-0">
              Master
            </p>
            <div className="absolute -top-1 -right-1 z-10">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
            </div>
          </div>

          <div className="left-1/4 absolute bottom-3">
            <p className="text-primary text-xl font-semibold">{namaLengkap}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataPengguna;
