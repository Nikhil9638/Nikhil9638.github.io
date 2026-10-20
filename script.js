// Progressive enhancement only: the page is fully usable without JavaScript.
// Without it, the navigation links are always visible and simply wrap on small screens.

document.documentElement.classList.add("js");

// Mobile navigation: a disclosure button that shows and hides the link list.
(() => {
  const header = document.querySelector(".site-header");
  const toggle = header?.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!header || !toggle || !nav) return;

  const desktop = window.matchMedia("(min-width: 56.25rem)");
  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    header.toggleAttribute("data-nav-open", open);
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Close after choosing a destination.
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  // Escape closes and returns focus to the button.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Clicking or tabbing outside the header closes the menu.
  document.addEventListener("click", (event) => {
    if (isOpen() && !header.contains(event.target)) setOpen(false);
  });

  header.addEventListener("focusout", (event) => {
    if (isOpen() && event.relatedTarget && !header.contains(event.relatedTarget)) setOpen(false);
  });

  // Reset when the viewport grows to the desktop layout.
  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
})();
