const modalView = (source) => {
  let opener = document.querySelector("#opener");

  opener.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".modal-content img").style.objectFit = "contain";
    document.querySelector(".modal-content img").style.zIndex = "5000";
    document.querySelector(".modal-content").style.display = "block";
  });

  let toggler = document.querySelector(".modal-content");

  toggler.addEventListener("click", () => {
    document.querySelector(".modal-content").style.display = "none";
  });
};

window.addEventListener("DOMContentLoaded", (e) => {
  modalView();
});
