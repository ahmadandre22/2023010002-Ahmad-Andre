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
const scoreDisplay = document.querySelector(".score");
const timerDisplay = document.querySelector(".timer");

let playerName = "";
let currentLevel = 0;
let totalLevels = levels.length;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let score = 0;
let timer = 60; // Default time for each question (seconds)

let levelScores = []; // Array to store scores for each level

function startGame() {
    playerName = playerNameInput.value.trim();
    if (playerName) {
        playerNameDisplay.textContent = playerName;
        document.querySelector(".player-info").style.display = "none";
        contentSection.style.display = "block";
        loadLevel(currentLevel);
        levelScores = new Array(totalLevels).fill(0); // Initialize level scores
    } else {
        alert("Masukkan nama pemain!");
    }
}

function loadLevel(level) {
    levelDisplay.textContent = `Level ${level + 1}`;
    const levelQuestions = levels[level];
    if (levelQuestions) {
        currentQuestionIndex = 0;
        scoreDisplay.textContent = score;
        displayQuestion(levelQuestions[currentQuestionIndex]);
        startTimer(); // Start timer at the beginning of each level
    } else {
        showResult(); // Player wins if all levels are completed
    }
}

function displayQuestion(questionObj) {
    questionElement.textContent = questionObj.question;
    optionsElement.innerHTML = "";
    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        const img = document.createElement("img");
        img.src = option.image;
        img.alt = option.text;
        button.appendChild(img);
        button.appendChild(document.createTextNode(option.text));
        button.addEventListener("click", () => checkAnswer(option.text, questionObj.answer));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Jawaban benar!");
        correctAnswers++;
        score += 10; // Add 10 points for correct answer
        scoreDisplay.textContent = score;
        levelScores[currentLevel] += 10; // Update level score
    } else {
        alert("Jawaban salah, coba lagi!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < levels[currentLevel].length) {
        displayQuestion(levels[currentLevel][currentQuestionIndex]);
        resetTimer(); // Reset timer for the next question
    } else {
        if (currentLevel < totalLevels - 1) {
            showNextButton();
        } else {
            showResult(); // Show final result if all questions are answered
        }
    }
}

function showNextButton() {
    nextButton.style.display = "block";
}

function nextLevel() {
    currentLevel++;
    nextButton.style.display = "none";
    loadLevel(currentLevel);
}

function showResult() {
    let levelSummary = "";
    let totalPoints = 0;
    
    for (let i = 0; i < totalLevels; i++) {
        levelSummary += `Level ${i + 1}: ${levelScores[i]} poin (${levels[i].length} soal)\n`;
        totalPoints += levelScores[i];
    }

    // Display result using alert
    alert(
        `Selamat ${playerName},\n` +
        `Anda menjawab ${correctAnswers} pertanyaan dengan benar\n` +
        `Skor akhir Anda adalah ${totalPoints}\n\n` +
        `Rekap Skor:\n` +
        `${levelSummary}\n` +
        `Terima kasih telah bermain!`
    );

    stopTimer(); // Stop timer when the game is over
}

// Timer
let timerInterval;
function startTimer() {
    timer = 60; // Reset timer to 60 seconds
    timerDisplay.textContent = timer;
    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            alert("Waktu habis!");
            clearInterval(timerInterval);
            currentQuestionIndex++;
            if (currentQuestionIndex < levels[currentLevel].length) {
                displayQuestion(levels[currentLevel][currentQuestionIndex]);
                resetTimer(); // Reset timer for the next question
            } else {
                if (currentLevel < totalLevels - 1) {
                    showNextButton();
                } else {
                    showResult(); // Show final result if all questions are answered
                }
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    startTimer(); // Restart timer for the next question
}

function stopTimer() {
    clearInterval(timerInterval);
}

startGameButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextLevel);
resetButton.addEventListener("click", resetGame);
