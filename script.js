document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const animateBtn = document.getElementById("animateBtn");
    const demoImage = document.getElementById("demoImage");
  
    // Apply saved theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  
    // Toggle Theme and store in localStorage
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
    });
  
    // Trigger image animation
    animateBtn.addEventListener("click", () => {
      demoImage.classList.add("animate");
  
      // Remove class after animation ends (to allow re-trigger)
      setTimeout(() => {
        demoImage.classList.remove("animate");
      }, 600); // Match with CSS duration
    });
  });
  