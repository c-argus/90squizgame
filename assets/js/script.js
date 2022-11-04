const question = document.querySelector('#question');
const answer = Array.from(document.querySelector('.answer-text'));
const progressNumber = document.querySelector('#progressNumber');
const scoreText = document.querySelector('#total-score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availabeQuestions= []

let question = [
    {
        question: 'Tamagotchi’s were all the rage in the 1990’s. But what do the two Japanese words translate to?',
        choice1: 'Rice and Beans',
        choice2: 'Salt and Vinegar',
        choice3: 'Egg and Friend',
        choice4: 'Eletronic and Friend',
        answer: 3,
    },
]