const question = document.querySelector('#question');
const answer = Array.from(document.querySelector('.answer-text'));
const progressNumber = document.querySelector('#progressNumber');
const scoreText = document.querySelector('#total-score');
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
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        option1: 'Rice and Beans',
        option2: 'Salt and Vinegar',
        option3: 'Egg and Friend',
        option4: 'Eletronic and Friend',
        answer: 3,
    },
]