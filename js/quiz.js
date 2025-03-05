\const questions = [
    { question: "What’s my favorite food?", answer: "Biryani" },
    { question: "Where did we first meet?", answer: "College" },
    { question: "Who loves whom more? (Hint: You 😜)", answer: "Me" }
];

let index = 0;
const quizContainer = document.getElementById("quiz-container");

function displayQuestion() {
    if (index < questions.length) {
        quizContainer.innerHTML = `<p>${questions[index].question}</p>
            <input type="text" id="answer">
            <button onclick="checkAnswer()">Submit</button>`;
    } else {
        quizContainer.innerHTML = `<h2>🎉 You got all correct! You are the best! ❤️</h2>`;
    }
}

function checkAnswer() {
    const answer = document.getElementById("answer").value;
    if (answer.toLowerCase() === questions[index].answer.toLowerCase()) {
        alert("Correct! 🎉 Next question!");
        index++;
        displayQuestion();
    } else {
        alert("Oops! Try again! 😜");
    }
}

displayQuestion();
