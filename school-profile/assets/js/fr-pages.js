document.addEventListener("DOMContentLoaded", function () {
    setupNewsPage();
    setupGalleryPage();
    setupRegistrationForm();
});

function setupNewsPage() {
    const grid = document.querySelector("[data-news-grid]");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll("[data-news-card]"));
    const search = document.querySelector("[data-news-search]");
    const category = document.querySelector("[data-news-category]");
    const pagination = document.querySelector("[data-news-pagination]");
    const pageSize = 6;
    let currentPage = 1;

    function getFilteredCards() {
        const query = (search ? search.value : "").trim().toLowerCase();
        const selectedCategory = category ? category.value : "all";
        return cards.filter(function (card) {
            const haystack = card.textContent.toLowerCase();
            const cardCategory = card.dataset.category || "";
            return (!query || haystack.includes(query)) &&
                (selectedCategory === "all" || cardCategory === selectedCategory);
        });
    }

    function render() {
        const filtered = getFilteredCards();
        const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
        currentPage = Math.min(currentPage, pageCount);
        cards.forEach(function (card) { card.classList.add("d-none"); });
        filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .forEach(function (card) { card.classList.remove("d-none"); });

        if (pagination) {
            pagination.innerHTML = "";
            for (let page = 1; page <= pageCount; page += 1) {
                const item = document.createElement("li");
                item.className = "page-item" + (page === currentPage ? " active" : "");
                item.innerHTML = '<button class="page-link" type="button" aria-label="Halaman ' + page + '">' + page + '</button>';
                item.querySelector("button").addEventListener("click", function () {
                    currentPage = page;
                    render();
                });
                pagination.appendChild(item);
            }
        }

        let empty = grid.querySelector(".fr-empty-state");
        if (!filtered.length) {
            if (!empty) {
                empty = document.createElement("div");
                empty.className = "fr-empty-state";
                empty.textContent = "Berita yang sesuai belum tersedia.";
                grid.appendChild(empty);
            }
        } else if (empty) {
            empty.remove();
        }
    }

    [search, category].forEach(function (control) {
        if (control) control.addEventListener("input", function () { currentPage = 1; render(); });
        if (control) control.addEventListener("change", function () { currentPage = 1; render(); });
    });
    render();
}

function setupGalleryPage() {
    const gallery = document.querySelector("[data-gallery-grid]");
    if (!gallery) return;

    const items = Array.from(gallery.querySelectorAll("[data-gallery-item]"));
    document.querySelectorAll("[data-gallery-filter]").forEach(function (button) {
        button.addEventListener("click", function () {
            document.querySelectorAll("[data-gallery-filter]").forEach(function (item) {
                item.classList.remove("active");
                item.classList.remove("btn-primary-custom");
                item.classList.add("btn-outline-primary");
            });
            button.classList.add("active");
            button.classList.remove("btn-outline-primary");
            button.classList.add("btn-primary-custom");
            const filter = button.dataset.galleryFilter;
            items.forEach(function (item) {
                item.classList.toggle("d-none", filter !== "all" && item.dataset.category !== filter);
            });
        });
    });

    const previewImage = document.querySelector("[data-gallery-preview-image]");
    const previewTitle = document.querySelector("[data-gallery-preview-title]");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            if (previewImage) {
                previewImage.src = item.dataset.image;
                previewImage.alt = item.dataset.title || "Preview galeri";
            }
            if (previewTitle) previewTitle.textContent = item.dataset.title || "Preview Galeri";
        });
        item.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                item.click();
            }
        });
    });
}

function setupRegistrationForm() {
    const form = document.querySelector("[data-registration-form]");
    const status = document.querySelector("[data-registration-status]");
    if (!form || !status) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        status.className = "alert alert-success mt-3";
        status.textContent = "Data awal berhasil dicatat. Panitia akan menghubungi Anda untuk proses berikutnya.";
        form.reset();
    });
}
