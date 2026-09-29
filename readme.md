# 🏫 School Profile — SMA Marsudirini Bekasi

Website profil resmi **SMA Marsudirini Bekasi** yang dirancang sebagai pusat informasi sekolah untuk siswa, calon siswa, orang tua, guru, alumni, dan masyarakat umum.

Website menyediakan informasi mengenai profil sekolah, akademik, kesiswaan, jurusan, berita, galeri, PPDB, serta kontak sekolah.

## 🌐 Live Website

**[SMA Marsudirini Bekasi — School Profile](https://profil-sekolah-one.vercel.app/)**

---

## ✨ Features

### 🏠 Beranda

* Hero section / carousel
* Informasi singkat sekolah
* Sambutan kepala sekolah
* Visi dan misi
* Keunggulan sekolah
* Berita dan kegiatan terbaru
* Call-to-action PPDB

### 🏫 Profil Sekolah

* Identitas sekolah
* Sejarah sekolah
* Visi dan misi
* Sambutan kepala sekolah
* Struktur organisasi
* Tenaga pendidik
* Fasilitas sekolah

### 📚 Akademik

* Informasi kurikulum
* Program akademik
* Kegiatan pembelajaran
* Informasi pendukung akademik

### 👨‍🎓 Kesiswaan

* Organisasi siswa
* Program kesiswaan
* Pengembangan kepemimpinan
* Informasi kegiatan siswa

### 🎓 Jurusan

Informasi mengenai program jurusan yang tersedia di sekolah, termasuk:

* MIPA
* IPS
* Data jumlah siswa berdasarkan jurusan

### 📰 Berita

* Daftar berita sekolah
* Kategori berita
* Search berita
* Filter berdasarkan kategori
* Informasi kegiatan dan pengumuman sekolah

### 🖼️ Galeri

Galeri dokumentasi sekolah dengan kategori:

* Semua
* Kegiatan
* Prestasi
* Fasilitas
* Ekstrakurikuler
* Upacara
* Laboratorium

### 📝 PPDB

* Informasi Penerimaan Peserta Didik Baru
* Informasi pendaftaran
* Alur pendaftaran
* Call-to-action pendaftaran

### 📩 Kontak

Halaman kontak menyediakan:

* Informasi kontak sekolah
* Informasi lokasi
* Formulir pesan
* Integrasi **Web3Forms** untuk pengiriman pesan

Form kontak tidak menggunakan backend PHP. Data dikirim melalui layanan Web3Forms.

---

## 🛠️ Tech Stack

| Technology      | Usage                               |
| --------------- | ----------------------------------- |
| HTML5           | Struktur halaman                    |
| CSS3            | Custom styling                      |
| JavaScript      | Interaksi dan dynamic components    |
| Bootstrap 5     | Responsive layout dan UI components |
| Bootstrap Icons | Icon system                         |
| Web3Forms       | Contact form handling               |
| Git             | Version control                     |
| GitHub          | Repository                          |
| Vercel          | Deployment                          |

---

## 📁 Project Structure

```text
Profil-Sekolah/
│
├── school-profile/
│   │
│   ├── index.html
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   └── fr-pages.css
│   │   │
│   │   ├── js/
│   │   │   └── app.js
│   │   │
│   │   └── images/
│   │
│   ├── components/
│   │   ├── navbar.html
│   │   └── footer.html
│   │
│   └── pages/
│       ├── profil.html
│       ├── akademik.html
│       ├── kesiswaan.html
│       ├── berita.html
│       ├── galeri.html
│       ├── jurusan.html
│       ├── ppdb.html
│       └── kontak.html
│
└── README.md
```

---

## 🧩 Components

### Navbar

`components/navbar.html`

Navbar digunakan sebagai navigasi utama website dan digunakan pada berbagai halaman.

Menu utama meliputi:

* Beranda
* Profil
* Akademik
* Kesiswaan
* Berita
* Galeri
* Jurusan
* Kontak
* PPDB

Navbar dimuat secara dinamis menggunakan JavaScript.

### Footer

`components/footer.html`

Footer berisi:

* Identitas sekolah
* Navigasi website
* Informasi kontak
* Social media
* Copyright

Footer juga dimuat secara dinamis menggunakan JavaScript.

### JavaScript

`assets/js/app.js`

Digunakan untuk beberapa fungsi website, seperti:

* Memuat navbar
* Memuat footer
* Menentukan active navigation
* Menyesuaikan relative path berdasarkan halaman
* Interaksi/filtering pada halaman tertentu

---

## 📩 Contact Form — Web3Forms

Website menggunakan **Web3Forms** untuk menangani pengiriman contact form tanpa membutuhkan backend PHP atau database.

Flow contact form:

```text
User
  ↓
Contact Form
  ↓
Web3Forms API
  ↓
Email Recipient
```

Dengan pendekatan ini, website dapat tetap menggunakan arsitektur frontend/static tanpa membutuhkan server PHP.

### Konfigurasi

Form contact menggunakan Web3Forms dengan access key yang dikonfigurasi pada form.

Contoh struktur:

```html
<form action="https://api.web3forms.com/submit" method="POST">

    <input
        type="hidden"
        name="access_key"
        value="YOUR_WEB3FORMS_ACCESS_KEY"
    >

    <input
        type="text"
        name="name"
        placeholder="Nama"
        required
    >

    <input
        type="email"
        name="email"
        placeholder="Email"
        required
    >

    <input
        type="text"
        name="subject"
        placeholder="Subjek"
        required
    >

    <textarea
        name="message"
        placeholder="Pesan"
        required
    ></textarea>

    <button type="submit">
        Kirim Pesan
    </button>

</form>
```

> **Important:** Jangan commit access key atau credential lain ke repository apabila konfigurasi tersebut bersifat private. Gunakan konfigurasi yang sesuai dengan deployment Web3Forms.

---

## 🚀 Running Locally

Karena website menggunakan HTML, CSS, JavaScript, dan Web3Forms, **PHP/XAMPP tidak diperlukan**.

### Option 1 — VS Code Live Server

1. Clone repository.

```bash
git clone https://github.com/gabrielmesly123-cyber/Profil-Sekolah.git
```

2. Masuk ke folder project.

```bash
cd Profil-Sekolah
```

3. Buka folder `school-profile` menggunakan VS Code.

4. Jalankan `index.html` menggunakan extension **Live Server**.

5. Website akan terbuka melalui local development server.

### Option 2 — Static Web Server

Project juga dapat dijalankan menggunakan static web server lainnya karena tidak membutuhkan backend PHP.

---

## 🌍 Deployment

Website dapat di-deploy sebagai static website.

Deployment saat ini menggunakan:

**Vercel**

Basic deployment flow:

```text
GitHub Repository
       ↓
     Vercel
       ↓
   Build / Deploy
       ↓
 Live Website
```

Setiap perubahan yang di-push ke repository dapat digunakan sebagai source untuk deployment terbaru.

---

## 📱 Responsive Design

Website dirancang agar dapat digunakan pada:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

Bootstrap 5 digunakan untuk membantu responsive layout dan component behavior.

---

## 🔍 Website Navigation

```text
Beranda
│
├── Profil
│   ├── Sejarah
│   ├── Visi & Misi
│   ├── Struktur Organisasi
│   ├── Tenaga Pendidik
│   └── Fasilitas
│
├── Akademik
│
├── Kesiswaan
│
├── Berita
│
├── Galeri
│
├── Jurusan
│
├── PPDB
│
└── Kontak
    └── Web3Forms
```

---

## 🎯 Project Goals

Project ini dibuat untuk:

1. Membuat website profil sekolah yang informatif.
2. Mempermudah calon siswa mendapatkan informasi sekolah.
3. Menampilkan identitas dan kegiatan SMA Marsudirini Bekasi secara digital.
4. Membuat website yang responsive dan mudah digunakan.
5. Mengimplementasikan konsep dasar web development menggunakan HTML, CSS, dan JavaScript.
6. Menggunakan layanan pihak ketiga seperti Web3Forms untuk kebutuhan contact form.
7. Mengimplementasikan version control menggunakan Git dan GitHub.
8. Melakukan deployment website menggunakan Vercel.

---

## 🔮 Future Development

Beberapa fitur yang dapat dikembangkan:

* [ ] CMS / Admin Dashboard
* [ ] Database sekolah
* [ ] Dynamic News Management
* [ ] Dynamic Gallery Management
* [ ] Dynamic PPDB Management
* [ ] Authentication untuk administrator
* [ ] Site-wide search
* [ ] Google Maps integration
* [ ] Visitor analytics
* [ ] SEO optimization
* [ ] Accessibility improvements
* [ ] Progressive Web App (PWA)

---

## 🧪 Testing Checklist

Sebelum deployment, pastikan:

* [ ] Semua navbar links bekerja
* [ ] Semua halaman dapat dibuka
* [ ] Navbar responsive
* [ ] Footer muncul pada semua halaman
* [ ] Hero carousel bekerja
* [ ] Search/filter berita bekerja
* [ ] Filter galeri bekerja
* [ ] CTA PPDB bekerja
* [ ] Contact form dapat mengirim pesan melalui Web3Forms
* [ ] Tidak terdapat broken images
* [ ] Tidak terdapat broken links
* [ ] Website responsive pada mobile
* [ ] Website responsive pada tablet
* [ ] Website responsive pada desktop

---

## 👨‍💻 Developer

**Gabriel Mesly Managam Siahaan**

Teknik Informatika
Institut Teknologi Sepuluh Nopember (ITS)

GitHub:
https://github.com/gabrielmesly123-cyber

Repository:
https://github.com/gabrielmesly123-cyber/Profil-Sekolah

---

## 📄 License

This project was created for educational and project devel
