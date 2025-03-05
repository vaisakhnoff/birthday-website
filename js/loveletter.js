const letter = document.querySelector(".love-text");
letter.style.opacity = 0;
letter.style.transform = "translateY(20px)";
setTimeout(() => {
    letter.style.opacity = 1;
    letter.style.transform = "translateY(0)";
    letter.style.transition = "1s ease-out";
}, 1000);
