import SideBar from "./../components/SideBar";

const Service = () => {
  const phoneNumber = "628990656996";
  const message = "Punten Mbah, mau order vector *jenisvector dong . . .";

  // Format URL WhatsApp dengan nomor dan pesan
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <section id="service">
        <div className="w-full font-primary mb-10">
          {/* Banner */}
          <div className="pt-20 pb-4 flex flex-col justify-center w-full items-center">
            <h1 className="text-xl md:text-3xl text-white bg-primary px-8 py-2 rounded-3xl">
              Jasa Pembuatan Vector
            </h1>
          </div>

          {/* Detail atau isi */}
          <div className="max-w-5xl w-full gap-10 mx-auto grid md:grid-cols-3 grid-cols-1 p-6 md:p-0">
            <div className="md:col-span-2 col-span-1 w-full space-y-4">
              <img
                src="./images/jasaVector.jpg"
                alt="banner jasa vector"
                className="w-full"
              />
              <div className="text-lg md:text-xl uppercase font-semibold">
                <p>Mank boleh cetak foto besar, sebesar harapanmu kedia ?</p>
                <p>Mank boleh foto vector dijadiin kado unik buat pacar ?</p>
                <p>Mank boleh foto kurang ghanteng jadi unik dan keren ?</p>
                <br />
                <p className="italic">Di vektorin aja!</p>
              </div>
              <h3 className="text-xl">Hi, Selamat datang di Yaduh | Blog</h3>
              <div className="text-justify">
                <p className="font-semibold italic text-xl py-2">
                  Sebenernya apa itu{" "}
                  <span className="bg-kuning px-2">vector potrait ?</span>{" "}
                </p>
                <p>
                  Jasa Pembuatan Vector Potrait: Wujudkan Wajah Anda dalam Gaya
                  Seni Unik Vector potrait adalah sebuah karya seni digital yang
                  menampilkan wajah seseorang dalam bentuk vektor. Berbeda
                  dengan foto, vector potrait tidak akan pecah saat diperbesar,
                  sehingga dapat dicetak dalam berbagai ukuran tanpa kehilangan
                  kualitas. Jasa pembuatan vector potrait kini semakin populer
                  sebagai alternatif hadiah istimewa bagi orang tersayang,
                  dekorasi rumah, ataupun branding personal.
                </p>
              </div>

              {/* Keuntungan */}
              <div className="text-justify">
                <p>Keuntungan Memesan Jasa Pembuatan Vector Potrait:</p>
                <ul className="list-disc list-outside ml-10">
                  <li>
                    Hasil Berkualitas Tinggi: Vector potrait dibuat dengan
                    detail yang presisi dan dapat dicetak dalam berbagai ukuran
                    tanpa kehilangan kualitas.
                  </li>
                  <li>
                    Gaya Seni Unik: Vector potrait dapat dibuat dengan berbagai
                    gaya seni, seperti realistis, kartun, chibi, dan lainnya.
                  </li>
                  <li>
                    Hadiah Istimewa: Vector potrait adalah hadiah yang personal
                    dan unik untuk orang tersayang.
                  </li>
                  <li>
                    Dekorasi Rumah: Vector potrait dapat menjadi dekorasi rumah
                    yang menarik dan stylish.
                  </li>
                  <li>
                    Branding Personal: Vector potrait dapat digunakan sebagai
                    identitas visual untuk branding personal.
                  </li>
                </ul>
              </div>

              {/* Jenis penawaran */}
              <div>
                <p className="py-2">
                  Gimana mulai tertarik ? <br />
                  berikut adalah jenis vector yang akan saya tawarkan :
                </p>
                <div>
                  <p className="bg-primary text-white px-5 py-2 text-xl font-semibold rounded-tr-3xl w-fit">
                    PopArt Style -
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    <div>
                      <img
                        src="./images/jasaVector/popArt (1).jpg"
                        alt="popArt"
                      />
                    </div>
                    <div>
                      <img
                        src="./images/jasaVector/popArt (2).jpg"
                        alt="popArt"
                      />
                    </div>
                    <div>
                      <img
                        src="./images/jasaVector/popArt (3).jpg"
                        alt="popArt"
                      />
                    </div>
                    <div>
                      <img
                        src="./images/jasaVector/popArt (4).jpg"
                        alt="popArt"
                      />
                    </div>
                    <div>
                      <img
                        src="./images/jasaVector/popArt (5).jpg"
                        alt="popArt"
                      />
                    </div>
                    <div>
                      <img
                        src="./images/jasaVector/popArt (6).jpg"
                        alt="popArt"
                      />
                    </div>
                  </div>
                  <p className="pt-5 pb-3">
                    Untuk vector art ini dibanderol dengan harga mulai dari :
                  </p>
                  <ul className="list-disc ml-10 italic font-semibold">
                    <li>Rp. 49.000,-/ Wajah sampai pundak</li>
                    <li>Rp. 69.000,-/ Setengah Badan</li>
                    <li>Rp. 99.000,-/ Seluruh Badan</li>
                  </ul>
                </div>
              </div>
              {/* brown */}
              <div>
                <div>
                  <p className="bg-primary text-white px-5 py-2 text-xl font-semibold rounded-tr-3xl w-fit">
                    Nature Brown Style -
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    <div className="outline outline-primary outline-1">
                      <img
                        src="./images/jasaVector/brown (1).jpg"
                        alt="brown"
                      />
                    </div>
                    <div className="outline outline-primary outline-1">
                      <img
                        src="./images/jasaVector/brown (2).jpg"
                        alt="brown"
                      />
                    </div>
                    <div className="outline outline-primary outline-1">
                      <img
                        src="./images/jasaVector/brown (3).jpg"
                        alt="brown"
                      />
                    </div>
                    <div className="outline outline-primary outline-1">
                      <img
                        src="./images/jasaVector/brown (4).jpg"
                        alt="brown"
                      />
                    </div>
                    <div className="outline outline-primary outline-1">
                      <img
                        src="./images/jasaVector/brown (5).jpg"
                        alt="brown"
                      />
                    </div>
                    <div className="outline outline-primary outline-1">
                      <img
                        src="./images/jasaVector/brown (6).jpg"
                        alt="brown"
                      />
                    </div>
                  </div>
                  <p className="pt-5 pb-3">
                    Untuk vector art ini dibanderol dengan harga mulai dari :
                  </p>
                  <ul className="list-disc ml-10 italic font-semibold">
                    <li>Rp. 39.000,-/ Wajah sampai pundak</li>
                    <li>Rp. 59.000,-/ Setengah Badan</li>
                    <li>Rp. 89.000,-/ Seluruh Badan</li>
                  </ul>
                </div>
              </div>
              {/* bnw */}
              <div>
                <div>
                  <p className="bg-primary text-white px-5 py-2 text-xl font-semibold rounded-tr-3xl w-fit">
                    Black & White - Style
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="outline outline-primary outline-1">
                      <img src="./images/jasaVector/bnw (1).jpg" alt="bnw" />
                    </div>
                    <div className="outline outline-primary outline-1">
                      <img src="./images/jasaVector/bnw (2).jpg" alt="bnw" />
                    </div>
                  </div>
                  <p className="pt-5 pb-3">
                    Untuk vector art ini dibanderol dengan harga mulai dari :
                  </p>
                  <ul className="list-disc ml-10 italic font-semibold">
                    <li>Rp. 39.000,-/ Wajah sampai pundak</li>
                    <li>Rp. 59.000,-/ Setengah Badan</li>
                    <li>Rp. 89.000,-/ Seluruh Badan</li>
                  </ul>
                </div>
              </div>

              {/* Kriteria Foto */}
              <div>
                <p>Kriteria Foto :</p>
                <ul className="list-disc ml-10">
                  <li>
                    JARAK : Objek *orang tidak terlalu jauh untuk mempercepat
                    proses tracing karena objek terlihat jelas
                  </li>
                  <li>
                    FOKUS : Minimal tidak buram atau blur, coba bayangin kalo
                    fotonya burem {":)"} pusing pala aing :D
                  </li>
                  <li>
                    Kualitas Bagus : Tidak harus HD, minimal kalo dizoom - zoom
                    ke objek tidak terlalu pecah
                  </li>
                </ul>

                <p>Penting GUYS :</p>
                <ul className="list-disc ml-10">
                  <li>
                    Belum melayani cetak + frame, hanya softfile dan dikirim via
                    email
                  </li>
                  <li>
                    Jatah revisi 2-3 kali, tidak melayani revisi secara
                    keseluruhan {"(Tracing Ulang)"} | hanya revisi minor. Jadi
                    pastikan kalau punya catatan penting, bisa diberitahukan
                    sebelum order{" "}
                  </li>
                  <li>
                    Apabila dalam foto tersebut terdapat orname atau motif yang
                    kusut, misalnya seperti batik atau pernak - pernik. Akan
                    saya buatkan menjadi polos, tergantung tingkat kesulitannya{" "}
                    {"(diusahakan tracing semua)"}
                  </li>
                  <li>
                    Untuk warna akan menggunakan warna sesuai tema/jenis vector
                    yang dipilih, kalau ada request, silahkan namun disarankan
                    untuk tidak keluar dari konsep/jenis vector karena dapat
                    mengganggu ciri khas konsep
                  </li>
                </ul>
              </div>

              {/* FIle yang didapat */}
              <div className="text-justify">
                <h2 className="text-xl font-semibold my-2 bg-kuning w-fit px-3">
                  File yang diterima :
                </h2>
                <p>
                  FREE! File mentahan CorelDraw(.cdr) dan (.eps | ini format
                  universal vector) karena saya menggunakan Software CorelDraw
                  untuk pembuatannya. Dimana-mana file mentahan itu berbayar,
                  tapi ini saya kasih GRATIS TIS :D
                </p>
                <p>Emang file mentahan fungsinya apa sih ? kan mentah :D</p>
                <ul className="list-disc ml-10">
                  <li>
                    File dapat dimodifikasi atau diedit ulang dengan menggunakan
                    software yang serupa. *bisa request format lain, seperti
                    .png (tanpa background) ataupun yang sudah jadi .jpg
                  </li>
                  <li>
                    Semua diexport dalam kualitas terbaik tanpa pecah - pecah
                    kaya bibir sariawan.
                  </li>
                  <li>
                    Scalable, artinya bisa diubah ukurannya untuk dicetak yang
                    lebih besar jika dibutuhkan, bisa lebih lebar dari baliho
                    caleg kok.
                  </li>
                  <li>Ini biasanya mahal :D</li>
                </ul>
              </div>

              {/* Cara order */}
              <div className="text-justify">
                <h2 className="italic font-semibold text-lg md:text-xl py-2">
                  Bagaimana Cara Order Vector ?
                </h2>
                <p>
                  Caranya gampang aja ges, yuk wa sekarang supaya kita makin
                  romantis. ~Boong
                </p>
                <p>
                  Sebenernya ada beberapa cara, bisa melalui platform lain atau
                  bisa via chat pribadi di social medai saya.
                </p>
                <ul className="list-disc ml-10">
                  <li>
                    Bisa melalui fiverr dengan pembayaran dollar, minimal 5
                    dolar aja lhoo.{" "}
                    <a
                      href="https://www.fiverr.com/yaduh6/create-a-vector-face"
                      target="_blank"
                      className="text-third hover:font-semibold"
                    >
                      klik disini
                    </a>
                  </li>
                  <li>
                    Bisa melalui platform Ratakan{" "}
                    <span className="line-through">Land of down.</span>
                  </li>
                  <li>
                    Bisa melalui Whatsapp Romantis, cus langsung klik{" "}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      className="italic text-third hover:font-semibold"
                    >
                      disini.
                    </a>
                  </li>
                </ul>

                {/* cara umum */}
                <p className="py-2 font-semibold">Cara Umum :</p>
                <ul className="list-disc ml-10 ">
                  <li>
                    Kirim foto terkece kamu yang ingin dijadiin vector, jangan
                    lupa perhatikan kriteria fotonya diatas ya :D
                  </li>
                  <li>
                    Kirimkan ke email : vegakerenbanget@gmail.com dengan subjek{" "}
                    <span className="font-semibold">
                      Jenis Vector apa, misalnya | PopartStyle | BrownStyle |
                      BlackWhiteStyle |
                    </span>{" "}
                    Bisa request COLOR PALLETE JUGA LHO!
                  </li>
                  <li>Btw, emailnya bener ko kamu ga salah baca :D</li>
                  <li>
                    Supaya cepat direspon, bisa informasikan saya melalui
                    Whatsapp, chat aja{" "}
                    <span className="italic">
                      {"mbah ada orderan nih! dari... "}
                    </span>
                  </li>
                  <li>
                    Setelah deal dengan harga dan fotonya, Kamu tinggal
                    melakukan pembayaran melalui transfer ke nomor rekening
                    dibawah.
                  </li>
                  <li>
                    Jangan lupa kirimkan bukti transfer kamu ke Whatsapp/Email
                    yah
                  </li>
                  <li>
                    Kemudian vector akan segera diproses, untuk lama pengerjaan
                    tergantung kuantitas pesanan yang ada. Semua dikerjakan
                    berdasarkan urut pemesanan, jadi tenang aja, saya akan
                    kerjakan karena{" "}
                    <span className="italic font-semibold">
                      hidup kerja bagai kuda
                    </span>{" "}
                    ~malah nyanyi
                  </li>
                </ul>
              </div>

              {/* Pembayaran */}
              <div className="space-y-6">
                <h2 className="bg-kuning w-fit text-xl font-semibold px-4">
                  Pembayaran :
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="col-span-1 grid justify-items-center text-center">
                    <img
                      src="./images/bankBri.png"
                      alt="bank bri"
                      className="h-32 p-3"
                    />
                    <p>
                      No.Rek : <br />
                      <span className="font-semibold">0824 0102 3057 509</span>
                    </p>
                    <p>
                      atas nama : <br />{" "}
                      <span className="font-semibold">
                        Vega Anggara Saputra
                      </span>
                    </p>
                  </div>
                  <div className="col-span-1 grid justify-items-center text-center">
                    <img src="./images/dana.jpg" alt="dana" className="h-32" />
                    <p>
                      No. Hp : <br />
                      <span className="font-semibold">08990656996</span>
                    </p>
                    <p>
                      atas nama : <br />
                      <span className="font-semibold">
                        Vega Anggara Saputra
                      </span>
                    </p>
                  </div>
                  <div className="col-span-1 grid justify-items-center text-center">
                    <img
                      src="./images/shoopePay.png"
                      alt="shopepay"
                      className="h-32 p-5"
                    />
                    <p>
                      No. Hp : <br />
                      <span className="font-semibold">08990656996</span>
                    </p>
                    <p>
                      atas nama : <br />
                      <span className="font-semibold">
                        Vega Anggara Saputra
                      </span>
                    </p>
                  </div>
                </div>

                {/* NOTEEEE */}
                <h1 className="text-2xl font-semibold bg-kuning w-fit px-1 italic text-center">
                  NOTE!!! GARIS KERAS
                </h1>
                <ul className="list-disc ml-10">
                  <li>
                    Uang yang sudah ditransfer tidak dapat direfund kembali,
                    demi kesehatan jiwa dan raga.
                  </li>
                  <li>
                    Pengiriman disarankan menggunakan email jika order via
                    social media & pengerjaan vector bisa dilakukan setiap hari.
                    tapi minimal 2-3 hari. Karena ini dibuat sepenuhnya manual
                    untuk hasil yang autentik!
                  </li>
                  <li>Promo banyak untuk kamu yang berlangganan :*</li>
                </ul>
              </div>

              <p>
                Oke kayanya udah jelas semua ya, yaudah lah{" "}
                <span className="font-semibold italic bg-kuning px-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    className="text-third hover:text-primary"
                  >
                    Yuk Order Sekarang!
                  </a>
                </span>
              </p>
            </div>
            <div className="w-full">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
