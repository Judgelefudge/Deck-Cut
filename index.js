// Player 1 cuts
var randomNumber1 = Math.floor(Math.random() * 13) + 2;

var randomSuit1 = Math.floor(Math.random() * 4) + 1;

var player1Suit;

if (randomSuit1 === 1) {
    player1Suit = "clubs"
}
else if (randomSuit1 === 2) {
    player1Suit = "diamonds"
}
else if (randomSuit1 === 3) {
    player1Suit = "hearts"
}
else if (randomSuit1 ===4) {
    player1Suit = "spades"
}
else {
    alert("Oops! Something went wrong :D")
}

var player1Card = "images/" + randomNumber1 + "_" + player1Suit + ".png";

document.querySelector(".img1").setAttribute("src", player1Card);

// Player 2 cuts
var randomNumber2 = Math.floor(Math.random() * 13) + 2;

var randomSuit2 = Math.floor(Math.random() * 4) + 1;

var player2Suit;

if (randomSuit2 === 1) {
    player2Suit = "clubs"
}
else if (randomSuit2 === 2) {
    player2Suit = "diamonds"
}
else if (randomSuit2 === 3) {
    player2Suit = "hearts"
}
else if (randomSuit2 ===4) {
    player2Suit = "spades"
}
else {
    alert("Oops! Something went wrong :D")
}

var player2Card = "images/" + randomNumber2 + "_" + player2Suit + ".png";

document.querySelector(".img2").setAttribute("src", player2Card);

// Winner Selection

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<-- Player 1 is victorious!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 is victorious! -->"
}
else if (randomNumber1 = randomNumber2) {
    document.querySelector("h1").innerHTML = "Cut again!"
}
else {
    alert("Oops! Something went wrong :D")
}
