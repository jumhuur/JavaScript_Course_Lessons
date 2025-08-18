// // https://api.github.com/users/${username}
// const btn = document.querySelector("button.btn");
// const FetchData = async () => {
//   const input = document.getElementById("username").value;
//   const error = document.getElementById("error");
//   const userCard = document.getElementById("userCard");
//   const img = document.querySelector("img");
//   const name = document.getElementById("name");
//   const bio = document.getElementById("bio");
//   const followers = document.getElementById("followers");
//   const following = document.getElementById("following");
//   const repos = document.getElementById("repos");
//   try {
//     const response = await fetch(`https://api.github.com/users`);
//     if (!response.ok) {
//       throw new Error(`User not Found ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     userCard.classList.add("active");
//     img.src = data.avatar_url;
//     error.textContent = "";
//     name.textContent = data.name;
//     followers.textContent = `followers : ${data.followers}`;
//     following.textContent = `following : ${data.following}`;
//     repos.textContent = `repos : ${data.public_repos}`;
//     bio.textContent = data.bio || "bio not avalible";
//   } catch (Error) {
//     userCard.classList.remove("active");
//     error.textContent = Error.message;
//     console.log(Error.message);
//   }
// };

// btn.addEventListener("click", () => {
//   FetchData();
// });

// const shaqo = async () => {
//   const url = "https://jsearch.p.rapidapi.com/search?query=python";
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "5de993e486mshc54b203ad97c00bp162403jsnbdcf2950d435",
//       "x-rapidapi-host": "jsearch.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// shaqo();
