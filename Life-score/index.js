let playerLife1El = document.getElementById("playerLife1-el"); //making life a variable p1
playerLife1 = 20; //setting life as a number/starting health p1

let playerLife2El = document.getElementById("playerLife2-el"); //making life a variable p2
playerLife2 = 20;   //setting life as a number/starting health p2



function player1Add5() {
    calc = playerLife1 += 5;
    playerLife1El.textContent = calc;
};
function player1Add2() {
    calc = playerLife1 += 2;
    playerLife1El.textContent = calc;
};
function player1Add() {
    calc = ++playerLife1
    playerLife1El.textContent = calc; 
};
function player1Sub5() {
    calc = playerLife1 -= 5;
    playerLife1El.textContent = calc;
};
function player1Sub2() {
    calc = playerLife1 -= 2;
    playerLife1El.textContent = calc;
};
function player1Sub() {
    calc = --playerLife1;
    playerLife1El.textContent = calc;
};

function resetAll() {
    start = 20;
    playerLife1 = start;
    playerLife2 = start;
    playerLife1El.textContent = start;
    playerLife2El.textContent = start;
};

function player2Add5() {
    calc = playerLife2 += 5;
    playerLife2El.textContent = calc;
};
function player2Add2() {
    calc = playerLife2 += 2;
    playerLife2El.textContent = calc;
};
function player2Add() {
    calc = ++playerLife2;
    playerLife2El.textContent = calc;
};
function player2Sub5() {
    calc = playerLife2 -= 5;
    playerLife2El.textContent = calc
}
function player2Sub2() {
    calc = playerLife2 -= 2;
    playerLife2El.textContent = calc
}
function player2Sub() {
    calc = --playerLife2;
    playerLife2El.textContent = calc
}