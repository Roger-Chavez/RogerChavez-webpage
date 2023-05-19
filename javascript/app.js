// Function to set the theme
function setTheme(theme) {
  const body = document.body;

  // Toggle the class based on the selected theme
  if (theme === "night-mode") {
    body.classList.add("night-mode");
  } else {
    body.classList.remove("night-mode");
  }

  // Save the selected theme in a cookie
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// Function to toggle the theme
function toggleTheme() {
  const body = document.body;

  // Check the current theme and toggle to the opposite
  if (body.classList.contains("night-mode")) {
    setTheme("light-mode");
  } else {
    setTheme("night-mode");
  }
}

// Check if a theme cookie exists
const themeCookie = document.cookie.replace(
  /(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

// Set the theme based on the existing cookie value
if (themeCookie === "night-mode") {
  setTheme("night-mode");
} else {
  setTheme("light-mode");
}

// Add event listener to the theme toggle button
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleTheme);
