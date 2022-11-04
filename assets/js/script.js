var question = document.getElementById('question');
var answerText = Array.from(document.getElementsByClassName('answer-text'));
var progressNumber = document.getElementById('progressNumber');
var scoreText = document.getElementById('main-score');
var progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let MyQuestions = [
    {
        question: "Which video game was the first video game played in space during the 1990’s?",
        option1: "Pac Man",
        option2: "Tetris",
        option3: "Uno",
        option4: "Super Mario",
        answer: 2,
    },
    {
        question: "Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?",
        option1: "Rice and Beans",
        option2: "Salt and Vinegar",
        option3: "Egg and Friend",
        option4: "Eletronic and Friend",
        answer: 3,
    },
    {
        question: "What was the name of the furry toy, popular throughout the 1990’s, that some people thought was spying on them?",
        option1: "Furby",
        option2: "Barbie",
        option3: "Ted",
        option4: "Care Bears",
        answer: 1,
    },
    {
        question: "The Channel Tunnel is an underwater tunnel that connects the UK and France. When was it opened?",
        option1: "1984",
        option2: "1994",
        option3: "1997",
        option4: "1988",
        answer: 2,
    },
    {
        question: "Mike Tyson infamously bit part of someone’s ear off in a boxing match in 1997. Who had their ear bitten by Tyson?",
        option1: "Muhammad Ali",
        option2: "Evander Holyfield",
        option3: "Roberto Duran",
        option4: "Rocky Balboa",
        answer: 2,
    },
    {
        question: "What was the most popular cellphone of the 1990’s?",
        option1: "iPhone",
        option2: "Siemens S10",
        option3: "Motorola StarTAC",
        option4: "Nokia 3210",
        answer: 4,
    },
    {
        question: "Casio made an iconic style of watch during the 1990’s. What was it called?",
        option1: "Super Illuminator",
        option2: "Royale",
        option3: "G-Shock",
        option4: "Calculator Watch",
        answer: 3,
    },
    {
        question: "What is the name of the accessory you would have worn on the outside of your jeans?",
        option1: "A wallet chain",
        option2: "A flannel shirt",
        option3: "A bandanna",
        option4: "Discman headphones",
        answer: 1,
    },
    {
        question: "Who released the chart-topping song Wannabe in 1996?",
        option1: "Spice Girls",
        option2: "Backstreet Boys",
        option3: "NSYNC",
        option4: "Enya",
        answer: 1,
    },
    {
        question: "What did the band REM end up losing in their 1991 single?",
        option1: "Their Faith",
        option2: "Their Fame",
        option3: "Their Voice",
        option4: "Their Religion",
        answer: 4,
    },
]

var ScorePoints = 100
var TotalQuestions = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...MyQuestions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > TotalQuestions) {
        localStorage.setItem('currentScore', score)

        return window.location.assign("/finishpage.html")
    }

    questionCounter++
    progressNumber.innerText = `Question ${questionCounter} of ${TotalQuestions}`
    progressBarFull.style.width = `${(questionCounter/TotalQuestions) * 100}%`

    const MyQuestionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[MyQuestionsIndex]
    question.innerText = currentQuestion.question

    answerText.forEach(option => {
        const number = option.dataset["number"]
        option.innerText = currentQuestion["option" + number]
    })

    availableQuestions.splice(MyQuestionsIndex, 1)

    acceptingAnswers = true
}

answerText.forEach(option => {
    option.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply == 'correct') {
            incrementScore(ScorePoints)
        }

        selectedOption.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()