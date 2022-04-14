const indexModal = () => {
  const modal = document.getElementById("index-modal");

  const button = document.querySelector(".close-modal");

  button.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  indexModal();
});
