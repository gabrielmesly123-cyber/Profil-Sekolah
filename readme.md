# School Profile SMA Marsudirini Bekasi

Website profil sekolah SMA Marsudirini Bekasi with information pages, PPDB information, gallery content, and a contact form.

## Requirements

- XAMPP with Apache and PHP
- A browser

## Running the Website

1. Put this project inside the XAMPP `htdocs` folder.
2. Start **Apache** in the XAMPP Control Panel.
3. Open the website through Apache:

   `http://localhost/Pweb2Sekolah/school-profile/`

Do not open the project with `file:///...` or VS Code Live Server. PHP files must be processed by Apache; otherwise the browser may download them instead of displaying them.

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
└── php/process.php             # PHP contact-form processing
```

## Contact Form

The form in `pages/kontak.php` sends a `POST` request to `pages/proses-kontak.php` for server-side processing.

The handler is loaded with:

```php
require_once '../php/process.php';
```
