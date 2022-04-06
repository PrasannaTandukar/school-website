const modalView = (source) => {
  let toggler = document.querySelector(".close-modal");

  toggler.addEventListener("click", () => {
    document.querySelector(".modal-content").style.display = "none";
  });
};

const changeModalImage = (imageSource) => {
  document.querySelector(".modal-content img").src = imageSource;
};

const responsiveImages = () => {
  let images = document.querySelectorAll(".gallery-images img");
  images.forEach((img) => {
    img.addEventListener("click", (value) => {
      document.querySelector(".modal-content").style.display = "block";
      changeModalImage(img.src);
    });
  });
};

window.addEventListener("DOMContentLoaded", (e) => {
  modalView();
  responsiveImages();
});
