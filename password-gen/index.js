let newPassEl = document.querySelector("#newpass-el")
let options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "@", "!", "$", "#", "&", "A", "R", "B", "U", "I", "V", "Q"]


function start() {
    generate();
}
function start12() {
        generate12();
    }

    
function generate() {
    let newPass = "";

    for (let i = 0; i < 8; i++) {
        if (i < 8) {
            newPass += randomPiece()
        }
    }
    newPassEl.textContent = newPass;
}

function generate12() {
    let newPass = "";

    for (let i = 0; i < 12; i++) {
        if (i < 12) {
            newPass += randomPiece()
        }
    }
    newPassEl.textContent = newPass;
}

function randomPiece() {
    let random = options[Math.floor(Math.random() * 48)];
    return random;
}
