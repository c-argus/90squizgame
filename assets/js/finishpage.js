var nickname = document.getElementById('nickname')
var scorebtn = document.getElementById('score-btn')
var finalScore = document.getElementById('nickname')
var currentScore = document.getElementById('currentScore')

var scores = JSON.parse(localStorage.getItem('scores')) || []

