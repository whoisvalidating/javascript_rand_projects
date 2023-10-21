let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""

function startGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "wohoo! you've got blackjack!";
} else {
    message = "you're out of the game my friend. Please try again";
    isAlive = false;
}
console.log(message);
};