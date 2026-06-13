const promptBanks = {
word: [
"Persahabatan","Keluarga","Liburan","Sekolah","Kuliah","Kerja","Hobi","Musik",
"Makanan","Belanja","Rutinitas","Pagi hari","Malam hari","Kopi","Teh",
"Olahraga","Kesehatan","Tidur","Impian","Kenangan","Teknologi","Internet",
"Media sosial","Belajar","Mengajar","Motivasi","Disiplin","Kebiasaan",
"Kesabaran","Perubahan","Keberanian","Kesuksesan","Kegagalan","Bahagia",
"Produktif","Istirahat","Rumah","Tetangga","Perjalanan","Kemacetan",
"Tradisi","Budaya","Hujan","Matahari","Ulang tahun","Hadiah","Menabung",
"Pengalaman","Kebersihan","Hewan","Film","Drama","Buku","Game","Masa depan",
"Komunikasi","Kejujuran","Percaya diri","Pekerjaan impian","Bisnis",
"Memasak","Momen memalukan","Hari libur","Tanggung jawab","Kebiasaan buruk",
"Kebiasaan baik","Belanja online","Transportasi","Perubahan hidup",
"Kebersamaan","Masa kecil","Pendidikan","Mencoba hal baru","Kesempatan",
"Rasa takut","Pengorbanan","Waktu","Kesederhanaan","Tetap semangat",
"Perhatian","Harapan","Memaafkan","Belajar dari salah","Bekerja sama",
"Komunitas","Cuaca","Masa sekolah","Rutinitas pagi","Weekend","Kebahagiaan",
"Keputusan","Kreativitas","Impulsif","Makanan favorit","Rasa syukur",
"Komitmen","Perjalanan hidup","Rumah impian","Hal kecil"
],

sentence: [
"Ceritakan kegiatan favoritmu saat akhir pekan.",
"Jika punya satu hari bebas, apa yang akan dilakukan?",
"Bagaimana cara menjaga semangat saat lelah?",
"Apa arti rumah bagimu?",
"Ceritakan pengalaman paling berkesan tahun ini.",
"Apa kebiasaan yang ingin kamu ubah?",
"Jika bisa belajar keterampilan baru, pilih apa?",
"Apa makanan yang paling membuat nyaman?",
"Ceritakan seseorang yang menginspirasimu.",
"Bagaimana cara menghadapi hari buruk?",
"Apa manfaat teknologi dalam kehidupan?",
"Lebih suka merencanakan atau spontan?",
"Bagaimana cara menjaga hubungan pertemanan?",
"Apa arti sukses menurutmu?",
"Ceritakan pengalaman mencoba hal baru.",
"Apa yang membuat seseorang dipercaya?",
"Bagaimana menghadapi rasa gugup?",
"Apa hal kecil yang membuat bahagia?",
"Ceritakan momen yang membuat tertawa.",
"Apa tantangan terbesar menjadi dewasa?",
"Bagaimana menjaga kesehatan sehari-hari?",
"Apa pentingnya komunikasi?",
"Jika bisa kembali ke masa lalu, apa yang diubah?",
"Ceritakan tempat favoritmu.",
"Bagaimana mengatur waktu dengan baik?",
"Apa arti kerja keras?",
"Apa kebiasaan baik yang ingin dibangun?",
"Ceritakan kenangan masa kecil.",
"Apa perbedaan hidup sekarang dan dulu?",
"Bagaimana menjaga konsistensi?",
"Apa arti keluarga untukmu?",
"Apa manfaat membaca buku?",
"Bagaimana cara menghadapi kritik?",
"Apa yang membuat seseorang menarik diajak bicara?",
"Ceritakan pengalaman belajar paling unik.",
"Apa yang ingin dilakukan tahun ini?",
"Apa arti nyaman?",
"Ceritakan hari paling produktifmu.",
"Apa manfaat olahraga?",
"Bagaimana cara menjaga hubungan keluarga?",
"Apa yang membuat hidup lebih sederhana?",
"Bagaimana memilih prioritas?",
"Apa arti bersyukur?",
"Ceritakan pengalaman menolong orang.",
"Apa tantangan di era digital?",
"Bagaimana cara mengurangi stres?",
"Apa kebiasaan yang paling berguna?",
"Apa arti disiplin bagimu?",
"Apa yang ingin dipelajari lagi?",
"Menurutmu apa itu kebahagiaan?"
],
deep: [
"Apa definisi hidup yang baik?",
"Mengapa manusia suka dibandingkan?",
"Apakah waktu lebih penting daripada uang?",
"Apa arti menjadi dewasa?",
"Mengapa orang takut gagal?",
"Apakah bahagia harus selalu produktif?",
"Apa yang membuat seseorang dikenang?",
"Apakah keputusan kecil mengubah hidup?",
"Mengapa perubahan terasa sulit?",
"Apa arti keberhasilan pribadi?",
"Apakah semua orang butuh pengakuan?",
"Mengapa kita sering menunda?",
"Apa arti bertanggung jawab?",
"Apakah pengalaman lebih penting dari teori?",
"Mengapa orang sulit memaafkan?",
"Apa arti cukup?",
"Mengapa orang ingin dimengerti?",
"Bagaimana cara menerima perubahan?",
"Apa arti konsisten?",
"Apakah hidup harus punya tujuan besar?",
"Apakah kenyamanan menghambat perkembangan?",
"Mengapa orang mudah menyerah?",
"Apa arti kepercayaan?",
"Apakah rasa takut selalu buruk?",
"Bagaimana membangun kebiasaan baik?",
"Apakah penyesalan selalu negatif?",
"Apa yang membuat hubungan bertahan?",
"Mengapa manusia butuh istirahat?",
"Bagaimana cara menemukan motivasi?",
"Apa arti kebebasan?",
"Apa arti menghargai waktu?",
"Apa yang membuat seseorang berkembang?",
"Mengapa orang sering overthinking?",
"Apa arti keberanian?",
"Bagaimana menghadapi ketidakpastian?",
"Apa arti sederhana?",
"Apakah kegagalan diperlukan?",
"Apa arti tumbuh?",
"Bagaimana membedakan kebutuhan dan keinginan?",
"Apa arti cukup baik?"
],
fun: [
"Jelaskan cara membuat teh seolah sedang presentasi ilmiah.",
"Ceritakan kehidupan seekor kucing yang bekerja kantoran.",
"Promosikan nasi goreng seolah produk mewah.",
"Jelaskan cara tidur seperti tutorial profesional.",
"Buat pidato tentang pentingnya sandal rumah.",
"Jelaskan hujan dari sudut pandang payung.",
"Jual ide libur setiap hari.",
"Ceritakan jika kulkas bisa berbicara.",
"Buat presentasi mengapa rebahan itu seni.",
"Jelaskan mandi seperti olahraga ekstrem.",
"Ceritakan kehidupan rahasia mesin cuci.",
"Promosikan mie instan seperti barang eksklusif.",
"Jelaskan kenapa bantal layak mendapat penghargaan.",
"Ceritakan jika kursi punya perasaan.",
"Buat pidato tentang pentingnya camilan.",
"Jelaskan belanja bulanan seperti misi rahasia.",
"Ceritakan kehidupan sendok di dapur.",
"Promosikan tidur siang ke dunia.",
"Jelaskan drama mencari charger.",
"Ceritakan jika tanaman bisa mengeluh.",
"Buat pidato tentang kenapa hari Senin menantang.",
"Jelaskan antre seperti kompetisi.",
"Ceritakan jika remote TV hilang selamanya.",
"Promosikan jalan pagi seperti festival.",
"Jelaskan mencuci piring sebagai seni.",
"Presentasikan kopi pada orang yang belum pernah melihat kopi.",
"Ceritakan hari ketika semua orang berbicara sangat pelan.",
"Jelaskan mengapa kaos lama sulit dibuang.",
"Buat iklan air putih super premium.",
"Ceritakan jika alarm punya emosi."
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
const ringProgress = document.getElementById('ringProgress');
const speakingHint = document.getElementById('speakingHint');
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
  if (sessionDeck.length === 0) createFreshDeck();

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

function updateStateFromInputs() {
  totalRounds.textContent = roundSelect.value;
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
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  nextBtn.disabled = true;
  pauseBtn.textContent = 'Pause';
  updateRing();
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

startBtn.addEventListener('click', startSession);
pauseBtn.addEventListener('click', pauseSession);
nextBtn.addEventListener('click', nextRound);
resetBtn.addEventListener('click', resetSession);
shuffleBtn.addEventListener('click', shufflePromptOnly);

[modeSelect, durationSelect, roundSelect].forEach(input => {
  input.addEventListener('change', updateStateFromInputs);
});

customTopics.addEventListener('input', () => {
  if (!isRunning) {
    usedPrompts = [];
    sessionDeck = [];
  }
});

updateStateFromInputs();
updateRing();
