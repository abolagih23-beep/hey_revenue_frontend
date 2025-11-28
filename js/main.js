// Dark/Light theme toggle
const themeToggle = document.querySelector("#theme-toggle");
themeToggle?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
});

// Role-based UI
function applyRoleUI(role) {
    const adminElements = document.querySelectorAll(".role-admin");
    const supervisorElements = document.querySelectorAll(".role-supervisor");

    adminElements.forEach(el => el.style.display = role === "Admin" ? "block" : "none");
    supervisorElements.forEach(el => el.style.display = role === "Supervisor" ? "block" : "none");
}

// Fetch user role from backend
fetch("/api/profile")
    .then(res => res.json())
    .then(data => applyRoleUI(data.role));
