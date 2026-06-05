const promptBanks = {
  word: [
    'Keberanian', 'Kegagalan', 'Disiplin', 'Waktu', 'Kesepian',
    'Ambisi', 'Kebiasaan', 'Teknologi', 'Kejujuran', 'Kreativitas',
    'Tekanan', 'Mimpi', 'Keluarga', 'Uang', 'Kampus',
    'Masa depan', 'Komunikasi', 'Kesempatan', 'Perubahan', 'Percaya diri',
    'Tanggung jawab', 'Ketenangan', 'Pilihan', 'Risiko', 'Harapan',    "Keberanian",
    "Kegagalan",
    "Waktu",
    "Kesempatan",
    "Disiplin",
    "Kepercayaan",
    "Perubahan",
    "Impian",
    "Kebiasaan",
    "Tanggung jawab",
    "Komunikasi",
    "Teknologi",
    "Pendidikan",
    "Kepemimpinan",
    "Kejujuran",
    "Kreativitas",
    "Konsistensi",
    "Kesabaran",
    "Fokus",
    "Produktivitas",
    "Keluarga",
    "Persahabatan",
    "Masa depan",
    "Uang",
    "Karier",
    "Kesehatan",
    "Mentalitas",
    "Keputusan",
    "Prioritas",
    "Motivasi",
    "Kepercayaan diri",
    "Kritik",
    "Kebebasan",
    "Keadilan",
    "Pengalaman",
    "Perjuangan",
    "Harapan",
    "Rasa takut",
    "Kenyamanan",
    "Ambisi",
    "Kegigihan",
    "Kesalahan",
    "Belajar",
    "Adaptasi",
    "Inovasi",
    "Empati",
    "Integritas",
    "Kolaborasi",
    "Persaingan",
    "Kesederhanaan",
    "Keberuntungan",
    "Pilihan",
    "Komitmen",
    "Kemandirian",
    "Kedisiplinan",
    "Rencana",
    "Strategi",
    "Masalah",
    "Solusi",
    "Kesuksesan",
    "Kegelisahan",
    "Perasaan",
    "Logika",
    "Kebijaksanaan",
    "Perjalanan",
    "Lingkungan",
    "Budaya",
    "Media sosial",
    "Privasi",
    "Keamanan",
    "Data",
    "Internet",
    "AI",
    "Bisnis",
    "Pekerjaan",
    "Mahasiswa",
    "Organisasi",
    "Presentasi",
    "Argumentasi",
    "Negosiasi",
    "Kebiasaan buruk",
    "Rasa malas",
    "Tekanan",
    "Ekspektasi",
    "Kemenangan",
    "Kekalahan",
    "Ketenangan",
    "Krisis",
    "Resiko",
    "Kualitas",
    "Kecepatan",
    "Ketelitian",
    "Pengaruh",
    "Reputasi",
    "Kesadaran",
    "Kehilangan",
    "Pertumbuhan",
    "Pengorbanan",
    "Tujuan",
    "Identitas"
  ],
  sentence: [
    'Kenapa manusia sering takut mencoba hal baru?',
    'Apa yang membuat seseorang terlihat percaya diri saat berbicara?',
    'Bagaimana cara mengubah kegagalan menjadi bahan belajar?',
    'Mengapa komunikasi yang baik bisa mengubah hubungan?',
    'Apakah teknologi membuat manusia semakin pintar atau semakin malas?',
    'Apa arti sukses bagi mahasiswa zaman sekarang?',
    'Bagaimana cara tetap tenang ketika semua orang memperhatikan kita?',
    'Mengapa kebiasaan kecil bisa menentukan masa depan?',
    'Apa pelajaran terbesar dari pengalaman memalukan?',
    'Bagaimana cara menjelaskan ide rumit dengan bahasa sederhana?',
    'Kenapa orang yang pintar belum tentu mudah dipercaya?',
    'Apa bedanya sibuk dan produktif?',
    'Mengapa banyak orang punya rencana besar tapi sulit memulai?',
    'Bagaimana cara menghadapi kritik tanpa merasa hancur?',
    'Kenapa kemampuan mendengar sama pentingnya dengan kemampuan bicara?',
    'Apa yang membuat sebuah presentasi terasa membosankan?',
    'Mengapa rasa takut sering lebih besar daripada masalah sebenarnya?',
    'Bagaimana cara membangun keberanian dari hal kecil?',
    'Apa dampak lingkungan terhadap cara seseorang berpikir?',
    'Kenapa konsistensi lebih sulit daripada motivasi?',
    'Bagaimana cara membuat orang tertarik pada ide sederhana?',
    'Apa yang harus dilakukan ketika lupa materi saat berbicara?',
    'Mengapa bahasa tubuh bisa mengubah pesan yang disampaikan?',
    'Bagaimana cara menyampaikan pendapat tanpa terlihat menyerang?',
    'Apa arti menjadi dewasa dalam mengambil keputusan?',
        "Mengapa public speaking penting untuk masa depan seseorang?",
    "Apa yang membuat seseorang terlihat percaya diri saat berbicara?",
    "Bagaimana cara mengatasi gugup sebelum presentasi?",
    "Ceritakan pendapatmu tentang pentingnya komunikasi di dunia kerja.",
    "Mengapa banyak orang takut berbicara di depan umum?",
    "Bagaimana teknologi mengubah cara manusia berkomunikasi?",
    "Apa dampak media sosial terhadap cara kita menyampaikan pendapat?",
    "Mengapa kemampuan menjelaskan ide itu penting?",
    "Bagaimana cara membuat audiens tertarik sejak awal pembicaraan?",
    "Apa perbedaan berbicara untuk meyakinkan dan berbicara untuk menjelaskan?",
    "Mengapa mendengarkan sama pentingnya dengan berbicara?",
    "Bagaimana cara menyampaikan kritik tanpa menyakiti orang lain?",
    "Apa yang membuat sebuah presentasi terasa membosankan?",
    "Bagaimana cara membuat topik sederhana menjadi menarik?",
    "Mengapa storytelling efektif dalam public speaking?",
    "Apa pentingnya bahasa tubuh saat berbicara?",
    "Bagaimana ekspresi wajah memengaruhi pesan yang disampaikan?",
    "Mengapa kontak mata penting saat berbicara di depan orang?",
    "Bagaimana cara berbicara agar terdengar lebih meyakinkan?",
    "Apa yang harus dilakukan ketika lupa materi saat presentasi?",
    "Mengapa latihan berbicara perlu dilakukan secara rutin?",
    "Bagaimana cara mengatur tempo bicara yang baik?",
    "Apa yang membuat seseorang mudah dipahami saat berbicara?",
    "Mengapa pembukaan presentasi sangat menentukan perhatian audiens?",
    "Bagaimana cara menutup presentasi dengan kuat?",
    "Apa peran humor dalam public speaking?",
    "Bagaimana cara menghadapi audiens yang tidak memperhatikan?",
    "Mengapa suara yang jelas penting dalam berbicara?",
    "Bagaimana cara menjelaskan ide rumit dengan sederhana?",
    "Apa pentingnya struktur dalam sebuah pidato?",
    "Mengapa contoh nyata membuat penjelasan lebih mudah diterima?",
    "Bagaimana cara membangun koneksi dengan audiens?",
    "Apa yang membedakan pembicara biasa dan pembicara hebat?",
    "Mengapa kejujuran penting saat menyampaikan pendapat?",
    "Bagaimana cara berbicara saat tidak sepenuhnya yakin?",
    "Apa dampak rasa percaya diri terhadap kualitas komunikasi?",
    "Mengapa seseorang harus memahami audiens sebelum berbicara?",
    "Bagaimana cara menyesuaikan gaya bicara dengan situasi?",
    "Apa yang harus dihindari saat berbicara di depan umum?",
    "Mengapa persiapan materi penting sebelum presentasi?",
    "Bagaimana cara menjawab pertanyaan sulit dari audiens?",
    "Apa manfaat public speaking bagi mahasiswa?",
    "Mengapa kemampuan berbicara bisa membuka peluang karier?",
    "Bagaimana cara membuat argumen terdengar kuat?",
    "Apa hubungan antara berpikir kritis dan public speaking?",
    "Mengapa public speaking bukan hanya tentang berbicara lancar?",
    "Bagaimana cara menyampaikan ide tanpa terlihat memaksa?",
    "Apa yang membuat pesan seseorang mudah diingat?",
    "Mengapa pembicara perlu memahami emosi audiens?",
    "Bagaimana cara menjaga energi saat berbicara lama?",
    "Apa pentingnya jeda dalam berbicara?",
    "Mengapa diam sejenak bisa membuat pesan lebih kuat?",
    "Bagaimana cara berbicara dalam diskusi kelompok?",
    "Apa yang harus dilakukan ketika pendapat kita ditolak?",
    "Mengapa keberanian menyampaikan pendapat perlu dilatih?",
    "Bagaimana cara berbicara dengan sopan namun tegas?",
    "Apa perbedaan percaya diri dan sombong saat berbicara?",
    "Mengapa pembicara harus punya tujuan yang jelas?",
    "Bagaimana cara membuat audiens merasa dilibatkan?",
    "Apa pentingnya pertanyaan retoris dalam presentasi?",
    "Mengapa visual slide tidak boleh terlalu penuh?",
    "Bagaimana cara menjelaskan data kepada orang awam?",
    "Apa yang membuat sebuah pidato terasa inspiratif?",
    "Mengapa pembicara perlu menguasai topik sebelum tampil?",
    "Bagaimana cara tetap tenang saat terjadi kesalahan teknis?",
    "Apa pentingnya latihan spontan dalam public speaking?",
    "Mengapa public speaking melatih cara berpikir?",
    "Bagaimana cara menyampaikan opini yang berbeda dengan aman?",
    "Apa dampak pilihan kata terhadap persepsi audiens?",
    "Mengapa kalimat sederhana sering lebih kuat daripada kalimat rumit?",
    "Bagaimana cara berbicara agar tidak terdengar kaku?",
    "Apa pentingnya pengalaman pribadi dalam sebuah pembicaraan?",
    "Mengapa pembicara perlu tahu kapan harus berhenti?",
    "Bagaimana cara membuka diskusi yang menarik?",
    "Apa yang membuat seseorang terlihat profesional saat berbicara?",
    "Mengapa public speaking bisa meningkatkan leadership?",
    "Bagaimana cara memimpin rapat dengan komunikasi yang baik?",
    "Apa peran intonasi dalam menyampaikan pesan?",
    "Mengapa public speaking membantu seseorang berpikir lebih teratur?",
    "Bagaimana cara mengubah rasa takut menjadi energi positif?",
    "Apa pentingnya latihan berbicara tanpa membaca teks?",
    "Mengapa pembicara harus bisa membaca suasana ruangan?",
    "Bagaimana cara berbicara di depan orang yang lebih ahli?",
    "Apa yang membuat sebuah penjelasan terasa meyakinkan?",
    "Mengapa pembicara perlu memiliki empati?",
    "Bagaimana cara menyampaikan pesan singkat tetapi berdampak?",
    "Apa pentingnya konsistensi dalam melatih public speaking?",
    "Mengapa kemampuan bertanya juga bagian dari komunikasi?",
    "Bagaimana cara menyampaikan pendapat dalam forum resmi?",
    "Apa yang membuat audiens percaya kepada pembicara?",
    "Mengapa berbicara pelan kadang lebih efektif?",
    "Bagaimana cara menghadapi kritik setelah presentasi?",
    "Apa manfaat merekam diri saat latihan berbicara?",
    "Mengapa public speaking membutuhkan keberanian untuk gagal?",
    "Bagaimana cara membuat latihan public speaking terasa menyenangkan?",
    "Apa perbedaan pidato, presentasi, dan diskusi?",
    "Mengapa pembicara tidak harus sempurna?",
    "Bagaimana cara menjadi pembicara yang lebih natural?",
    "Apa hubungan antara pengetahuan dan kepercayaan diri?",
    "Mengapa public speaking adalah skill yang bisa dilatih?"
  ],
  deep: [
    'Jika semua orang punya kesempatan yang sama, apakah hasil hidup akan sama?',
    'Apakah keberanian berarti tidak takut, atau tetap berjalan walau takut?',
    'Mengapa manusia lebih mudah mengingat luka daripada pujian?',
    'Apakah menjadi pintar cukup untuk bertahan di dunia kerja?',
    'Bagaimana cara membedakan ambisi sehat dan ambisi yang merusak?',
    'Apa yang terjadi jika manusia tidak pernah merasa gagal?',
    'Apakah diam selalu berarti lemah?',
    'Mengapa validasi dari orang lain terasa sangat penting?',
    'Apakah kebebasan tanpa tanggung jawab tetap bisa disebut kebebasan?',
    'Mengapa manusia sering membandingkan prosesnya dengan hasil orang lain?',
    'Apakah semua kebenaran harus disampaikan secara langsung?',
    'Apa hubungan antara rasa sakit dan kedewasaan?',
    'Mengapa orang bisa merasa sendiri meskipun dikelilingi banyak orang?',
    'Apakah kesuksesan tanpa ketenangan tetap layak dikejar?',
    'Bagaimana cara tahu bahwa kita sedang berkembang?',
    'Apakah kegagalan selalu mengajarkan sesuatu?',
    'Mengapa manusia sering menunda hal yang sebenarnya penting?',
    'Apakah percaya diri bisa dilatih seperti otot?',
    'Apa batas antara menerima keadaan dan menyerah?',
    'Mengapa sebagian orang takut terlihat bodoh saat belajar?',
    'Apakah tujuan hidup harus selalu besar?',
    'Bagaimana cara tetap jujur saat keadaan menekan?',
    'Mengapa keputusan kecil bisa mengubah arah hidup?',
    'Apakah manusia lebih butuh kepastian atau keberanian?',
    'Apa yang membuat seseorang benar-benar dihormati?',
       "Apakah kesuksesan lebih banyak ditentukan oleh kerja keras atau keberuntungan?",
    "Apakah manusia benar-benar bebas dalam menentukan pilihan hidupnya?",
    "Mengapa orang sering takut gagal padahal kegagalan bisa menjadi pelajaran?",
    "Apakah pendidikan saat ini benar-benar mempersiapkan manusia untuk kehidupan nyata?",
    "Apa arti menjadi dewasa menurut pandanganmu?",
    "Apakah teknologi membuat manusia lebih pintar atau lebih bergantung?",
    "Mengapa banyak orang mengejar validasi dari orang lain?",
    "Apakah hidup yang tenang lebih baik daripada hidup yang ambisius?",
    "Mengapa manusia sering membandingkan dirinya dengan orang lain?",
    "Apakah semua orang punya definisi sukses yang berbeda?",
    "Apa yang membuat seseorang tetap bertahan saat hidup terasa berat?",
    "Mengapa perubahan sering terasa menakutkan?",
    "Apakah rasa takut selalu buruk?",
    "Apa perbedaan antara menyerah dan tahu kapan harus berhenti?",
    "Mengapa kejujuran kadang terasa sulit dilakukan?",
    "Apakah manusia lebih sering dikendalikan oleh logika atau perasaan?",
    "Mengapa masa lalu sulit dilupakan oleh sebagian orang?",
    "Apa arti kebahagiaan yang realistis?",
    "Apakah uang bisa membeli kebahagiaan?",
    "Mengapa manusia ingin dihargai?",
    "Apa hubungan antara kesepian dan perkembangan diri?",
    "Apakah semua pengalaman buruk pasti punya makna?",
    "Mengapa manusia sering sadar pentingnya sesuatu setelah kehilangan?",
    "Apakah menjadi berbeda itu kelebihan atau beban?",
    "Apa arti mencintai diri sendiri tanpa menjadi egois?",
    "Mengapa manusia sering menunda hal penting?",
    "Apakah penyesalan selalu datang dari keputusan yang salah?",
    "Mengapa orang sulit menerima kritik?",
    "Apa arti menjadi kuat secara mental?",
    "Apakah kesabaran selalu berarti menunggu?",
    "Mengapa manusia sering takut dinilai?",
    "Apakah diam selalu berarti lemah?",
    "Apa yang membuat seseorang layak dipercaya?",
    "Mengapa kepercayaan sulit dibangun tetapi mudah hancur?",
    "Apakah seseorang bisa berubah sepenuhnya?",
    "Apa arti menjadi pribadi yang bertanggung jawab?",
    "Mengapa manusia membutuhkan tujuan hidup?",
    "Apakah hidup tanpa tujuan selalu buruk?",
    "Apa perbedaan antara ambisi dan keserakahan?",
    "Mengapa banyak orang takut memulai sesuatu?",
    "Apakah perfeksionisme membantu atau menghambat?",
    "Mengapa manusia sering mencari kepastian?",
    "Apakah ketidakpastian bisa menjadi peluang?",
    "Apa arti keberanian dalam kehidupan sehari-hari?",
    "Mengapa menjadi konsisten itu sulit?",
    "Apakah motivasi lebih penting daripada disiplin?",
    "Apa yang membuat seseorang benar-benar berkembang?",
    "Mengapa lingkungan sangat memengaruhi seseorang?",
    "Apakah seseorang bisa sukses sendirian?",
    "Apa arti menjadi bermanfaat bagi orang lain?",
    "Mengapa manusia butuh pengakuan?",
    "Apakah semua orang harus punya mimpi besar?",
    "Apa yang terjadi jika seseorang hidup hanya mengikuti ekspektasi orang lain?",
    "Mengapa memilih jalan sendiri sering terasa berat?",
    "Apakah rasa sakit selalu membuat seseorang lebih kuat?",
    "Apa arti menerima diri sendiri?",
    "Mengapa manusia sering sulit memaafkan?",
    "Apakah memaafkan berarti melupakan?",
    "Apa yang membuat sebuah keputusan terasa benar?",
    "Mengapa orang sering takut keluar dari zona nyaman?",
    "Apakah zona nyaman selalu buruk?",
    "Apa arti produktif yang sehat?",
    "Mengapa istirahat sering dianggap malas?",
    "Apakah sibuk selalu berarti produktif?",
    "Apa perbedaan antara bekerja keras dan menyiksa diri?",
    "Mengapa manusia sering merasa tertinggal?",
    "Apakah hidup harus selalu berkembang?",
    "Apa arti menjadi cukup?",
    "Mengapa manusia sering sulit merasa puas?",
    "Apakah rasa iri bisa menjadi motivasi?",
    "Apa yang membuat seseorang kehilangan semangat?",
    "Mengapa harapan bisa menjadi kekuatan?",
    "Apakah terlalu banyak berpikir bisa merusak tindakan?",
    "Apa hubungan antara pikiran dan keberanian?",
    "Mengapa manusia sering menghindari masalah?",
    "Apakah masalah selalu harus diselesaikan segera?",
    "Apa arti kedewasaan dalam menghadapi konflik?",
    "Mengapa komunikasi sering gagal meskipun niatnya baik?",
    "Apakah niat baik cukup untuk membenarkan tindakan?",
    "Apa yang membuat seseorang benar-benar bijaksana?",
    "Mengapa manusia perlu belajar dari orang lain?",
    "Apakah pengalaman selalu lebih penting daripada teori?",
    "Apa hubungan antara ilmu dan kerendahan hati?",
    "Mengapa orang pintar belum tentu bijak?",
    "Apakah kegagalan akademik menentukan masa depan seseorang?",
    "Apa arti belajar dengan sadar?",
    "Mengapa memahami dasar itu penting?",
    "Apakah cepat paham selalu berarti lebih pintar?",
    "Apa arti menjadi lambat tapi terus berjalan?",
    "Mengapa proses sering lebih penting daripada hasil?",
    "Apakah hasil buruk selalu berarti usaha buruk?",
    "Apa yang membuat seseorang pantas dihormati?",
    "Mengapa karakter lebih penting daripada pencitraan?",
    "Apakah reputasi selalu mencerminkan kenyataan?",
    "Apa bahaya hidup hanya demi terlihat sukses?",
    "Mengapa manusia sering memakai topeng sosial?",
    "Apakah menjadi jujur pada diri sendiri itu mudah?",
    "Apa arti hidup yang bermakna?",
    "Mengapa manusia ingin meninggalkan sesuatu setelah hidupnya?",
    "Apakah waktu adalah hal paling berharga dalam hidup?"
  ],
  fun: [
    'Jelaskan kenapa sendok bisa menjadi simbol perjuangan hidup.',
    'Promosikan batu kerikil seolah-olah itu produk premium.',
    'Jika kucing menjadi dosen, mata kuliah apa yang diajarkan?',
    'Buat argumen serius kenapa tidur siang harus jadi hak asasi mahasiswa.',
    'Jelaskan mie instan sebagai penemuan paling emosional dalam sejarah.',
    'Jika sandal hilang satu, apa makna filosofisnya?',
    'Bela pendapat bahwa charger adalah benda paling setia di dunia.',
    'Jelaskan kenapa tugas selalu muncul saat mental sedang damai.',
    'Yakinkan orang bahwa bantal punya peran besar dalam peradaban manusia.',
    'Jelaskan kenapa nasi goreng bisa menjadi alat diplomasi dunia.',
    'Jika kipas angin bisa bicara, apa nasihat hidup yang akan dia berikan?',
    'Buat pidato motivasi untuk penghapus yang mulai menipis.',
    'Jelaskan kenapa antrean fotokopi adalah ujian kesabaran nasional.',
    'Jika laptop ngelag adalah karakter anime, seperti apa sifatnya?',
    'Promosikan air putih sebagai minuman paling underrated di galaksi.',
    'Bela pendapat bahwa kaus kaki hilang karena punya misi rahasia.',
    'Jelaskan kenapa alarm pagi sering terasa seperti musuh pribadi.',
    'Jika meja belajar bisa menilai pemiliknya, apa komentarnya?',
    'Buat argumen bahwa jas hujan adalah superhero tanpa cape.',
    'Jelaskan kenapa remote TV selalu hilang saat paling dibutuhkan.',
    'Jika nasi padang menjadi mata kuliah, apa silabusnya?',
    'Yakinkan investor untuk mendanai startup penemu pulpen hilang.',
    'Jelaskan filosofi hidup dari baterai 1 persen.',
    'Buat pembelaan resmi untuk orang yang membuka kulkas tanpa tujuan.',
    'Jika kalender bisa protes, apa yang dia keluhkan?',
    "Jika kucing bisa menjadi presiden, aturan pertama apa yang akan dibuat?",
    "Jelaskan kenapa sandal bisa hilang sebelah seperti sedang menjalani misi rahasia.",
    "Buat pidato serius tentang pentingnya nasi goreng dalam peradaban manusia.",
    "Jika galon bisa bicara, apa keluhan terbesarnya?",
    "Promosikan batu kerikil seolah-olah itu produk teknologi premium.",
    "Jelaskan kenapa kipas angin adalah sahabat sejati manusia.",
    "Jika sendok dan garpu berdebat, siapa yang akan menang?",
    "Buat teori konspirasi lucu tentang kaus kaki yang hilang.",
    "Jelaskan kenapa tidur siang harus masuk kurikulum nasional.",
    "Promosikan udara segar seolah-olah itu layanan berlangganan.",
    "Jika ayam bisa kuliah, jurusan apa yang paling cocok?",
    "Buat pidato motivasi untuk orang yang gagal membuka tutup botol.",
    "Jelaskan kenapa charger HP sering menghilang saat dibutuhkan.",
    "Jika tembok bisa mendengar, rahasia apa yang paling sering ia tahu?",
    "Buat argumen ilmiah palsu tentang kenapa mie instan terasa lebih enak malam hari.",
    "Jelaskan kenapa remote TV sering punya kehendak sendiri.",
    "Jika nasi padang menjadi mata uang dunia, apa dampaknya?",
    "Buat presentasi tentang bahaya terlalu percaya pada alarm pagi.",
    "Jelaskan kenapa kursi plastik punya suara paling dramatis.",
    "Jika hujan turun dalam bentuk es teh, apa yang terjadi pada masyarakat?",
    "Promosikan pulpen yang tintanya habis sebagai barang koleksi langka.",
    "Jelaskan kenapa meja belajar sering menjadi tempat menumpuk barang.",
    "Jika semut punya kerajaan digital, bagaimana sistem pemerintahannya?",
    "Buat pidato tentang perjuangan tisu yang selalu diremehkan.",
    "Jelaskan kenapa manusia butuh tombol skip untuk hari Senin.",
    "Jika laptop bisa curhat, apa masalah hidupnya?",
    "Buat iklan parfum aroma warung bakso.",
    "Jelaskan kenapa bantal adalah psikolog paling setia.",
    "Jika bulan punya akun media sosial, konten apa yang ia upload?",
    "Buat pidato pembelaan untuk orang yang makan bubur tidak diaduk.",
    "Jelaskan kenapa kabel earphone dulu selalu kusut seperti masalah hidup.",
    "Jika nasi uduk ikut debat capres, apa visi misinya?",
    "Buat teori kenapa WiFi melemah saat kita paling butuh.",
    "Jelaskan kenapa cicak adalah ninja rumah tangga.",
    "Promosikan sendal jepit sebagai inovasi fashion masa depan.",
    "Jika pintu bisa menilai manusia, siapa yang paling sering membuatnya kesal?",
    "Buat pidato nasional tentang pentingnya gorengan sore hari.",
    "Jelaskan kenapa suara motor lewat tengah malam terasa lebih keras.",
    "Jika awan bisa resign, apa alasannya?",
    "Buat presentasi tentang evolusi kantong plastik di rumah.",
    "Jelaskan kenapa antrean sebelah selalu terlihat lebih cepat.",
    "Jika nasi kuning menjadi superhero, apa kekuatannya?",
    "Buat promosi serius untuk jasa memeluk guling profesional.",
    "Jelaskan kenapa kulkas adalah tempat harapan palsu.",
    "Jika lampu merah bisa bicara, apa nasihatnya untuk manusia?",
    "Buat pidato tentang penderitaan es batu di minuman panas.",
    "Jelaskan kenapa chat 'wkwk' punya banyak makna tersembunyi.",
    "Jika jam dinding bosan bekerja, apa yang akan ia lakukan?",
    "Promosikan payung bocor sebagai alat meditasi hujan.",
    "Jelaskan kenapa mie ayam bisa menyatukan bangsa.",
    "Jika kecoa masuk organisasi, jabatan apa yang paling cocok?",
    "Buat argumen bahwa rebahan adalah olahraga mental.",
    "Jelaskan kenapa suara notifikasi bisa mengubah suasana hati.",
    "Jika keyboard punya perasaan, tombol mana yang paling capek?",
    "Buat pidato untuk membela orang yang suka ngomong 'bentar lagi'.",
    "Jelaskan kenapa parkiran kosong tiba-tiba penuh saat kita datang.",
    "Jika sendok jatuh bisa membawa pesan, apa artinya?",
    "Buat teori lucu tentang kenapa printer suka error saat deadline.",
    "Jelaskan kenapa nasi sisa semalam bisa jadi nasi goreng legendaris.",
    "Jika tas sekolah bisa protes, apa tuntutannya?",
    "Promosikan air putih sebagai minuman elite.",
    "Jelaskan kenapa manusia tetap membuka kulkas walau tahu isinya sama.",
    "Jika pohon bisa menulis diary, apa yang ia tulis?",
    "Buat pidato tentang hak-hak kursi yang sering diduduki sembarangan.",
    "Jelaskan kenapa tukang bakso keliling punya aura misterius.",
    "Jika kalender bisa menghapus satu hari, hari apa yang akan dihapus?",
    "Buat presentasi tentang strategi bertahan hidup saat baterai 1%.",
    "Jelaskan kenapa suara sendok jatuh bisa membuat semua orang menoleh.",
    "Jika nasi putih punya branding, slogan apa yang cocok?",
    "Buat pembelaan untuk alarm yang selalu dimatikan.",
    "Jelaskan kenapa orang lapar lebih mudah emosi.",
    "Jika helm bisa bicara, apa komentarnya tentang rambut manusia?",
    "Promosikan batu bata sebagai smartphone generasi baru.",
    "Jelaskan kenapa tugas selalu terasa muncul bersamaan.",
    "Jika spidol papan tulis punya mimpi, apa mimpinya?",
    "Buat pidato tentang tragedi lupa password.",
    "Jelaskan kenapa sinyal hilang saat kita ingin terlihat keren.",
    "Jika ayam geprek punya filosofi hidup, apa pesannya?",
    "Promosikan kantong kresek premium dengan fitur anti-gengsi.",
    "Jelaskan kenapa manusia sering bilang 'mulai besok'.",
    "Jika sandal hotel bisa kabur, ke mana ia pergi?",
    "Buat pidato tentang penderitaan charger yang dipinjam tapi tidak kembali.",
    "Jelaskan kenapa nasi bungkus terasa lebih enak saat lapar berat.",
    "Jika ember punya cita-cita, ingin menjadi apa?",
    "Buat presentasi tentang ekonomi global dari sudut pandang tukang cilok.",
    "Jelaskan kenapa kucing selalu terlihat seperti pemilik rumah.",
    "Jika kasur bisa memberi nilai, berapa nilai kedisiplinan manusia?",
    "Promosikan debu sebagai dekorasi rumah alami.",
    "Jelaskan kenapa orang tiba-tiba bijak setelah tengah malam.",
    "Jika suara perut lapar bisa diterjemahkan, apa artinya?",
    "Buat pidato tentang pentingnya menyelamatkan gorengan terakhir.",
    "Jelaskan kenapa jalan kaki ke warung terasa jauh saat malas.",
    "Jika botol minum punya status WhatsApp, apa isinya?",
    "Promosikan nasi kucing sebagai solusi ekonomi dunia.",
    "Jelaskan kenapa ide bagus sering muncul saat mandi.",
    "Jika kipas angin dan AC debat, siapa yang lebih berjasa?",
    "Buat pidato serius tentang seni mencari colokan di tempat umum.",
    "Jelaskan kenapa manusia merasa kaya setelah baru isi saldo e-wallet.",
    "Jika kalender akademik punya perasaan, apa yang ia rasakan?",
    "Buat closing speech untuk acara perpisahan antara manusia dan deadline."
  ]
};

const hints = [
  'Pakai pola: pembuka → alasan → contoh → penutup.',
  'Mulai dengan kalimat sederhana: “Menurut saya, topik ini penting karena...”',
  'Jangan mengejar sempurna. Kejar tetap bicara sampai timer habis.',
  'Gunakan contoh pribadi agar pembicaraan terasa hidup.',
  'Kalau blank, ulangi topik lalu jelaskan dari sudut pandang lain.',
  'Pakai 3 poin: definisi, dampak, solusi.',
  'Bayangkan kamu sedang menjelaskan ke teman, bukan sedang diuji.'
];

const modeSelect = document.getElementById('modeSelect');
const durationSelect = document.getElementById('durationSelect');
const roundSelect = document.getElementById('roundSelect');
const customTopics = document.getElementById('customTopics');
const startBtn = document.getElementById('startBtn');
const heroStartBtn = document.getElementById('heroStartBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const timeText = document.getElementById('timeText');
const promptText = document.getElementById('promptText');
const promptCard = document.getElementById('promptCard');
const roundTitle = document.getElementById('roundTitle');
const currentRound = document.getElementById('currentRound');
const totalRounds = document.getElementById('totalRounds');
const finishedCount = document.getElementById('finishedCount');
const totalTime = document.getElementById('totalTime');
const historyList = document.getElementById('historyList');
const ringProgress = document.getElementById('ringProgress');
const speakingHint = document.getElementById('speakingHint');
const previewSeconds = document.getElementById('previewSeconds');
const previewMode = document.getElementById('previewMode');
const previewRounds = document.getElementById('previewRounds');
const toast = document.getElementById('toast');

let timer = null;
let isRunning = false;
let isPaused = false;
let remainingSeconds = Number(durationSelect.value);
let initialSeconds = Number(durationSelect.value);
let currentRoundNumber = 0;
let maxRounds = Number(roundSelect.value);
let completedRounds = 0;
let usedPrompts = [];
let sessionDeck = [];

const CIRCLE_LENGTH = 603;

function getAllPrompts() {
  const custom = customTopics.value
    .split('\n')
    .map(topic => topic.trim())
    .filter(Boolean);

  if (custom.length > 0) return custom;

  const selectedMode = modeSelect.value;
  if (selectedMode === 'mix') {
    return [
      ...promptBanks.word,
      ...promptBanks.sentence,
      ...promptBanks.deep,
      ...promptBanks.fun
    ];
  }

  return promptBanks[selectedMode] || promptBanks.word;
}

function getRandomIndex(max) {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  return Math.floor(Math.random() * max);
}

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = getRandomIndex(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function createFreshDeck() {
  const prompts = getAllPrompts();
  sessionDeck = shuffleArray(prompts);
}

function pickPrompt() {
  const prompts = getAllPrompts();

  if (sessionDeck.length === 0) {
    createFreshDeck();
  }

  let chosen = sessionDeck.pop();

  if (usedPrompts.length > 0 && prompts.length > 1) {
    let guard = 0;
    while (chosen === usedPrompts[usedPrompts.length - 1] && guard < 5) {
      sessionDeck.unshift(chosen);
      if (sessionDeck.length === 0) createFreshDeck();
      chosen = sessionDeck.pop();
      guard += 1;
    }
  }

  usedPrompts.push(chosen);
  return chosen;
}

function updatePreview() {
  previewSeconds.textContent = durationSelect.value;
  previewRounds.textContent = `${roundSelect.value} rounds`;
  totalRounds.textContent = roundSelect.value;

  const label = modeSelect.options[modeSelect.selectedIndex].textContent;
  previewMode.textContent = label;

  if (!isRunning) {
    initialSeconds = Number(durationSelect.value);
    remainingSeconds = initialSeconds;
    maxRounds = Number(roundSelect.value);
    timeText.textContent = remainingSeconds;
    updateRing();
  }
}

function updateRing() {
  const progress = remainingSeconds / initialSeconds;
  const offset = CIRCLE_LENGTH - (CIRCLE_LENGTH * progress);
  ringProgress.style.strokeDashoffset = offset;
}

function updateHistory(prompt) {
  if (historyList.querySelector('.empty-state')) {
    historyList.innerHTML = '';
  }

  const li = document.createElement('li');
  li.textContent = `${currentRoundNumber}. ${prompt}`;
  historyList.prepend(li);
}

function updateStats() {
  finishedCount.textContent = completedRounds;
  const seconds = completedRounds * initialSeconds;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  totalTime.textContent = minutes > 0 ? `${minutes}m ${rest}s` : `${rest}s`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function startRound() {
  if (currentRoundNumber >= maxRounds) {
    finishSession();
    return;
  }

  currentRoundNumber += 1;
  remainingSeconds = initialSeconds;
  const prompt = pickPrompt();

  promptText.textContent = prompt;
  roundTitle.textContent = `Ronde ${currentRoundNumber}`;
  currentRound.textContent = currentRoundNumber;
  speakingHint.textContent = hints[Math.floor(Math.random() * hints.length)];
  timeText.textContent = remainingSeconds;
  updateRing();
  updateHistory(prompt);

  promptCard.classList.remove('pulse');
  void promptCard.offsetWidth;
  promptCard.classList.add('pulse');

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  isRunning = true;
  isPaused = false;

  startBtn.disabled = true;
  pauseBtn.disabled = false;
  nextBtn.disabled = false;
  pauseBtn.textContent = 'Pause';

  timer = setInterval(() => {
    remainingSeconds -= 1;
    timeText.textContent = remainingSeconds;
    updateRing();

    if (remainingSeconds <= 0) {
      completedRounds += 1;
      updateStats();
      clearInterval(timer);

      if (currentRoundNumber >= maxRounds) {
        finishSession();
      } else {
        showToast('Waktu habis. Lanjut ke topik berikutnya!');
        setTimeout(startRound, 850);
      }
    }
  }, 1000);
}

function startSession() {
  clearInterval(timer);
  isRunning = true;
  isPaused = false;
  initialSeconds = Number(durationSelect.value);
  maxRounds = Number(roundSelect.value);
  remainingSeconds = initialSeconds;
  currentRoundNumber = 0;
  completedRounds = 0;
  usedPrompts = [];
  createFreshDeck();
  historyList.innerHTML = '<li class="empty-state">Belum ada topik.</li>';
  updateStats();
  startRound();
}

function pauseSession() {
  if (!isRunning) return;

  if (!isPaused) {
    clearInterval(timer);
    isPaused = true;
    pauseBtn.textContent = 'Resume';
    showToast('Sesi dijeda. Tarik napas dulu.');
  } else {
    isPaused = false;
    pauseBtn.textContent = 'Pause';
    startTimer();
  }
}

function nextRound() {
  if (!isRunning) return;

  completedRounds += 1;
  updateStats();
  clearInterval(timer);

  if (currentRoundNumber >= maxRounds) {
    finishSession();
  } else {
    startRound();
  }
}

function finishSession() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  nextBtn.disabled = true;
  pauseBtn.textContent = 'Pause';
  roundTitle.textContent = 'Sesi selesai';
  promptText.textContent = 'Mantap. Kamu sudah menyelesaikan sesi latihan hari ini.';
  showToast('Sesi selesai. Good job!');
}

function resetSession() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  remainingSeconds = Number(durationSelect.value);
  initialSeconds = remainingSeconds;
  currentRoundNumber = 0;
  completedRounds = 0;
  usedPrompts = [];
  sessionDeck = [];

  timeText.textContent = remainingSeconds;
  promptText.textContent = 'Tekan Start untuk mendapatkan topik pertama.';
  roundTitle.textContent = 'Belum dimulai';
  currentRound.textContent = '0';
  historyList.innerHTML = '<li class="empty-state">Belum ada topik.</li>';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  nextBtn.disabled = true;
  pauseBtn.textContent = 'Pause';
  updateRing();
  updateStats();
}

function shufflePromptOnly() {
  createFreshDeck();
  const prompt = pickPrompt();
  promptText.textContent = prompt;
  roundTitle.textContent = 'Preview topik';
  speakingHint.textContent = hints[Math.floor(Math.random() * hints.length)];
  promptCard.classList.remove('pulse');
  void promptCard.offsetWidth;
  promptCard.classList.add('pulse');
}

[startBtn, heroStartBtn].forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('trainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(startSession, 250);
  });
});

pauseBtn.addEventListener('click', pauseSession);
nextBtn.addEventListener('click', nextRound);
resetBtn.addEventListener('click', resetSession);
shuffleBtn.addEventListener('click', shufflePromptOnly);

[modeSelect, durationSelect, roundSelect].forEach(input => {
  input.addEventListener('change', updatePreview);
});

customTopics.addEventListener('input', () => {
  if (!isRunning) {
    usedPrompts = [];
    sessionDeck = [];
  }
});

updatePreview();
updateRing();
