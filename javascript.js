// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.classList.contains("show-menu")) {
    mobileMenu.classList.remove("show-menu");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  } else {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.classList.add("show-menu");
    }, 10); // biar transisi kebaca
  }
}

// Smooth scrolling for navigation links
// Smooth scrolling + close mobile menu
document.querySelectorAll('#mobileMenu a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Tutup menu dengan transisi yang sama seperti toggleMenu
    toggleMenu();
  });
});

// Add scroll effect to navigation
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("shadow-lg");
  } else {
    nav.classList.remove("shadow-lg");
  }
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = this.querySelector('input[type="text"]').value.trim();
  const pesan = this.querySelector("textarea").value.trim();

  const nomorWhatsApp = "6282241416360"; // Tanpa +
  const urlPesan = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
    `Halo! Saya ingin berkonsultasi mengenai tanaman philo. \nNama: ${nama}\nPesan: ${pesan}`
  )}`;

  window.open(urlPesan, "_blank");
});

AOS.init({
  duration: 1000, // durasi animasi (ms)
  once: true, // animasi hanya sekali
});