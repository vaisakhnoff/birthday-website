let holdTimer;
document.getElementById("holdButton").addEventListener("mousedown", function() {
    holdTimer = setTimeout(() => {
        document.getElementById("surpriseMessage").style.display = "block";
    }, 3000);
});
document.getElementById("holdButton").addEventListener("mouseup", function() {
    clearTimeout(holdTimer);
});
