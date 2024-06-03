import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import SideBar from "../components/SideBar";

const About = () => {
  const phoneNumber = "628990656996"; // Nomor WhatsApp dengan kode negara
  const message = "Om, mau kenalan dong.."; // Pesan yang ingin Anda kirim

  // Format URL WhatsApp dengan nomor dan pesan
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <section id="about">
        <div className="w-full font-primary mb-10 py-20 bg-white/90">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-0">
            <div className="col-span-1 md:col-span-2 text-justify">
              <h1 className="uppercase text-2xl md:text-3xl font-bold tracking-wide text-primary pt-0 md:pt-6">
                Tentang Perusahaan
              </h1>
              <div className="w-full flex justify-center">
                <img
                  className="md:w-2/4 w-full md:p-0 p-6 md:py-6"
                  src="./images/logo12askara.png"
                  alt="logo perusahaan"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">
                  Selamat datang di 12Askara!
                </h3>
                <p className="leading-relaxed indent-8">
                  12Askara adalah pionir dalam industri farmasi yang berdedikasi
                  untuk meningkatkan kesehatan dan kesejahteraan masyarakat
                  melalui inovasi terdepan dan pelayanan berkualitas tinggi.
                  Sejak didirikan, kami telah berkomitmen untuk menyediakan
                  produk-produk farmasi yang aman, efektif, dan terjangkau
                  kepada jutaan orang di seluruh dunia. Kami memulai perjalanan
                  kami dengan tekad yang kuat untuk menghadirkan perubahan
                  positif dalam industri farmasi. Seiring berjalannya waktu,
                  kami telah tumbuh menjadi sebuah perusahaan yang berfokus pada
                  riset, pengembangan, dan produksi berbagai macam produk
                  farmasi yang melayani kebutuhan beragam pasien. Komitmen kami
                  terhadap kualitas tak tertandingi tercermin dalam setiap aspek
                  dari operasi kami.
                </p>
                <p className="leading-relaxed indent-8">
                  Mulai dari seleksi bahan baku hingga proses produksi yang
                  canggih, kami memastikan bahwa setiap produk yang kami
                  hasilkan memenuhi standar mutu tertinggi dan mengikuti pedoman
                  regulasi yang ketat. Di 12Askara, kami memahami bahwa
                  kesehatan adalah harta yang paling berharga. Oleh karena itu,
                  kami tidak hanya berfokus pada pengembangan produk-produk
                  farmasi inovatif, tetapi juga berupaya untuk menyediakan
                  edukasi dan informasi yang akurat kepada masyarakat tentang
                  pentingnya perawatan kesehatan yang tepat. Kami bangga dengan
                  tim berbakat kami yang terdiri dari ilmuwan, peneliti, dan
                  profesional farmasi terbaik dalam industri.
                </p>
                <p className="leading-relaxed indent-8">
                  Dengan kerja sama yang erat dan semangat kolaboratif, kami
                  terus berusaha untuk mencapai visi kami untuk menjadi pemimpin
                  global dalam inovasi farmasi. Sebagai bagian dari komitmen
                  kami untuk memberikan dampak positif bagi masyarakat dan
                  lingkungan, kami juga berupaya untuk menjalankan praktik
                  bisnis yang berkelanjutan dan bertanggung jawab. Kami percaya
                  bahwa keberhasilan jangka panjang tidak hanya diukur dari
                  profitabilitas, tetapi juga dari kontribusi positif kami
                  terhadap dunia di sekitar kita. Kami berterima kasih kepada
                  seluruh mitra, pelanggan, dan karyawan kami yang telah
                  mendukung kami dalam perjalanan ini. Bersama-sama, kami
                  berharap dapat terus menginspirasi perubahan positif dan
                  meningkatkan kualitas hidup bagi semua orang.
                </p>
                <p className="leading-relaxed indent-8">
                  Terima kasih telah memilih 12Askara sebagai mitra kesehatan
                  Anda. Mari bersama-sama menciptakan masa depan yang lebih
                  sehat dan berkelanjutan!
                </p>
              </div>
            </div>
            <div className="mt-6">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
