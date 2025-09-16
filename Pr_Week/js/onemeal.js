import { navAction, IsLogin, ProtectRoute } from "./global.js";
const elements_links = document.querySelectorAll("li.actions");
const element_user = document.querySelector("li.User");
const mealcard = document.querySelector("div.meal-card");
const container = document.querySelector("div.container");
const Ingr = document.createElement("ul");
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
      const Ingredients = Object.keys(meal);
      const Ingredientskey = Ingredients.filter(
        (key) => key.startsWith("strIngredient") && meal[key]
      ).map((key) => meal[key]);

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
          ${
            meal.strInstructions.length > 250
              ? `${meal.strInstructions.substring(1, 250)}...`
              : meal.strInstructions
          }
          </p>
          <p><b>Category:</b> ${meal.strCategory}</p>
          <p><b>Area:</b> ${meal.strArea}</p>
          <div class="ingredients">
            <h3>Ingredients</h3>
            <ul>
          ${Ingredientskey.map((intg) => `<li>${intg}</li>`).join("")}
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
