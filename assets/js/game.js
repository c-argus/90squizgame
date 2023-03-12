var question = document.getElementById('question');
var answerText = Array.from(document.getElementsByClassName('answer-text'));
var progressNumber = document.getElementById('progressNumber');
var scoreText = document.getElementById('main-score');
var progressBarFull = document.getElementById('progressBarFull');
let toggleAudio = document.getElementById("audio-toggle");
var gameArea = document.getElementById('game-area');
var finishedMessage = document.getElementById('finished-message');
let audioOn = true;
let currentQuestion = {};
let acceptingAnswers = true;
let currentScore = 0;
let questionCounter = 0;
let availableQuestions = [];
var successAudio = new Audio('assets/audioClips/correctAnswer.wav');
var failureAudio = new Audio('assets/audioClips/wrongAnswer.wav');
var completedAudio = new Audio('assets/audioClips/completedAudio.wav');

var ScorePoints = 100;
let TotalQuestions = 10;

toggleAudio.addEventListener("click", e => {
    audioOn = !audioOn;

    if (audioOn = false) {
        (completedAudio) = true;
    } else {
        (completedAudio) = false;
    }
});

// from the video
startGame = () => {
    questionCounter = 0;
    availableQuestions = [...MyQuestions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= TotalQuestions) { // from the video
        localStorage.setItem('currentScore', currentScore); // from the video
        gameArea.classList.add("hidden");
        finishedMessage.innerHTML = "Thanks for playing!";
        finishedMessage.classList.add("finished");
        setTimeout(() => {
            return window.location.assign("finishpage.html"); // from the video
        }, 2000);
        completedAudio.play();
    }

    if (!progressNumber) {
        return;
    }
    localStorage.setItem('audioOn', audioOn);
    scoreText.innerText = currentScore.toString();
    questionCounter++; // from the video
    progressNumber.innerText = `Question ${questionCounter} of ${TotalQuestions}`; // from the video
    progressBarFull.style.width = `${(questionCounter/10) * 100}%`; // from the video

    const MyQuestionsIndex = Math.floor(Math.random() * availableQuestions.length); // from the video
    currentQuestion = availableQuestions[MyQuestionsIndex];

    if (currentQuestion) {
        question.innerText = currentQuestion.question;
        answerText.forEach(option => {
            const availableAnswers = currentQuestion["options"];
            const randomAnswer = Math.floor(Math.random() * availableAnswers.length);
            option.innerText = currentQuestion["options"][randomAnswer];
            availableAnswers.splice(randomAnswer, 1);
        });
    }

    availableQuestions.splice(MyQuestionsIndex, 1); // from the video

    acceptingAnswers = true; // from the video
};

answerText.forEach(option => {                          // from the video
    option.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;                          // from the video
        const selectedOption = e.target;                      // from the video
        const selectedAnswer = selectedOption.innerHTML;          // from the video

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';  // from the video

        if (classToApply == 'correct') {    // from the video
            incrementScore(ScorePoints);       // from the video
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

        selectedOption.parentElement.classList.add(classToApply); // from the video

        setTimeout(() => {                                             // from the video
            selectedOption.parentElement.classList.remove(classToApply);  // from the video
            getNewQuestion();                                         // from the video
        }, 500);
    });
});

incrementScore = num => {  // from the video
    currentScore += num;   // from the video
};

startGame();  // from the video