var nickname = document.getElementById('nickname');
var scorebtn = document.getElementById('scorebtn');
var finalScore = document.getElementById('finalScore');
var scores = JSON.parse(localStorage.getItem('scores')) || [];
var currentScore = localStorage.getItem('currentScore');
let audioState = localStorage.getItem('audioOn');
var maxHighScores = 5;
var completedAudio = new Audio('assets/audioClips/completedAudio.wav');

finalScore.innerText = currentScore.toString();

nickname.addEventListener('keyup', () => { // from the video
    scorebtn.disabled = !nickname.value;     // from the video
});

saveScore = e => {        // from the video
    e.preventDefault();     // from the video

    const scoreText = {     // from the video
        scoreText: currentScore, // from the video
        name: nickname.value,   // from the video
    };

    scores.push(scoreText); // from the video

    scores.sort((a,b) => {          // from the video
        return b.scoreText - a.scoreText;  // from the video
    });

    scores.splice(5); // from the video
    localStorage.setItem('scores', JSON.stringify(scores)); // from the video
    window.location.assign('./scorespage.html'); // from the video
};