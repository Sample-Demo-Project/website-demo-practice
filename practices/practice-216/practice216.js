const systemstatus = "maintenance";
if (systemstatus === "normal") {
    const status = document.getElementById("status-normal");
    status.style.display = "block";
}
else if (systemstatus === "maintenance") {
    const status = document.getElementById("status-maintenance");
    status.style.display = "block";
}
else if (systemstatus === "closed") {
    const status = document.getElementById("status-closed");
    status.style.display = "block";
}