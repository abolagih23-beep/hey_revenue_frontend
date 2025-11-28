// Chart.js integration
const ctx = document.getElementById("analyticsChart").getContext("2d");
const analyticsChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Revenue",
            data: [1200, 1900, 3000, 5000, 4000],
            borderColor: "#4e73df",
            fill: false
        }]
    },
    options: { responsive: true }
});
