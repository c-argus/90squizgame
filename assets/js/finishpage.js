var nickname = document.getElementById('nickname');
var scorebtn = document.getElementById('scorebtn');
var finalScore = document.getElementById('finalScore');
var scores = JSON.parse(localStorage.getItem('scores')) || [];
var currentScore = localStorage.getItem('currentScore');
let audioState = localStorage.getItem('audioOn');
var maxHighScores = 5;
var completedAudio = new Audio('assets/audioClips/completedAudio.wav');

finalScore.innerText = currentScore.toString();

nickname.addEventListener('keyup', () => {
    scorebtn.disabled = !nickname.value; 
})

saveScore = e => {
    e.preventDefault();

    const scoreText = {
        scoreText: currentScore,
        name: nickname.value
    }

    scores.push(scoreText);

    scores.sort((a,b) => {
        return b.scoreText - a.scoreText;
    })

    scores.splice(5)
    localStorage.setItem('scores', JSON.stringify(scores));
    window.location.assign('./scorespage.html');
}