var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6 (random Numbers)

var randomImageSource1 =  "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// Player 2 wins!
var gameResult = document.querySelector("h1");
if(randomNumber2 > randomNumber1){
    gameResult.textContent = "Player 2 Wins!🚩";
    gameResult.classList.add("smallFont");
}
// Player 1 wins!
else if (randomNumber1 > randomNumber2){
    gameResult.textContent = "🚩Player 1 Wins!";
    gameResult.classList.add("smallFont");
}
// Draw!
else{
    gameResult.textContent = "Draw!";
}