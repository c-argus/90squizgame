var highScoresList = document.getElementById('highScoresList')
var scores = JSON.parse(localStorage.getItem('scores')) || []

highScoresList.innerHTML = // from the video
scores.map(score => {   // from the video
    return `<li class="high-score">${score.name} - ${score.scoreText}</li>`   // from the video
}).join('') // from the video