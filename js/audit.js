// Fetch audit logs with filtering
function fetchAuditLogs() {
    fetch("/api/audit_logs")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("auditLogsTable");
            container.innerHTML = "";
            data.forEach(log => {
                container.innerHTML += `<tr>
                    <td>${log.id}</td>
                    <td>${log.user_id}</td>
                    <td>${log.action}</td>
                    <td>${log.details}</td>
                    <td>${log.created_at}</td>
                </tr>`;
            });
        });
}
document.addEventListener("DOMContentLoaded", fetchAuditLogs);
