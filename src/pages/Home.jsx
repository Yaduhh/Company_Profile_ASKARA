import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";

const Home = () => {
  return (
    <>
      <Banner />

      <div className="max-w-7xl mx-auto md:p-0 p-6">
        <BlogPage />
      </div>
    </>
  );
};

export default Home;
