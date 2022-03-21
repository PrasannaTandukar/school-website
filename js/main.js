function toggleMenu() {
  let button = document.querySelector(".menu-icon");
  button.addEventListener("click", (e) => {
    let content = document.querySelector(".content");
    content.classList.toggle("hide-content");
  });
}

window.addEventListener("DOMContentLoaded", (e) => {
  toggleMenu();
});
