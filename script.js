const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const btnAgendar = document.getElementById("btnAgendar");

btnAgendar.addEventListener("click", () => {
  window.open("https://wa.me/5515991584049", "_blank");
});

const form = document.getElementById("formContato");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  feedback.textContent = "Mensagem enviada!";
});