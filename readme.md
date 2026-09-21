# School Profile SMA Marsudirini Bekasi

Website profil sekolah SMA Marsudirini Bekasi with information pages, PPDB information, gallery content, and a contact form connected to MySQL.

## Requirements

- XAMPP with Apache, PHP, and MySQL
- A browser
- MySQL database named `db_sekolah`

## Running the Website

1. Put this project inside the XAMPP `htdocs` folder.
2. Start **Apache** and **MySQL** in the XAMPP Control Panel.
3. Open the website through Apache:

   `http://localhost/Pweb2Sekolah/school-profile/`

Do not open the project with `file:///...` or VS Code Live Server. PHP files must be processed by Apache; otherwise the browser may download them instead of displaying them.

## Database Setup

Create the database and contact table in phpMyAdmin or the MySQL console:

```sql
CREATE DATABASE db_sekolah;

USE db_sekolah;

CREATE TABLE contacts (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nama VARCHAR(100) NOT NULL,
	email VARCHAR(150) NOT NULL,
	subjek VARCHAR(200) NOT NULL,
	pesan TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

The connection settings are in `php/process.php`. The default XAMPP configuration expects:

- Host: `localhost`
- User: `root`
- Password: empty
- Database: `db_sekolah`

Update that file if your MySQL credentials are different.

## Project Structure

```text
school-profile/
├── index.html                 # Homepage
├── assets/
│   ├── css/style.css           # Custom styles
│   ├── images/                 # Website images
│   └── js/app.js               # Navbar, footer, and active-menu loader
├── components/
│   ├── navbar.html             # Shared navigation
│   └── footer.html             # Shared footer
├── pages/                     # Website pages
│   ├── kontak.php              # Contact page and form
│   └── proses-kontak.php       # Contact form handler
└── php/process.php             # MySQL connection
```

## Contact Form

The form in `pages/kontak.php` sends a `POST` request to `pages/proses-kontak.php`. Submitted messages are inserted into the `contacts` table.

If the form reports that `config/koneksi.php` cannot be found, make sure the handler requires the existing connection file:

```php
require_once '../php/process.php';
```
