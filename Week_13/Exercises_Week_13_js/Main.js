let suaalo = document.querySelectorAll("div.faq-item");
let Jawaabo = document.querySelectorAll("div.faq-answer");
suaalo.forEach((suaal) => {
  suaal.addEventListener("click", function (e) {
    suaalo.forEach((su) => {
      su.classList.remove("active");
    });
    suaal.classList.toggle("active");
  });
});

// exercise link
// https://fontawesome.com/icons/chevron-down?f=classic&s=solid&pc=%236366f1&sc=%236366f1
