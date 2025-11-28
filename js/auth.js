document.getElementById("loginForm")?.addEventListener("submit", e => {
    e.preventDefault();
    if (validateForm("loginForm")) {
        postData("/api/login", {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }).then(data => {
            if (data.success) window.location.href = "/pages/dashboard.html";
            else alert("Login failed");
        });
    }
});
