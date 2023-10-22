let newPassEl = document.querySelector("#newpass-el")
let options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "0", "@", "$", "&", "*", "J", "R"];
//20 options
console.log(options.length);
function start() {
    generate();
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

function randomPiece() {
    let random = options[Math.floor(Math.random() * 23)];
    return random;
}
