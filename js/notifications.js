// Real-time notifications (polling every 5 seconds)
setInterval(() => {
    fetch("/api/notifications")
        .then(res => res.json())
        .then(data => {
            const container = document.querySelector("#notifications-panel");
            container.innerHTML = "";
            data.forEach(n => {
                const div = document.createElement("div");
                div.textContent = `${n.message} - ${n.timestamp}`;
                container.appendChild(div);
            });
        });
}, 5000);
