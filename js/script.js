// 🌙 Part 1: Light/Dark Mode Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Part 2a: Counter Game
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("countDisplay");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// 📚 Part 2b: Collapsible FAQ
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");

faqToggle.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// 📋 Part 3: Form Validation
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validation checks
  if (name === "" || email === "" || password === "") {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "Enter a valid email address!";
    message.style.color = "red";
    return;
  }

  // Password length check
  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  // Success
  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});
