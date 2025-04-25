window.addEventListener("DOMContentLoaded", () => {
  const logoImg = document.querySelector(".navbar-brand-logo img");
  if (!logoImg) return;

  const darkLogo = "_static/logo-light.png";
  const lightLogo = "_static/logo-dark.png";

  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  logoImg.src = isDark ? darkLogo : lightLogo;

  // Optional: react to changes in system theme
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    logoImg.src = e.matches ? darkLogo : lightLogo;
  });
});

