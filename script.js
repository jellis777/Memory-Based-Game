const difficultySelect = document.querySelector('select');
const number = document.getElementById("number");
const newNumberBtn = document.querySelector(".new-number")
const userInput = document.querySelector("#guess");
const scoreUpdate = document.querySelector(".scoreNum");
const submitBtn = document.querySelector(".submit")
const resultMsg = document.querySelector("#result")
const startOverBtn = document.querySelector("#start-over")

function randomNumber(number) {
    return  Math.floor(Math.random() * number)
}

let currentNumber = null;
let score = 0;

function generateNumber(difficulty) {
    
if (difficulty === "easy") {
     currentNumber= randomNumber(10000);
} else if (difficulty === "medium") {
     currentNumber = randomNumber(1000000);
} else if (difficulty === "hard") {
    currentNumber = randomNumber(100000000);
}
    number.innerHTML = currentNumber.toString()
}

newNumberBtn.addEventListener("click", function() {
    generateNumber(difficultySelect.value)})
userInput.addEventListener("input", function() {
    number.innerHTML = '   ';
})

submitBtn.addEventListener("click", giveResults);
startOverBtn.addEventListener("click", function() {
    scoreUpdate.innerHTML = "0";
    resultMsg.innerHTML = "";
})

function giveResults() {
    let answer = userInput.value;
    if (answer === currentNumber.toString()) {
        score++;
        scoreUpdate.innerHTML = score.toString();
        resultMsg.innerHTML = `You got it correct!`
    } else {
        resultMsg.innerHTML = `Not correct!`
    }
    userInput.value ="";
}

