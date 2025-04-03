document.addEventListener("DOMContentLoaded", () => {
    fetch("/portfolio/assets/components/navbar.html")
      .then((res) => res.text())
      .then((data) => {
        document.querySelector("header").innerHTML = data;
  
        // Theme toggle après l'injection
        const toggle = document.getElementById("themeToggle");
        const root = document.documentElement;
  
        toggle.addEventListener("click", () => {
          const current = root.getAttribute("data-theme");
          const newTheme = current === "dark" ? "light" : "dark";
          root.setAttribute("data-theme", newTheme);
        });
      });
  });
  