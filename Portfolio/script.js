let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // On cache la navbar quand on descend
        navbar.style.top = "-70px"; // Ajuste selon la hauteur de ta navbar
    } else {
        // On affiche la navbar quand on monte
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});


document.querySelector(".navbar-brand").addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
