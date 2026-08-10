const setupMenuToggle = () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (!(menuToggle instanceof HTMLElement) || !(menu instanceof HTMLElement)) {
    return;
  }

  if (menuToggle.dataset.navbarSetup === "true") {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menuToggle.dataset.navbarSetup = "true";
};

const closeMenu = () => {
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");

  if (menu instanceof HTMLElement) {
    menu.classList.remove("open");
  }

  if (menuToggle instanceof HTMLElement) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupMenuToggle();
});

document.addEventListener("astro:after-swap", () => {
  closeMenu();
  setupMenuToggle();
});