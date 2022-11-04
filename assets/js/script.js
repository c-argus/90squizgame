const question = document.querySelector('#question');
const answer = Array.from(document.querySelector('.answer-text'));
const progressNumber = document.querySelector('#progressNumber');
const scoreText = document.querySelector('#main-score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availabeQuestions = []

let question = [
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

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    tscore
}