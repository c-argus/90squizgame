var highScoresList = document.getElementById('highScoresList')
var scores = JSON.parse(localStorage.getItem('scores')) || []
console.log(scores);

highScoresList.innerHTML = 
scores.map(score => {
    return `<li class="high-score">${scoreText.name} - ${scoreText.score}</li>`
}).join('')