/*jshint esversion: 6 */
// define correct version of ecmascript for jshint

const question = document.querySelector('.question');
const answerText = Array.from(document.querySelectorAll('.answer-text'));

const gameArea = document.getElementById('game-area');
const scoreText = document.querySelector('.main-score');
const toggleAudioEl = document.getElementById("audio-toggle");
const progressNumber = document.getElementById('progressNumber');
const progressBarFull = document.getElementById('progressBarFull');
const finishedMessage = document.querySelector('.finished-message');

let audioOn = true;
let currentQuestion = {};
let acceptingAnswers = true;
let currentScore = 0;
let questionCounter = 0;
let availableQuestions = [];

const MAX_SCORE_POINTS = 100;
const TOTAL_QUESTIONS = 10;

const successAudio = new Audio('assets/audioClips/correctAnswer.wav');
const failureAudio = new Audio('assets/audioClips/wrongAnswer.wav');
const completedAudio = new Audio('assets/audioClips/completedAudio.wav');

function toggleAudio() {
    audioOn = !audioOn;
    localStorage.setItem('audioOn', audioOn);
}

toggleAudioEl.addEventListener("click", toggleAudio);

startGame = () => {
    questionCounter = 0;
    availableQuestions = [...MyQuestions];
    getNewQuestion();
};

function updateProggresionBar(questionCounter) {
    progressNumber.innerText = `Question ${questionCounter} of ${TOTAL_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / 10) * 100}%`;
}

//
function showFinalMessage() {
    gameArea.classList.add("hidden");
    finishedMessage.classList.add("finished");
}

// redirect to a html page with a delay
// page = String eg: 'index'
// delay = Number of miliseconds eg: 2000
function redirectTo(page) {
    window.location.assign(page+'.html');
}

function redirectToWithDelay(page, delay) {
    setTimeout(() => redirectTo(page), delay);
}

getNewQuestion = () => {
    const MyQuestionsIndex = Math.floor(Math.random() * availableQuestions.length);

    if (availableQuestions.length === 0 || questionCounter >= TOTAL_QUESTIONS) {
        localStorage.setItem('currentScore', currentScore);
        showFinalMessage();
        redirectToWithDelay("finishpage", 2000);
        // Wait 2 seconds and redirects to finishpage.html

        completedAudio.play();
    }

    if (!progressNumber) return;

    scoreText.innerText = currentScore.toString();
    questionCounter += 1;
    updateProggresionBar(questionCounter);
    currentQuestion = availableQuestions[MyQuestionsIndex];

    if (currentQuestion) {
        question.innerText = currentQuestion.question;
        answerText.forEach(option => {
            const availableAnswers = currentQuestion.options;
            const randomAnswer = Math.floor(Math.random() * availableAnswers.length);
            option.innerText = currentQuestion.options[randomAnswer];
            availableAnswers.splice(randomAnswer, 1);
        });
    }

    availableQuestions.splice(MyQuestionsIndex, 1);

    acceptingAnswers = true;
};

answerText.forEach(option => {
    option.addEventListener("click", event => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = event.target;
        const selectedAnswer = selectedOption.innerHTML;

        let classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply == 'correct') {
            incrementScore(MAX_SCORE_POINTS);
            if (audioOn) {
                failureAudio.pause();
                successAudio.currentTime=0;
                successAudio.play();
            }
        } else {
            if (audioOn) {
                failureAudio.currentTime=0;
                successAudio.pause();
                failureAudio.play();
            }
        }

        selectedOption.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);
    });
});

incrementScore = num => {
    currentScore += num;
};

startGame();