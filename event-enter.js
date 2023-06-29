// Mendapatkan referensi ke elemen textarea
var textInput = document.getElementById('text-input');

// Menambahkan event listener untuk event keydown
textInput.addEventListener('keydown', function (event) {
  var text = textInput.value;
  // Mengecek apakah tombol yang ditekan adalah tombol Enter (kode 13)
  if (event.keyCode === 13) {
    event.preventDefault(); // Ini mencegah karakter baris baru muncul di textarea
    speak(text); // Ganti dengan fungsi atau peristiwa yang ingin Anda trig saat tombol Enter ditekan
  }
});

// Fungsi yang akan dipanggil saat tombol Enter ditekan
function doSomething() {
  // Lakukan sesuatu di sini
  var text = textInput.value;
  console.log('Tombol Enter ditekan!');
  console.log('Isi textarea:', text);
  // ...
}
