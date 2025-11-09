// 簡單的表單回應
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "感謝你的留言！我會盡快回覆 😊";
  form.reset();
});

