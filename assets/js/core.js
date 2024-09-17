document.addEventListener("click", function (event) {
  const div = document.getElementById("outside-click");
  const navbarText = document.getElementById("navbarText");
  if (!div.contains(event.target)) {
    navbarText.classList.remove("show");
  }
});
 