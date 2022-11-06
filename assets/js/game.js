var question = document.getElementById('question');
var answerText = Array.from(document.getElementsByClassName('answer-text'));
var progressNumber = document.getElementById('progressNumber');
var scoreText = document.getElementById('main-score');
var progressBarFull = document.getElementById('progressBarFull');
let toggleButton = document.getElementById("audio-toggle");
let currentQuestion = {}
let acceptingAnswers = true
let currentScore = 0
let questionCounter = 0
let availableQuestions = []
var successAudio = new Audio('/assets/audioClips/correctAnswer.wav');
var failureAudio = new Audio('/assets/audioClips/wrongAnswer.wav');

var ScorePoints = 100
let TotalQuestions = 10

console.log(MyQuestions);

startGame = () => {
    questionCounter = 0
    // score = 0
    availableQuestions = [...MyQuestions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > TotalQuestions) {
        localStorage.setItem('currentScore', currentScore);

        return window.location.assign("finishpage.html")
    }

    if (!progressNumber) {
        return;
    }
    scoreText.innerText = currentScore.toString();
    questionCounter++
    progressNumber.innerText = `Question ${questionCounter} of ${TotalQuestions}`
    progressBarFull.style.width = `${(questionCounter/TotalQuestions) * 100}%`

    const MyQuestionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[MyQuestionsIndex]
    console.log(currentQuestion);
    question.innerText = currentQuestion.question

    answerText.forEach(option => {
        const availableAnswers = currentQuestion["options"]
        const randomAnswer = Math.floor(Math.random() * availableAnswers.length)
        option.innerText = currentQuestion["options"][randomAnswer]
        availableAnswers.splice(randomAnswer, 1)
    })

    availableQuestions.splice(MyQuestionsIndex, 1)

    acceptingAnswers = true
}

answerText.forEach(option => {
    option.addEventListener("click", e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.innerHTML

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply == 'correct') {
            incrementScore(ScorePoints)
            successAudio.play()
        } else {
            failureAudio.play()
        }

        selectedOption.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 500)
    })
})

incrementScore = num => {
    currentScore += num;
    // console.log(currentScore);
}

startGame()