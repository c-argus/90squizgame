var nickname = document.getElementById('nickname')
var scorebtn = document.getElementById('scorebtn')
var finalScore = document.getElementById('nickname')
var currentScore = document.getElementById('currentScore')

var scores = JSON.parse(localStorage.getItem('scores')) || []

var maxHighScores = 5

finalScore.innerText = currentScore

nickname.addEventListener('keyup', () => {
    scorebtn.disabled = !nickname.value 
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: currentScore,
        name: nickname.value
    }

    scores.push(score)

    scores.sort(a,b) => {
        return b.score - a.score
    }

    scores.splice(5)
    localStorage.setItem('scores', JSON.stringify(scores))
    window.location.assign('/index.html')
}