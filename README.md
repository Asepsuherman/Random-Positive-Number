# Panduan Penggunaan Aplikasi

Aplikasi ini dibangun menggunakan teknologi modern di sisi frontend untuk memberikan pengalaman pengguna yang optimal dan performa yang cepat. Berikut adalah teknologi yang digunakan:

- **React**: Library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang dinamis dan interaktif.
- **Vite**: Build tool modern yang digunakan untuk meningkatkan kecepatan pengembangan aplikasi dengan fitur hot module replacement (HMR) yang lebih cepat dibandingkan dengan tooling tradisional.
- **Tailwind CSS**: Framework CSS yang memberikan fleksibilitas dalam styling komponen dengan utility-first class, memungkinkan desain yang responsif dan konsisten.

## Langkah-langkah Menggunakan Aplikasi

1. **Install Dependencies:**

   - Buka terminal atau command prompt.
   - Jalankan perintah berikut untuk menginstall semua dependencies yang diperlukan:
     ```bash
     npm install
     ```

2. **Menjalankan Aplikasi:**

   - Setelah dependencies terinstall, jalankan aplikasi dengan perintah berikut:
     ```bash
     npm run dev
     ```

3. **Akses Aplikasi:**

   - Buka browser dan akses aplikasi pada URL berikut:
     ```
     http://localhost:5173/
     ```

4. **Tab 1 - Input Bilangan A:**

   - Pada tab pertama, user diminta untuk mengisi sebuah bilangan (dari 1 hingga 10000).
   - Setelah mengisi bilangan, tekan tombol "Submit".
   - Setelah tombol ditekan, aplikasi akan berpindah ke tab kedua secara otomatis, dan tab pertama akan menjadi disabled. Bilangan yang diinputkan pada tab ini kita sebut sebagai **A**.

5. **Tab 2 - Generate Bilangan Acak:**

   - Pada tab kedua, user akan melihat sebuah tombol untuk menghasilkan bilangan acak.
   - Ketika tombol ini ditekan, akan muncul sebuah tabel yang berisi sebanyak **A** bilangan bulat acak (dari -1000000 hingga 1000000).
   - User dapat menekan tombol ini berkali-kali hingga merasa puas dengan hasil angka random yang muncul pada tabel.
   - Setelah selesai, user dapat berpindah ke tab ketiga.

6. **Tab 3 - Cari Bilangan B:**
   - Pada tab ketiga, user akan melihat sebuah tombol untuk menemukan bilangan bulat positif terkecil yang tidak ada pada tabel di tab kedua.
   - Setelah tombol ditekan, akan muncul sebuah bilangan yang disebut sebagai **B**. Bilangan **B** ini adalah bilangan bulat positif terkecil yang tidak ada pada tabel di tab kedua.
#
