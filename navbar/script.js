const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLink = document.getElementsByClassName("navbar-link")[0];

console.log(navbarLink);

toggleButton.addEventListener("click", () => {
  navbarLink.classList.toggle("active");
});
