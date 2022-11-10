var question = document.getElementById('question')
var answerText = Array.from(document.getElementsByClassName('answer-text'))
var progressNumber = document.getElementById('progressNumber')
var scoreText = document.getElementById('main-score')
var progressBarFull = document.getElementById('progressBarFull')
let toggleAudio = document.getElementById("audio-toggle")
var gameArea = document.getElementById('game-area')
var finishedMessage = document.getElementById('finished-message')
let audioOn = true
let currentQuestion = {}
let acceptingAnswers = true
let currentScore = 0
let questionCounter = 0
let availableQuestions = []
var successAudio = new Audio('assets/audioClips/correctAnswer.wav')
var failureAudio = new Audio('assets/audioClips/wrongAnswer.wav')
var completedAudio = new Audio('assets/audioClips/completedAudio.wav')

var ScorePoints = 100
let TotalQuestions = 10

toggleAudio.addEventListener("click", e => {
    audioOn = !audioOn

    if (audioOn = false) {
        (completedAudio) = true
    } else {
        (completedAudio) = false
    }
})

startGame = () => {
    questionCounter = 0
    availableQuestions = [...MyQuestions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= TotalQuestions) {
        localStorage.setItem('currentScore', currentScore)
        gameArea.classList.add("hidden");
        finishedMessage.innerHTML = "<h3>Thanks for playing!</h3>"
        finishedMessage.classList.add("finished");
        setTimeout(() => {
            return window.location.assign("finishpage.html")
        }, 2000)
        completedAudio.play()
    }

    if (!progressNumber) {
        return
    }
    localStorage.setItem('audioOn', audioOn)
    scoreText.innerText = currentScore.toString()
    questionCounter++
    progressNumber.innerText = `Question ${questionCounter} of ${TotalQuestions}`
    progressBarFull.style.width = `${(questionCounter/10) * 100}%`

    const MyQuestionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[MyQuestionsIndex]

    if (currentQuestion) {
        question.innerText = currentQuestion.question
        answerText.forEach(option => {
            const availableAnswers = currentQuestion["options"]
            const randomAnswer = Math.floor(Math.random() * availableAnswers.length)
            option.innerText = currentQuestion["options"][randomAnswer]
            availableAnswers.splice(randomAnswer, 1)
        })
    }

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
            if (audioOn) {
                failureAudio.pause()
                successAudio.currentTime=0
                successAudio.play()
            }
        } else {
            if (audioOn) {
                failureAudio.currentTime=0
                successAudio.pause()
                failureAudio.play()
            }
        }

        selectedOption.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 500)
    })
})

incrementScore = num => {
    currentScore += num
}

startGame()