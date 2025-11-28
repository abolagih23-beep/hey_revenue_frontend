// Auto-detect API base URL
const API_BASE_URL = window.location.hostname === "localhost" 
    ? "http://localhost:5000"
    : "https://heuristics-backend.onrender.com";   // <-- your Render backend URL

function postData(endpoint, data) {
    return fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .catch(err => {
        console.error("POST request failed:", err);
        return { success: false, message: err.message };
    });
}
