const hari = {
    "libur": "Libur Kuliah Sabtu Dan Minggu",
    "masuk": "Masuk Kuliah Senin Sampai Jumat",
    "lainnya": {
      "senin": "Senin Hari ini Cerah",
      "selasa": "Selasa Hari ini Hujan",
    }
  }
  
  // destructuring
  const {libur, masuk, lainnya:{senin, selasa}} = hari;
  
  console.log(libur, masuk, senin, selasa);