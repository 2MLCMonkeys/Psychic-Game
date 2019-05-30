var guessAletter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var letterGuess = document.getElementById('current-guess');

var pastGuesses = document.getElementById('past-guesses');

var turnsLeft = document.getElementById('tries');

var wins = document.getElementById('user-wins');

var losses = document.getElementById('user-losses');

var scoreWin = 0;
var scoreLoss = 0;
var guessCounter = 10;



document.onkeyup = function(event){
    var letter = event.key;
    var computerLetter = guessAletter
    [Math.floor(Math.random() *
        guessAletter.length)];

        if(letter === "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"){
            letterGuess.textContent = event.key;
        }
}