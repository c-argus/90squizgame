var highScoresList = document.getElementById('highScoresList')
var scores = JSON.parse(localStorage.getItem('scores')) || []

highScoresList.innerHTML = 
scores.map(score => {
    return `<li class="high-score">${scoreText.name} - ${scoreText.score}</li>`
}).join('')