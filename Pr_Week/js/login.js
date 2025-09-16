// imports
import { navAction, ProtectRoute, ActiveLink } from "./global.js";
const elements_links = document.querySelectorAll("li.actions");
const element_user = document.querySelector("li.User");
const Links = document.querySelectorAll("a.nav-link");
navAction(elements_links, element_user);
ProtectRoute();
ActiveLink(Links);
// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// strore to lstg
const lgusers = localStorage.getItem("Users");
const Users = JSON.parse(lgusers) || [];

// Login form handling
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(loginForm);
  const email = formData.get("email");
  const password = formData.get("password");

  // Simple validation
  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // check if user is valid
  const checkuser = () => {
    const check = Users.filter((user) => {
      return user.email === email;
    });
    return check.length < 1 ? false : true;
  };

  if (!checkuser()) {
    // alert("Account not found !!");
    swal(
      "Account not found !!",
      "No account is associated with this email !",
      "error"
    );
    return;
  }

  checkuser();

  const checkpassword = () => {
    const check = Users.filter((user) => {
      return user.email === email;
    });
    const Userpassword = check[0].password;
    const CurrentUser = check[0];
    console.log(Userpassword);
    console.log(password);
    if (Userpassword === password) {
      // Simulate login process
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Signing In...';
      submitBtn.disabled = true;
      localStorage.setItem("User", JSON.stringify(CurrentUser));
      setTimeout(() => {
        // alert("Login successful! Welcome to FlavorHub!");
        // Redirect to home page
        window.location.href = "/index.html";
      }, 2000);
    } else {
      swal("Your password is incorrect !!", "Please try again !", "error");
      return;
    }
  };
  checkpassword();
});
