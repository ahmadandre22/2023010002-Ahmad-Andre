const playerNameInput = document.getElementById("playerName");
const startGameButton = document.getElementById("startGame");
const contentSection = document.querySelector(".content");
const playerNameDisplay = document.querySelector(".player-name");
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const nextButton = document.querySelector(".next-btn");
const resetButton = document.querySelector(".reset-btn");
const levelDisplay = document.querySelector(".level");
const resultDisplay = document.querySelector(".result");

let playerName = "";
let currentLevel = 0;
let totalLevels = levels.length;
let currentQuestionIndex = 0;
let totalQuestionsPerLevel = 2; // Change this if more questions per level
let correctAnswers = 0;

function startGame() {
  playerName = playerNameInput.value.trim();
  if (playerName) {
    playerNameDisplay.textContent = playerName;
    document.querySelector(".player-info").style.display = "none";
    contentSection.style.display = "block";
    loadLevel(currentLevel);
  } else {
    alert("Masukkan nama pemain!");
  }
}

function loadLevel(level) {
  levelDisplay.textContent = `Level ${level + 1}`;
  const levelQuestions = levels[level];
  if (levelQuestions) {
    currentQuestionIndex = 0;
    displayQuestion(levelQuestions[currentQuestionIndex]);
  } else {
    showResult(true); // Player wins if all levels completed
  }
}

function displayQuestion(questionObj) {
  questionElement.textContent = questionObj.question;
  optionsElement.innerHTML = "";
  questionObj.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option, questionObj.answer));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("Jawaban benar!");
    correctAnswers++;
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestionsPerLevel) {
      displayQuestion(levels[currentLevel][currentQuestionIndex]);
    } else {
      showNextButton();
    }
  } else {
    alert("Jawaban salah, coba lagi!");
    showResult(false);
  }
}

function showNextButton() {
  if (currentLevel < totalLevels - 1) {
    nextButton.style.display = "block";
  } else {
    showResult(true); // Player wins if all questions answered correctly
  }
}

function nextLevel() {
  currentLevel++;
  nextButton.style.display = "none";
  loadLevel(currentLevel);
}

function showResult(win) {
  contentSection.style.display = "none";
  resultDisplay.style.display = "block";
  resultDisplay.textContent = win ? `Selamat ${playerName}, Anda menang dengan ${correctAnswers} jawaban benar! 🎉` : `Maaf ${playerName}, Anda kalah! 😔`;
}

startGameButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextLevel);
resetButton.addEventListener("click", () => {
  location.reload();
});
