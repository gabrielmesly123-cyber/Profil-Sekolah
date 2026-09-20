document.addEventListener("DOMContentLoaded", function () {
    // Deteksi apakah halaman berada dalam subfolder 'pages/'
    const isSubfolder = window.location.pathname.includes("/pages/");
    const basePath = isSubfolder ? "../" : "./";

    // Load Navbar
    const navContainer = document.getElementById("navbar-placeholder");
    if (navContainer) {
        fetch(basePath + "components/navbar.html")
            .then(response => response.text())
            .then(data => {
                // Sesuaikan link relatif jika dipanggil dari subfolder
                if (isSubfolder) {
                    data = data.replace(/href="index.html"/g, 'href="../index.html"');
                    data = data.replace(/href="pages\//g, 'href="');
                    data = data.replace(/src="assets\//g, 'src="../assets/');
                }
                navContainer.innerHTML = data;
                highlightActiveMenu();
            })
            .catch(err => console.error("Gagal memuat navbar:", err));
    }

    // Load Footer
    const footerContainer = document.getElementById("footer-placeholder");
    if (footerContainer) {
        fetch(basePath + "components/footer.html")
            .then(response => response.text())
            .then(data => {
                if (isSubfolder) {
                    data = data.replace(/href="index.html"/g, 'href="../index.html"');
                    data = data.replace(/href="pages\//g, 'href="');
                }
                footerContainer.innerHTML = data;
            })
            .catch(err => console.error("Gagal memuat footer:", err));
    }
});

// Menambahkan class 'active' pada menu yang sedang dibuka
function highlightActiveMenu() {
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage) currentPage = "index.html";

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.endsWith(currentPage)) {
            link.classList.add("active");
        }
    });
}