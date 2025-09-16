import { navAction, IsLogin, ProtectRoute } from "./global.js";
const elements_links = document.querySelectorAll("li.actions");
const element_user = document.querySelector("li.User");
navAction(elements_links, element_user);
ProtectRoute();
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

// Password toggle functionality
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".password-toggle i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

// Password strength checker
const passwordInput = document.getElementById("password");
const strengthFill = document.querySelector(".strength-fill");
const strengthText = document.querySelector(".strength-text");

passwordInput.addEventListener("input", function () {
  const password = this.value;
  const strength = checkPasswordStrength(password);

  strengthFill.style.width = strength.percentage + "%";
  strengthFill.className = "strength-fill " + strength.class;
  strengthText.textContent = strength.text;
});

function checkPasswordStrength(password) {
  let score = 0;
  let feedback = [];

  if (password.length >= 8) score += 25;
  else feedback.push("at least 8 characters");

  if (/[a-z]/.test(password)) score += 25;
  else feedback.push("lowercase letters");

  if (/[A-Z]/.test(password)) score += 25;
  else feedback.push("uppercase letters");

  if (/[0-9]/.test(password)) score += 25;
  else feedback.push("numbers");

  if (score < 50) {
    return {
      percentage: score,
      class: "weak",
      text: "Weak - Add " + feedback.join(", "),
    };
  } else if (score < 75) {
    return {
      percentage: score,
      class: "medium",
      text: "Medium - Good password",
    };
  } else {
    return {
      percentage: score,
      class: "strong",
      text: "Strong - Excellent password",
    };
  }
}

// strore to lstg
const lgusers = localStorage.getItem("Users");
const Users = JSON.parse(lgusers) || [];

// Signup form handling
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(signupForm);
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  // Validation
  if (!firstName || !lastName || !email || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simulate signup process
  const submitBtn = signupForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  const CurrentUser = {
    name: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  // check if user is all ready in data
  const checkuser = () => {
    const check = Users.filter((user) => {
      return user.email === CurrentUser.email;
    });
    return check.length < 1 ? false : true;
  };

  if (checkuser()) {
    alert("akoonkan hore ayuu u jiraa !!");
    return;
  }

  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
  submitBtn.disabled = true;

  setTimeout(() => {
    Users.push(CurrentUser);
    localStorage.setItem("Users", JSON.stringify(Users));
    localStorage.setItem("User", JSON.stringify(CurrentUser));
    alert("Account created successfully! Welcome to FlavorHub!");
    // Redirect to home page
    window.location.href = "/index.html";
  }, 2000);
});
