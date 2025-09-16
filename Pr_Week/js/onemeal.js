import { navAction, IsLogin, ProtectRoute } from "./global.js";
const elements_links = document.querySelectorAll("li.actions");
const element_user = document.querySelector("li.User");
const mealcard = document.querySelector("div.meal-card");
const container = document.querySelector("div.container");
navAction(elements_links, element_user);
ProtectRoute();
const id = window.location.search.split("=")[1];

// protect onmeal info
if (IsLogin().IsLogin === false) {
  window.location.href = "/login.html";
}
const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
const getMeal = async () => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    data.meals.forEach((meal) => {
      mealcard.innerHTML = `
              <div class="img">
          <img
            src="${meal.strMealThumb}"
            alt="Teriyaki Chicken"
          />
        </div>
        <div class="meal-info">
          <h2 class="meal-title">${meal.strMeal}</h2>
          <h3>Instructions</h3>
          <p class="instructions">
          ${meal.strInstructions.substring(1, 250)}...
          </p>
          <p><b>Category:</b> ${meal.strCategory}</p>
          <p><b>Area:</b> ${meal.strArea}</p>
          <div class="ingredients">
            <h3>Ingredients</h3>
            <ul>
              <li>${meal.strIngredient1}</li>
              <li>${meal.strIngredient2}</li>
              <li>${meal.strIngredient3}</li>
              <li>${meal.strIngredient4}</li>
              <li>${meal.strIngredient5}</li>
              <li>${meal.strIngredient6}</li>
              <li>${meal.strIngredient7}</li>
              <li>${meal.strIngredient8}</li>
            </ul>
          </div>
          <a
            class="youtube-link"
            href="${meal.strYoutube}"
            target="_blank"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      `;
    });
  } catch (Error) {
    container.innerHTML = `<p class="Error">${Error.message}</p>`;
    console.log(`${Error.message}`);
  }
};
getMeal();
