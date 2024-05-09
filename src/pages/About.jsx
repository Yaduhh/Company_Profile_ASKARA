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
        <div className="w-full font-primary mb-10 py-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 p-6 md:p-0">
            <div className="col-span-1 md:col-span-2 text-justify space-y-4">
              <img
                src="./images/hero.png"
                alt="hero"
                className="w-full p-0 md:p-10"
              />
              <h1 className="uppercase text-3xl bg-kuning w-fit font-semibold px-1">
                YaduhCreative.com
              </h1>
              <p className="indent-8">
                Adalah blog edukatif yang dibuat menggunakan ViteJS walaupun
                sebenernya banyak CMS blog yang lebih mudah tanpa ribet! tapi
                karena penulis ini menggeluti bidang web development, maka
                terbentuklah website yang mungkin berfaedah ini :D yang
                berisikan kumpulan informasi dan tutorial seputar dunia desain
                grafis dan web development.
              </p>
              <p className="indent-8">
                Meskipun ada artikel yang nyeleneh dan jauh dari kata mendidik,
                itu dikarenakan penulis sedang setress dan kurang kasih sayang
                :*
              </p>
              <p className="indent-8">
                Maaf ya, kadang penulisnya emang suka gak jelas. Semua konten
                yang dibuat berdasarkan kebutuhan pribadi dan tidak ditunggangi
                oleh siapapun dan apapun.
              </p>
              <p className="italic">YAIYALAH ISINYA BEGINIAN DOANG~</p>
              <p className="indent-8">
                Nama gue Vega Anggara Saputra, biasa dipanggil sayang sama
                pacar. Tapi kalo lagi jomblo biasa dipanggil dukun. Gue adalah
                seorang yang menekuni bidang design, baik grafis maupun
                kebutuhan UI/UX. Selain itu juga menggeluti bidang web
                development, contohnya pada apa yang kalian liat ini, web ini
                dibuat manual makanya kalo mau buat website, tinggal cus sini
                sama om <span className="italic">~Malah promosi.</span>
              </p>
              <p className="indent-8">
                Gue juga merupakan seorang mahasiswa dari sebut saja UNDIP,
                maksudnya Universitas di Pamulang :D, jurusan sistem informasi,
                makanya alhasil terbentuklah website yang sangat berfaedah ini,
                semoga barokah dan bisa menghasilkan. Aamiin..
              </p>
              <p>Aminin juga dong</p>
              <p className="indent-8">
                semoga gue bisa terus update diblog ini dan semoga lo bisa
                menemukan pengetahuan baru yang edukatif, walaupun yauudah lah.
              </p>
              <p>Social Media Gue :</p>
              <div className="flex items-center text-5xl md:text-8xl text-third justify-around">
                <a
                  href="https://www.instagram.com/las_vegaaas/"
                  target="_blank"
                  className="hover:text-accent"
                >
                  <FaInstagram />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  className="hover:text-accent"
                >
                  <FaWhatsapp />
                </a>
                <a href="#" className="hover:text-accent">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:text-accent">
                  <FaYoutube />
                </a>
              </div>
              <div className="pt-5 md:pt-10">
                <a href="/service">
                  <img src="./images/ads.gif" alt="ads" />
                </a>
              </div>
            </div>
            <div>
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
