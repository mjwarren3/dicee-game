// Setting variables

var randomNumber1 = 1 + Math.floor ( Math.random() * 5 )
var sourcename1 = "./images/dice" + randomNumber1 + ".png"

var randomNumber2 = 1 + Math.floor ( Math.random() * 6 )
var sourcename2 = "./images/dice" + randomNumber2 + ".png"

document.getElementsByClassName("img1")[0].setAttribute("src", sourcename1);
document.getElementsByClassName("img2")[0].setAttribute("src", sourcename2);

// Event Listeners
document.addEventListener("DOMContentLoaded", checkWinner());

// Functions

function checkWinner(event) {
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = "Player 1 Wins!"
    } else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = "Player 2 Wins!"
    } else {    
        document.querySelector("h1").innerText = "Tie!"
    }
}

// checkWinner();

console.log(sourcename1);
console.log(sourcename2);