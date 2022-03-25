const changeActive = (e) => {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".content");
  let activeContent;

  buttons.forEach((button) => {
    button.classList.remove("active-btn");
  });
  contents.forEach((content) => {
    content.classList.remove("active-btn");
    if (e.currentTarget.value == content.id) {
      activeContent = content;
    }
  });

  e.currentTarget.classList.add("active-btn");
  activeContent.classList.add("active-btn");
};

const main = () => {
  const buttons = document.querySelectorAll(".tab-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", changeActive);
  });
};

document.addEventListener("DOMContentLoaded", main);
