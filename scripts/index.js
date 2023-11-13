let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButtons = document.querySelectorAll(".plan button");

selectPlanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
});

let cancelButton = document.querySelector(".modal__actions button");

cancelButton.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});
