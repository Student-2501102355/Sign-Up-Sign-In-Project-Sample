// Handle Sign-Up
if (window.location.pathname.includes("index.html")) {
  const form = document.querySelector("#signup-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelectorAll("input")[0].value;
    const fullName = form.querySelectorAll("input")[1].value;
    const username = form.querySelectorAll("input")[2].value;
    const password = form.querySelectorAll("input")[3].value;

    const user = { email, fullName, username, password };
    localStorage.setItem("gamerUser", JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "login.html";
  });
}

// Handle Login
if (window.location.pathname.includes("login.html")) {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameOrEmail = form.querySelectorAll("input")[0].value;
    const password = form.querySelectorAll("input")[1].value;

    const storedUser = JSON.parse(localStorage.getItem("gamerUser"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      (usernameOrEmail === storedUser.email || usernameOrEmail === storedUser.username) &&
      password === storedUser.password
    ) {
      alert("Login successful!");
      window.location.href = "profile.html";
    } else {
      alert("Invalid username or password.");
    }
  });
}

// Handle Profile
if (window.location.pathname.includes("profile.html")) {
  const storedUser = JSON.parse(localStorage.getItem("gamerUser"));

  if (!storedUser) {
    alert("You must log in first!");
    window.location.href = "login.html";
  } else {
    document.getElementById("profile-name").textContent = storedUser.fullName;
    document.getElementById("profile-username").textContent = storedUser.username;
    document.getElementById("profile-email").textContent = storedUser.email;
  }

  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("gamerUser");
    alert("Logged out successfully!");
    window.location.href = "login.html";
  });
}