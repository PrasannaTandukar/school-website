// See more or less funciton
function moreLess(value) {
  let dots = document.getElementById(`dots-${value}`);
  let moreText = document.getElementById(`more-${value}`);
  let button = document.getElementById(`btn-${value}`);

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    button.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}
