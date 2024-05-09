import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <>
      <div>
        <div className="py-40 bg-black text-white px-4">
          <h2 className="text-5xl leading-snug font-bold mb-5 ">
            Yaduh | Artikel
          </h2>
        </div>

        {/* All Blogs Container */}
        <div className="max-w-7xl mx-auto">
          <BlogPage />
        </div>
      </div>
    </>
  );
};

export default Blogs;
