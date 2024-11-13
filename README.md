1. di html input nama item tidak ada. Sekarang, ada input item-name yang memungkinkan pengguna untuk memasukkan atau mengubah nama item.
2. di css desain nya lebih terstruktur dan fokus pada pengalaman pengguna dengan memberikan margin, padding, dan kontrol interaktivitas seperti hover dan disabled state pada tombol.
3. di javascript:
a. Nama Item yang Dapat Diubah: Pengguna bisa mengubah nama item dengan mengetikkan nilai di input. Nama ini disimpan dan ditampilkan pada setiap muatan ulang aplikasi.
b. Penyimpanan di Local Storage: Data inventaris (termasuk nama item dan jumlah) disimpan di localStorage, sehingga data tetap ada meskipun halaman di-refresh atau browser ditutup.
c. Validasi Input: Nama item akan menggunakan nilai default "Item" jika input kosong.
d. Batasan Jumlah Item: Jumlah item dibatasi maksimal 100, dan tidak bisa dikurangi di bawah 0.
