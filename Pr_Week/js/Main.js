import { navAction, Logout, scrollToSection } from "./global.js";
const elements_links = document.querySelectorAll("li.actions");
const element_user = document.querySelector("li.User");
const reg = document.querySelector("a.reg");
const log = document.querySelector("a.log");
Logout(reg, log);
navAction(elements_links, element_user);

scrollToSection();

// Categories functionality
const grid = document.getElementById("categoriesGrid");
if (grid) {
  // Fetch categories from API
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
      data.categories.forEach((cat) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
              <img src="${cat.strCategoryThumb}" alt="${cat.strCategory}">
              <div class="card-content">
                   <h3>
                  <a href="catlist.html?cat=${cat.strCategory}">
                    ${cat.strCategory}
                  </a>
                </h3>
                <p>${cat.strCategoryDescription.substring(0, 100)}...</p>
              </div>
            `;
        grid.appendChild(card);
      });
    })
    .catch((err) => {
      grid.innerHTML = `<p class="Error">Failed to load categories 😢</p>`;
      console.error(err);
    });
}

// Add loading animation to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.type === "submit" || this.classList.contains("loading-btn")) {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
      this.disabled = true;

      // Re-enable after 2 seconds (for demo purposes)
      setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
      }, 2000);
    }
  });
});

// Add scroll effect to navbar
// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".navbar");
//   if (navbar) {
//     if (window.scrollY > 100) {
//       navbar.style.background = "rgba(255, 255, 255, 0.98)";
//       navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
//     } else {
//       navbar.style.background = "rgba(255, 255, 255, 0.95)";
//       navbar.style.boxShadow = "none";
//     }
//   }
// });

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".card, .feature-card, .team-member, .value-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
