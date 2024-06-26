const levels = [
  // Level 1 (4 options)
  [
    {
      question: "Siapa proklamator kemerdekaan Indonesia?",
      options: [
        { text: "Soekarno", image: "Assets/Images/soekarno.jpg" },
        { text: "Hatta", image: "Assets/Images/hatta.jpg" },
        { text: "Soeharto", image: "Assets/Images/soeharto.jpg" },
        { text: "Jokowi", image: "Assets/Images/jokowi.jpg" }
      ],
      answer: "Soekarno"
    },
    {
      question: "Kapan Indonesia merdeka?",
      options: [
        { text: "1945", image: "Assets/Images/1945.jpg" },
        { text: "1950", image: "Assets/Images/1950.jpg" },
        { text: "1965", image: "Assets/Images/1965.jpg" },
        { text: "1970", image: "Assets/Images/1970.jpg" }
      ],
      answer: "1945"
    }
  ],
  // Level 2 (3 options)
  [
    {
      question: "Apa nama kerajaan Hindu pertama di Indonesia?",
      options: [
        { text: "Majapahit", image: "Assets/Images/majapahit.jpg" },
        { text: "Sriwijaya", image: "Assets/Images/sriwijaya.jpg" },
        { text: "Kutai", image: "Assets/Images/kutai.jpg" }
      ],
      answer: "Kutai"
    },
    {
      question: "Siapa penulis kitab Sutasoma?",
      options: [
        { text: "Mpu Tantular", image: "Assets/Images/mpu_tantular.jpg" },
        { text: "Mpu Gandring", image: "Assets/Images/mpu_gandring.jpg" },
        { text: "Mpu Sedah", image: "Assets/Images/mpu_sedah.jpg" }
      ],
      answer: "Mpu Tantular"
    }
  ],
  // Level 3 (4 options)
  [
    {
      question: "Siapa tokoh pahlawan nasional yang dikenal dengan 'Si Pitung'?",
      options: [
        { text: "Cut Nyak Dien", image: "Assets/Images/cut_nyak_dien.jpg" },
        { text: "Teuku Umar", image: "Assets/Images/teuku_umar.jpg" },
        { text: "Pangeran Diponegoro", image: "Assets/Images/pangeran_diponegoro.jpg" },
        { text: "Si Pitung", image: "Assets/Images/si_pitung.jpg" }
      ],
      answer: "Si Pitung"
    },
    {
      question: "Apa nama bendera perjuangan Indonesia yang digunakan pada masa pergerakan nasional?",
      options: [
        { text: "Merah Putih", image: "Assets/Images/merah_putih.jpg" },
        { text: "Bintang Kejora", image: "Assets/Images/bintang_kejora.jpg" },
        { text: "Bendera Pusaka", image: "Assets/Images/bendera_pusaka.jpg" },
        { text: "Dwiwarna", image: "Assets/Images/dwiwarna.jpg" }
      ],
      answer: "Merah Putih"
    }
  ],
  // Level 4 (5 options)
  [
    {
      question: "Siapakah presiden Indonesia yang pertama?",
      options: [
        { text: "Soekarno", image: "Assets/Images/soekarno.jpg" },
        { text: "Soeharto", image: "Assets/Images/soeharto.jpg" },
        { text: "Habibie", image: "Assets/Images/habibie.jpg" },
        { text: "Gus Dur", image: "Assets/Images/gus_dur.jpg" },
        { text: "Megawati", image: "Assets/Images/megawati.jpg" }
      ],
      answer: "Soekarno"
    },
    {
      question: "Kapan terjadinya Agresi Militer Belanda II di Indonesia?",
      options: [
        { text: "1947", image: "Assets/Images/1947.jpg" },
        { text: "1948", image: "Assets/Images/1948.jpg" },
        { text: "1949", image: "Assets/Images/1949.jpg" },
        { text: "1950", image: "Assets/Images/1950.jpg" },
        { text: "1951", image: "Assets/Images/1951.jpg" }
      ],
      answer: "1948"
    }
  ],
  // Level 5 (6 options)
  [
    {
      question: "Apa nama kerajaan Islam pertama di Indonesia?",
      options: [
        { text: "Demak", image: "Assets/Images/demak.jpg" },
        { text: "Mataram", image: "Assets/Images/mataram.jpg" },
        { text: "Majapahit", image: "Assets/Images/majapahit.jpg" },
        { text: "Sriwijaya", image: "Assets/Images/sriwijaya.jpg" },
        { text: "Aceh", image: "Assets/Images/aceh.jpg" },
        { text: "Banten", image: "Assets/Images/banten.jpg" }
      ],
      answer: "Demak"
    },
    {
      question: "Siapa pendiri Kerajaan Majapahit?",
      options: [
        { text: "Hayam Wuruk", image: "Assets/Images/hayam_wuruk.jpg" },
        { text: "Gajah Mada", image: "Assets/Images/gajah_mada.jpg" },
        { text: "Raden Wijaya", image: "Assets/Images/raden_wijaya.jpg" },
        { text: "Brawijaya", image: "Assets/Images/brawijaya.jpg" },
        { text: "Kertanegara", image: "Assets/Images/kertanegara.jpg" },
        { text: "Jayanegara", image: "Assets/Images/jayanegara.jpg" }
      ],
      answer: "Raden Wijaya"
    }
  ],
  // Level 6 (7 options)
  [
    {
      question: "Kapan Sumpah Pemuda dicetuskan?",
      options: [
        { text: "1926", image: "Assets/Images/1926.jpg" },
        { text: "1927", image: "Assets/Images/1927.jpg" },
        { text: "1928", image: "Assets/Images/1928.jpg" },
        { text: "1929", image: "Assets/Images/1929.jpg" },
        { text: "1930", image: "Assets/Images/1930.jpg" },
        { text: "1931", image: "Assets/Images/1931.jpg" },
        { text: "1932", image: "Assets/Images/1932.jpg" }
      ],
      answer: "1928"
    },
    {
      question: "Siapa yang dikenal sebagai 'Bapak Pendidikan Nasional'?",
      options: [
        { text: "Ki Hajar Dewantara", image: "Assets/Images/ki_hajar_dewantara.jpg" },
        { text: "RA Kartini", image: "Assets/Images/ra_kartini.jpg" },
        { text: "Cut Nyak Dien", image: "Assets/Images/cut_nyak_dien.jpg" },
        { text: "KH Ahmad Dahlan", image: "Assets/Images/kh_ahmad_dahlan.jpg" },
        { text: "KH Hasyim Asy'ari", image: "Assets/Images/kh_hasyim_asyari.jpg" },
        { text: "KH Wahid Hasyim", image: "Assets/Images/kh_wahid_hasyim.jpg" },
        { text: "Soetomo", image: "Assets/Images/soetomo.jpg" }
      ],
      answer: "Ki Hajar Dewantara"
    }
  ]
];
