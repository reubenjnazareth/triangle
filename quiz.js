const quizForm = document.querySelector(".quiz-form");
const submitAnsButton  = document.querySelector("#submit-ans-btn");
const outputElement = document.querySelector("#output");


const correctAnswers = ["3", "180", "All sides equal", "3", "Two sides equal", "Scaler Triangle"];

function calcScore() {
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizForm);
        for (let value of formResults.values()) {
            if(value === correctAnswers[i]) {
                score++;
            }
            i++;
        }
    outputElement.innerText = "Score is " + score;

}

submitAnsButton.addEventListener("click", calcScore);

