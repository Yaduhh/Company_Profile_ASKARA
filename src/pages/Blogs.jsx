import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <>
      <div>
        <div className="h-80 overflow-hidden relative -z-0 flex flex-col justify-center items-center">
          <img
            src="./images/bannerArticles.jpg"
            alt="Banner Articles"
            className="absolute bg-cover -z-10 hover:scale-125 hover:rotate-12 hover:opacity-85 duration-200 ease-out"
          />
          <h2 className="text-5xl leading-snug font-bold mb-5 text-center text-white mt-10">
            Dua Belas Askara | Artikel
          </h2>
        </div>

        {/* All Blogs Container */}
        <div className="max-w-7xl mx-auto mb-10">
          <BlogPage />
        </div>
      </div>
    </>
  );
};

export default Blogs;
