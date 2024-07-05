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
let timer = 15; // Waktu default untuk setiap pertanyaan (detik)

console.log("Script loaded"); // Log untuk memastikan skrip berjalan

function startGame() {
    playerName = playerNameInput.value.trim();
    console.log("Start Game clicked, playerName:", playerName); // Log untuk memastikan event listener bekerja
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
    console.log("Muat Level:", level, "Pertanyaan:", levelQuestions); // Log untuk memastikan level dan pertanyaan dimuat
    if (levelQuestions) {
        currentQuestionIndex = 0;
        score = 0; // Reset skor di setiap level baru
        scoreDisplay.textContent = score;
        displayQuestion(levelQuestions[currentQuestionIndex]);
        startTimer(); // Mulai timer di awal setiap level
    } else {
        showResult(true); // Pemain menang jika semua level diselesaikan
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
    console.log("Tampilkan Pertanyaan:", questionObj.question); // Log untuk memastikan pertanyaan ditampilkan
}

function checkAnswer(selected, correct) {
    console.log("Jawaban yang dipilih:", selected, "Jawaban yang benar:", correct); // Log untuk memastikan jawaban telah diperiksa
    if (selected === correct) {
        alert("Jawaban benar!");
        correctAnswers++;
        score += 10; // Tambah skor 10 poin untuk jawaban benar
        scoreDisplay.textContent = score;
        currentQuestionIndex++;
        if (currentQuestionIndex < levels[currentLevel].length) {
            displayQuestion(levels[currentLevel][currentQuestionIndex]);
            resetTimer(); // Reset timer untuk pertanyaan berikutnya
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
        showResult(true); // Pemain menang jika semua pertanyaan dijawab dengan benar
    }
}

function nextLevel() {
    currentLevel++;
    nextButton.style.display = "none";
    loadLevel(currentLevel);
}

function showResult(win) {
    console.log("Tampilkan Hasil, Menang:", win); // Log untuk memastikan hasil yang ditampilkan
    contentSection.style.display = "none";
    resultDisplay.style.display = "block";
    resultDisplay.innerHTML = win ? 
        `<p>Selamat <strong>${playerName}</strong>, Anda menang dengan ${correctAnswers} jawaban benar dan skor ${score}! 🎉</p><p>Terima kasih telah bermain!</p>` :
        `<p>Maaf <strong>${playerName}</strong>, Anda kalah! 😔</p><p>Silakan coba lagi.</p>`;
    stopTimer(); // Hentikan timer saat permainan berakhir
}

// Timer
let timerInterval;
function startTimer() {
    timer = 60; // Reset timer ke 60 detik
    timerDisplay.textContent = timer;
    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            alert("Waktu habis!");
            showResult(false); // Pemain kalah jika waktu habis
            clearInterval(timerInterval);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    startTimer(); // Mulai timer ulang untuk pertanyaan berikutnya
}

function stopTimer() {
    clearInterval(timerInterval);
}

startGameButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextLevel);
resetButton.addEventListener("click", () => {
    location.reload();
});