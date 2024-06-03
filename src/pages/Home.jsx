import Banner from "../components/Banner";
import SectionFour from "../components/Home/SectionFour";
import SectionThree from "../components/Home/SectionThree";
import SectionTwo from "../components/Home/SectionTwo";

const Home = () => {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>

      <section id="testimoni" className="relative z-0 scroll-smooth">
        <SectionTwo />
      </section>

      <section id="artikel">
        <SectionThree />
      </section>

      <section id="contact">
        <SectionFour />
      </section>

      {/* <div className="max-w-7xl mx-auto md:p-0 p-6">
        <BlogPage />
      </div> */}
    </>
  );
};

export default Home;
