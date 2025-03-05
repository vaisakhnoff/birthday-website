document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.2)";
        img.style.transition = "0.3s";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
