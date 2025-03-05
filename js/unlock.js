const text = document.getElementById("hidden-text");
text.style.display = "none";

document.addEventListener("scroll", () => {
    text.style.display = "block";
    text.classList.add("bounce");
});
