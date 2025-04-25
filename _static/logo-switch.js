window.addEventListener("DOMContentLoaded", () => {
  // Dynamically find the base URL of _static (e.g., ../../_static/)
  const staticBase = document.querySelector("script[src*='_static/logo-switch.js']")
    ?.getAttribute("src")
    ?.split("/logo-switch.js")[0] || "_static";

  const darkLogo = `${staticBase}/logo-dark.png`;   // for light theme
  const lightLogo = `${staticBase}/logo-light.png`;   // for dark theme

  const lightImg = document.querySelector("img.logo__image.only-light");
  const darkImg = document.querySelector("img.logo__image.only-dark");

  if (lightImg) lightImg.src = lightLogo;
  if (darkImg) darkImg.src = darkLogo;
});

