// Funny Random Love Messages
const loveMessages = [
    "You are the cutest human alive! 🥰",
    "Without you, my world is a mess! 🌍❤️",
    "You make my heart do a happy dance! 💃",
    "You deserve all the cake... but I’ll eat some too! 🎂😋",
    "You are my sunshine on a rainy day! ☀️🌧️"
];

// Apply Random Love Message on Load
window.onload = function () {
    const randomMsg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const title = document.querySelector("h1");
    if (title) {
        title.innerHTML = `🎉 ${randomMsg} 🎉`;
    }
};

// Confetti Effect on Click
document.addEventListener("click", function () {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎊";
    confetti.style.position = "fixed";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = "0";
    confetti.style.fontSize = "30px";
    confetti.style.animation = "fall 3s linear";
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
});

// Falling Confetti Animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);
