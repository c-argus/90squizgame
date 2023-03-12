var nickname = document.getElementById('nickname');
var scorebtn = document.getElementById('scorebtn');
var finalScore = document.getElementById('finalScore');
var scores = JSON.parse(localStorage.getItem('scores')) || [];
var currentScore = localStorage.getItem('currentScore');
let audioState = localStorage.getItem('audioOn');
var maxHighScores = 5;
var completedAudio = new Audio('assets/audioClips/completedAudio.wav');

// Display final score
finalScore.innerText = currentScore.toString();

// Enable the score submit button only if the nickname field has a value
nickname.addEventListener('keyup', () => { // from the video
    scorebtn.disabled = !nickname.value;     // from the video
});

// Function to save the score and name to local storage
saveScore = e => {        // from the video
    e.preventDefault();     // from the video

    const scoreText = {     // from the video
        scoreText: currentScore, // from the video
        name: nickname.value,   // from the video
    };

    // Add new score to the scores array
    scores.push(scoreText); // from the video

    // Sort scores array in descending order based on scoreText property
    scores.sort((a,b) => {          // from the video
        return b.scoreText - a.scoreText;  // from the video
    });

    scores.splice(5); // from the video
    // Store scores array in local storage
    localStorage.setItem('scores', JSON.stringify(scores)); // from the video
    // Redirect to scores page after saving score
    window.location.assign('./scorespage.html'); // from the video
};