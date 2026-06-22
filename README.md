# Project-Akhir-Pemrograman-WEB-2

# Sistem Manajemen Inventaris Barang Berbasis REST API dan Single Page Application (SPA)

## Deskripsi Proyek

Proyek ini merupakan aplikasi **Sistem Manajemen Inventaris Barang** yang dibangun menggunakan arsitektur **REST API** sebagai backend dan **Single Page Application (SPA)** sebagai frontend.

Backend dikembangkan menggunakan **CodeIgniter 4** yang menyediakan layanan REST API untuk proses autentikasi serta pengelolaan data Barang, Kategori, dan Supplier. Seluruh endpoint CRUD dilindungi menggunakan mekanisme **Bearer Token Authentication** sehingga hanya pengguna yang telah berhasil login yang dapat mengakses data.

Frontend dibangun menggunakan **Vue.js 3**, **Vue Router**, **Axios**, dan **TailwindCSS** sehingga aplikasi dapat berjalan sebagai Single Page Application dengan tampilan yang modern, responsif, dan mudah digunakan.

Fitur utama aplikasi meliputi:

* Login Admin menggunakan Bearer Token
* Dashboard Admin
* CRUD Data Barang
* CRUD Data Kategori
* CRUD Data Supplier
* Integrasi REST API menggunakan Axios
* Route Protection menggunakan Vue Router
* Responsive User Interface menggunakan TailwindCSS

---

# Teknologi yang Digunakan

## Backend

* PHP 8
* CodeIgniter 4
* MySQL
* REST API
* Bearer Token Authentication

## Frontend

* Vue.js 3
* Vue Router
* Axios
* TailwindCSS
* HTML5
* JavaScript

---

# Struktur Database

Berikut merupakan desain relasi database yang digunakan pada aplikasi.



<img width="508" height="396" alt="image" src="https://github.com/user-attachments/assets/6b17ab2d-5a66-4471-8b00-9a9f41998e53" />


---

# Pengujian REST API

## Uji Akses API Tanpa Token (Error 401 Unauthorized)

Endpoint REST API telah diamankan menggunakan Bearer Token.

Apabila pengguna mencoba mengakses endpoint tanpa token autentikasi, maka server akan mengembalikan status **401 Unauthorized**.


<img width="1013" height="702" alt="Cuplikan layar 2026-06-12 164141" src="https://github.com/user-attachments/assets/7e4d3448-a452-4025-86cc-e659d1403287" />


---

# Tampilan Aplikasi

## Halaman Home

> Tempelkan screenshot halaman Home.

![Home](images/home.png)

---

## Halaman Login

> Tempelkan screenshot halaman Login.

![Login](images/login.png)

---

## Dashboard Admin

> Tempelkan screenshot Dashboard.

![Dashboard](images/dashboard.png)

---

## Halaman Data Barang

> Tempelkan screenshot halaman Data Barang.

![Barang](images/barang.png)

---

## Form Tambah / Edit Barang

> Tempelkan screenshot saat form tambah atau edit data Barang.

![Form Barang](images/form-barang.png)

---

## Halaman Data Kategori

> Tempelkan screenshot halaman Data Kategori.

![Kategori](images/kategori.png)

---

## Form Tambah / Edit Kategori

> Tempelkan screenshot saat form tambah atau edit kategori.

![Form Kategori](images/form-kategori.png)

---

## Halaman Data Supplier

> Tempelkan screenshot halaman Data Supplier.

![Supplier](images/supplier.png)

---

## Form Tambah / Edit Supplier

> Tempelkan screenshot saat form tambah atau edit supplier.

![Form Supplier](images/form-supplier.png)

---

# Cara Menjalankan Proyek

## 1. Clone Repository

```bash
git clone https://github.com/username/nama-repository.git
```

Masuk ke folder project.

```bash
cd nama-repository
```

---

## 2. Menjalankan Backend

Masuk ke folder backend.

```bash
cd backend-api
```

Install dependency menggunakan Composer.

```bash
composer install
```

Salin file environment.

```bash
copy env .env
```

Sesuaikan konfigurasi database pada file **.env**.

```text
database.default.hostname = localhost
database.default.database = db_inventory
database.default.username = root
database.default.password =
database.default.DBDriver = MySQLi
```

Jalankan server CodeIgniter.

```bash
php spark serve
```

Backend akan berjalan pada alamat:

```text
http://localhost:8080
```

---

## 3. Menjalankan Frontend

Buka folder:

```text
frontend-spa
```

Jalankan menggunakan **Live Server** pada Visual Studio Code.

Frontend akan berjalan pada alamat:

```text
http://127.0.0.1:5500
```

---

## 4. Login Aplikasi

Gunakan akun berikut untuk masuk ke sistem.

Username

```text
admin
```

Password

```text
admin123
```

---

# Pengujian Aplikasi

Pengujian dilakukan menggunakan:

* Postman untuk pengujian REST API
* Browser Google Chrome atau Microsoft Edge
* Vue Router untuk navigasi SPA
* Axios sebagai komunikasi frontend dengan backend

Seluruh fitur CRUD Barang, Kategori, dan Supplier telah berhasil berjalan dengan baik melalui REST API.

---

# Kesimpulan

Aplikasi Sistem Manajemen Inventaris Barang berhasil dikembangkan menggunakan arsitektur REST API dan Single Page Application (SPA). Backend dibangun menggunakan CodeIgniter 4 sebagai penyedia layanan REST API, sedangkan frontend menggunakan Vue.js 3 yang berkomunikasi dengan backend melalui Axios.

Seluruh fitur utama seperti autentikasi login menggunakan Bearer Token, Dashboard Admin, CRUD Barang, CRUD Kategori, CRUD Supplier, proteksi endpoint menggunakan Auth Filter, serta antarmuka berbasis TailwindCSS telah berhasil diimplementasikan sesuai dengan ketentuan tugas akhir.
