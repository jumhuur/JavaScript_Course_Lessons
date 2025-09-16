import { navAction, IsLogin, ProtectRoute } from "./global.js";
const elements_links = document.querySelectorAll("li.actions");
const element_user = document.querySelector("li.User");
navAction(elements_links, element_user);
ProtectRoute();
const grid = document.getElementById("categoriesGrid");
console.log(window.location.search);
const cat = window.location.search.split("=")[1];
console.log(cat);
const title = document.querySelector("h2.cat_type");
title.textContent = `${cat} Meals List`;
// Fetch categories from API
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
  .then((res) => res.json())
  .then((data) => {
    data.meals.forEach((cat) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
            <img src="${cat.strMealThumb}" alt="${cat.strMeal}">
            <div class="card-content">
                 <h3>
                <a href="/onemeal.html?id=${cat.idMeal}">
                  ${cat.strMeal}
                </a>
              </h3>
            </div>
          `;
      grid.appendChild(card);
    });
  })
  .catch((err) => {
    grid.innerHTML = `<p class="Error">Failed to load categories 😢</p>`;
    console.error(err);
  });
