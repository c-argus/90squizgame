/*jshint esversion: 6 */
// define correct version of ecmascript for jshint

const nicknameElement = document.querySelector('.nickname');
const scorebtnElement = document.querySelector('.score-btn');
const finalScoreElement = document.querySelector('.final-score');

const scores = JSON.parse(localStorage.getItem('scores')) || [];
const scoreText = localStorage.getItem('currentScore');


const MAX_HIGH_SCORE = 5;

// Display final score
finalScoreElement.innerText = scoreText.toString();

// Enable the score submit button only if the nickname field has a value
nicknameElement.addEventListener('keyup', () => { // from the video
    scorebtnElement.disabled = !nicknameElement.value;     // from the video
});


// Function to save the score and name to local storage
const saveScore = (e) => {       
    e.preventDefault();    
    const name = nicknameElement.value;
    const score = {     
        scoreText, 
        name,  
    };

    // Add new score to the scores array
    scores.push(score); // from the video

    // Sort scores array in descending order based on scoreText property
    scores.sort((a,b) => b.scoreText - a.scoreText);

    scores.splice(MAX_HIGH_SCORE); 
    // Store scores array in local storage
    localStorage.setItem('scores', JSON.stringify(scores)); // from the video
    // Redirect to scores page after saving score
    window.location.assign('./scorespage.html'); // from the video
};
scorebtnElement.addEventListener('click', saveScore);