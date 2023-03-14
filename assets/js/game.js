/*jshint esversion: 6 */
// define correct version of ecmascript for jshint

// get all necessary DOM element references
const question = document.querySelector('.question');
const answerText = Array.from(document.querySelectorAll('.answer-text'));

const gameAreaElement = document.querySelector('.game-area');
const scoreTextElement = document.querySelector('.main-score');
const toggleAudioElement = document.querySelector('.audio-toggle-checkbox');
const progressNumberElement = document.querySelector('.progress-number');
const progressBarFullElement = document.querySelector('.progress-bar-full');
const finishedMessageElement = document.querySelector('.finished-message');

// define application variables
let audioOn = true;
let currentQuestion = {};
let acceptingAnswers = true;
let currentScore = 0;
let questionCounter = 0;
let availableQuestions = [];

// define application constants
const MAX_SCORE_POINTS = 100;
const TOTAL_QUESTIONS = 10;

// create audio instances for each audio file
const successAudio = new Audio('assets/audioClips/correctAnswer.wav');
const failureAudio = new Audio('assets/audioClips/wrongAnswer.wav');
const completedAudio = new Audio('assets/audioClips/completedAudio.wav');

 /**
 * Increment score according to increment value.
 * @constructor
 * @param {integer} increment - increment value.
 */
const incrementScore = (increment) => {
    currentScore += increment;
};

 /**
 * Define initial state for the game.
 * @constructor
 */
 const startGame = () => {
    questionCounter = 0;
    availableQuestions = [...MyQuestions];
    loadNextQuestion();
};

 /**
 * Show finished message and redirect to finish page.
 * @constructor
 */
const finishGame = () => {
    localStorage.setItem('currentScore', currentScore);
    showFinalMessage();
    redirectToWithDelay("finishpage", 2000);
    // Wait 2 seconds and redirects to finishpage.html

    if (audioOn) completedAudio.play();
}

 /**
 * Check if the game ended.
 * @constructor
 */
const shouldFinishPlaying = () => {
    return availableQuestions.length === 0 || questionCounter >= TOTAL_QUESTIONS
} 

 /**
 * Load the next question
 * @constructor
 */
const loadNextQuestion = () => {
    const MyQuestionsIndex = Math.floor(Math.random() * availableQuestions.length);

    scoreTextElement.innerText = currentScore.toString();
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

 /**
 * Toggle audio state.
 * @constructor
 */
function toggleAudio() {
    audioOn = !audioOn;
    localStorage.setItem('audioOn', audioOn);
}

// add click event to toggle audio
toggleAudioElement.addEventListener("click", toggleAudio);



 /**
 * Updates progress bar size and text accordingly to the question.
 * @constructor
 * @param {integer} question counter - current question position.
 */
function updateProggresionBar(questionCounter) {
    // update text with question counter
    progressNumberElement.innerText = `Question ${questionCounter} of ${TOTAL_QUESTIONS}`;
    // update progress bar size accordingly to the question
    progressBarFullElement.style.width = `${(questionCounter / 10) * 100}%`;
}

 /**
 * Hide the game area and display final message.
 * @constructor
 */
function showFinalMessage() {
    gameAreaElement.classList.add("hidden");
    finishedMessageElement.classList.add("finished");
}

 /**
 * Redirect to specific page.
 * @constructor
 * @param {string} page - target page name.
 */
function redirectTo(page) {
    window.location.assign(page+'.html');
}

 /**
 * Redirects with a delay.
 * @constructor
 * @param {string} page - target page name.
 * @param {integer} delay - delay time in milliseconds.
 */
function redirectToWithDelay(page, delay) {
    setTimeout(() => redirectTo(page), delay);
}



// create click event for each answer
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
            if (shouldFinishPlaying()) {
                finishGame()
            } else {
                loadNextQuestion();
            }
        }, 500);
    });
});



startGame();