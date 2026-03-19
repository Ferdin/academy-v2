document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle i");
  const menu = document.querySelector(".nav-menu");

  toggle.parentElement.addEventListener("click", function () {
    menu.classList.toggle("active");

    // switch icon
    if (menu.classList.contains("active")) {
      toggle.classList.remove("bi-list");
      toggle.classList.add("bi-x");
    } else {
      toggle.classList.remove("bi-x");
      toggle.classList.add("bi-list");
    }
  });
});
