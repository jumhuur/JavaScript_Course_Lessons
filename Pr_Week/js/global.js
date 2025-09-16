const IsLogin = () => {
  const User = JSON.parse(localStorage.getItem("User"));
  if (User) {
    return {
      IsLogin: true,
      name: User.name,
      email: User.email,
    };
  } else {
    return {
      IsLogin: false,
    };
  }
};

const navAction = (element, userelement) => {
  if (IsLogin().IsLogin === true) {
    element.forEach((el) => {
      el.style.display = "none";
    });
    userelement.style.display = "block";
    userelement.innerHTML = `Welcome 👋 <span> ${IsLogin().name}</span>`;
    console.log(IsLogin().name);
  } else {
    element.forEach((el) => {
      el.style.display = "block";
    });
    userelement.style.display = "none";
  }
};

const ProtectRoute = () => {
  if (IsLogin().IsLogin === true) {
    if (
      window.location.pathname === "/login.html" ||
      window.location.pathname === "/signup.html"
    ) {
      window.location.href = "/index.html";
      return;
    }
  }
};

const Logout = (reg, log) => {
  if (IsLogin().IsLogin === true) {
    reg.style.display = "none";
    log.addEventListener("click", () => {
      localStorage.removeItem("User");
      location.href = "/index.html";
    });
  } else {
    log.style.display = "none";
  }
};

// Smooth scrolling for anchor links
const scrollToSection = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};

export { IsLogin, navAction, ProtectRoute, Logout, scrollToSection };
