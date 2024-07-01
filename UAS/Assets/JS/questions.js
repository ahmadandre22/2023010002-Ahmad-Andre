const levels = [
  // Level 1 (4 options)
  [
    {
      question: "Siapa proklamator kemerdekaan Indonesia?",
      options: [
        { text: "Soekarno", image: "Assets/Img/soekarno.jpg" },
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
  // Level 2 (5 options)
  [
    {
      question: "Apa nama kerajaan Hindu pertama di Indonesia?",
      options: [
        { text: "Majapahit", image: "Assets/Images/majapahit.jpg" },
        { text: "Sriwijaya", image: "Assets/Images/sriwijaya.jpg" },
        { text: "Kutai", image: "Assets/Images/kutai.jpg" },
        { text: "Tarumanegara", image: "Assets/Images/tarumanegara.jpg" },
        { text: "Singasari", image: "Assets/Images/singasari.jpg" }
      ],
      answer: "Kutai"
    },
    {
      question: "Siapa penulis kitab Sutasoma?",
      options: [
        { text: "Mpu Tantular", image: "Assets/Images/mpu_tantular.jpg" },
        { text: "Mpu Gandring", image: "Assets/Images/mpu_gandring.jpg" },
        { text: "Mpu Sedah", image: "Assets/Images/mpu_sedah.jpg" },
        { text: "Mpu Prapanca", image: "Assets/Images/mpu_prapanca.jpg" },
        { text: "Mpu Kanwa", image: "Assets/Images/mpu_kanwa.jpg" }
      ],
      answer: "Mpu Tantular"
    }
  ],
  // Level 3 (6 options)
  [
    {
      question: "Siapa tokoh pahlawan nasional yang dikenal dengan 'Si Pitung'?",
      options: [
        { text: "Cut Nyak Dien", image: "Assets/Images/cut_nyak_dien.jpg" },
        { text: "Teuku Umar", image: "Assets/Images/teuku_umar.jpg" },
        { text: "Pangeran Diponegoro", image: "Assets/Images/pangeran_diponegoro.jpg" },
        { text: "Si Pitung", image: "Assets/Images/si_pitung.jpg" },
        { text: "Sudirman", image: "Assets/Images/sudirman.jpg" },
        { text: "Sisingamangaraja", image: "Assets/Images/sisingamangaraja.jpg" }
      ],
      answer: "Si Pitung"
    },
    {
      question: "Apa nama bendera perjuangan Indonesia yang digunakan pada masa pergerakan nasional?",
      options: [
        { text: "Merah Putih", image: "Assets/Images/merah_putih.jpg" },
        { text: "Bintang Kejora", image: "Assets/Images/bintang_kejora.jpg" },
        { text: "Bendera Pusaka", image: "Assets/Images/bendera_pusaka.jpg" },
        { text: "Dwiwarna", image: "Assets/Images/dwiwarna.jpg" },
        { text: "Garuda", image: "Assets/Images/garuda.jpg" },
        { text: "Sang Saka Merah Putih", image: "Assets/Images/sang_saka_merah_putih.jpg" }
      ],
      answer: "Merah Putih"
    }
  ],
  // Level 4 (7 options)
  [
    {
      question: "Siapakah presiden Indonesia yang pertama?",
      options: [
        { text: "Soekarno", image: "Assets/Images/soekarno.jpg" },
        { text: "Soeharto", image: "Assets/Images/soeharto.jpg" },
        { text: "Habibie", image: "Assets/Images/habibie.jpg" },
        { text: "Gus Dur", image: "Assets/Images/gus_dur.jpg" },
        { text: "Megawati", image: "Assets/Images/megawati.jpg" },
        { text: "Jokowi", image: "Assets/Images/jokowi.jpg" },
        { text: "SBY", image: "Assets/Images/sby.jpg" }
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
        { text: "1951", image: "Assets/Images/1951.jpg" },
        { text: "1952", image: "Assets/Images/1952.jpg" },
        { text: "1953", image: "Assets/Images/1953.jpg" }
      ],
      answer: "1948"
    }
  ],
  // Level 5 (8 options)
  [
    {
      question: "Apa nama kerajaan Islam pertama di Indonesia?",
      options: [
        { text: "Demak", image: "Assets/Images/demak.jpg" },
        { text: "Mataram", image: "Assets/Images/mataram.jpg" },
        { text: "Majapahit", image: "Assets/Images/majapahit.jpg" },
        { text: "Sriwijaya", image: "Assets/Images/sriwijaya.jpg" },
        { text: "Aceh", image: "Assets/Images/aceh.jpg" },
        { text: "Banten", image: "Assets/Images/banten.jpg" },
        { text: "Cirebon", image: "Assets/Images/cirebon.jpg" },
        { text: "Malaka", image: "Assets/Images/malaka.jpg" }
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
        { text: "Jayanegara", image: "Assets/Images/jayanegara.jpg" },
        { text: "Suhita", image: "Assets/Images/suhita.jpg" },
        { text: "Rajasa", image: "Assets/Images/rajasa.jpg" }
      ],
      answer: "Raden Wijaya"
    }
  ],
  // Level 6 (9 options)
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
        { text: "1932", image: "Assets/Images/1932.jpg" },
        { text: "1933", image: "Assets/Images/1933.jpg" },
        { text: "1934", image: "Assets/Images/1934.jpg" }
      ],
      answer: "1928"
    },
    {
      question: "Siapakah pahlawan nasional wanita yang berasal dari Aceh?",
      options: [
        { text: "R.A. Kartini", image: "Assets/Images/ra_kartini.jpg" },
        { text: "Cut Nyak Dien", image: "Assets/Images/cut_nyak_dien.jpg" },
        { text: "Martha Christina Tiahahu", image: "Assets/Images/martha_christina_tiahahu.jpg" },
        { text: "Dewi Sartika", image: "Assets/Images/dewi_sartika.jpg" },
        { text: "Nyi Ageng Serang", image: "Assets/Images/nyi_ageng_serang.jpg" },
        { text: "Tjut Meutia", image: "Assets/Images/tjut_meutia.jpg" },
        { text: "Fatmawati", image: "Assets/Images/fatmawati.jpg" },
        { text: "Maria Walanda Maramis", image: "Assets/Images/maria_walanda_maramis.jpg" },
        { text: "Siti Hartinah", image: "Assets/Images/siti_hartinah.jpg" }
      ],
      answer: "Cut Nyak Dien"
    }
  ]
];
