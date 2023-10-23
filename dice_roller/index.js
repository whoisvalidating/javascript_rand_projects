let d20Rolls = [];
let d12Rolls = [];
let d10Rolls = [];
let d8Rolls = [];
let d6Rolls = [];
let d4Rolls = [];
let holder = " ";

let d20RollsEl = document.querySelector("#d20rolls-el");
let d20RollEl = document.querySelector("#d20roll-el");
let d12RollEl = document.querySelector("#d12roll-el");
let d12RollsEl = document.querySelector("#d12rolls-el")
let d10RollEl = document.querySelector("#d10roll-el")
let d10RollsEl = document.querySelector("#d10rolls-el")
let d8RollEl = document.querySelector("#d8roll-el")
let d8RollsEl = document.querySelector("#d8rolls-el")
let d6RollEl = document.querySelector("#d6roll-el")
let d6RollsEl = document.querySelector("#d6rolls-el")
let d4RollEl = document.querySelector("#d4roll-el")
let d4RollsEl = document.querySelector("#d4rolls-el")


function d20Roll() {
    holder = "previous rolls: ";
    let roll = Math.floor((Math.random() * 20) + 1);
    d20Rolls.push(" " + roll);
    d20RollEl.textContent = roll
    for (i = 0; i < d20Rolls.length; i++) {
        holder += d20Rolls[i];
    }
    d20RollsEl.textContent = holder;
}
function d12Roll() {
    holder = "previous rolls: ";
    let roll = Math.floor((Math.random() * 12) + 1);
    d12Rolls.push(" " + roll);
    d12RollEl.textContent = roll
    for (i = 0; i < d12Rolls.length; i++) {
        holder += d12Rolls[i];
    }
    d12RollsEl.textContent = holder;
}
function d10Roll() {
    holder = "previous rolls: ";
    let roll = Math.floor((Math.random() * 10) + 1);
    d10Rolls.push(" " + roll);
    d10RollEl.textContent = roll
    for (i = 0; i < d10Rolls.length; i++) {
        holder += d10Rolls[i];
    }
    d10RollsEl.textContent = holder;
}
function d8Roll() {
    holder = "previous rolls: ";
    let roll = Math.floor((Math.random() * 8) + 1);
    d8Rolls.push(" " + roll);
    d8RollEl.textContent = roll
    for (i = 0; i < d8Rolls.length; i++) {
        holder += d8Rolls[i];
    }
    d8RollsEl.textContent = holder;
}
function d6Roll() {
    holder = "previous rolls: ";
    let roll = Math.floor((Math.random() * 6) + 1);
    d6Rolls.push(" " + roll);
    d6RollEl.textContent = roll
    for (i = 0; i < d6Rolls.length; i++) {
        holder += d6Rolls[i];
    }
    d6RollsEl.textContent = holder;
}
function d4Roll() {
    holder = "previous rolls: ";
    let roll = Math.floor((Math.random() * 4) + 1);
    d4Rolls.push(" " + roll);
    d4RollEl.textContent = roll
    for (i = 0; i < d4Rolls.length; i++) {
        holder += d4Rolls[i];
    }
    d4RollsEl.textContent = holder;
}

function reset20() {
    holder = "Previous rolls: "
    d20Rolls = [];
    d20RollsEl.textContent = holder;
    d20RollEl.textContent = "Try your luck with a roll";
}
function reset12() {
    holder = "Previous rolls: "
    d12Rolls = [];
    d12RollsEl.textContent = holder;
    d12RollEl.textContent = "Try your luck with a roll";
}
function reset10() {
    holder = "Previous rolls: "
    d10Rolls = [];
    d10RollsEl.textContent = holder;
    d10RollEl.textContent = "Try your luck with a roll";
}
function reset8() {
    holder = "Previous rolls: "
    d8Rolls = [];
    d8RollsEl.textContent = holder;
    d8RollEl.textContent = "Try your luck with a roll";
}
function reset6() {
    holder = "Previous rolls: "
    d6Rolls = [];
    d6RollsEl.textContent = holder;
    d6RollEl.textContent = "Try your luck with a roll";
}
function reset4() {
    holder = "Previous rolls: "
    d4Rolls = [];
    d4RollsEl.textContent = holder;
    d4RollEl.textContent = "Try your luck with a roll";
}

function resetAll() {
    reset20();
    reset12();
    reset10();
    reset8();
    reset6();
    reset4();
}

resetAll();
