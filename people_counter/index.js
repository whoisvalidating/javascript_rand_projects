let countEl = document.getElementById("count-el");

let count = 0;

let saveEl = document.getElementById("save-el");

let totalEl = document.getElementById("total-el");

let total = 0;

function increment() {
 count += 1;
 countEl.textContent = count;
 totalEl.textContent = ++total;
};

function decrement() {
    count -= 1;
    countEl.textContent = count;
    totalEl.textContent = --total;
}

function save() {
    let oldCount = count + " / ";
    saveEl.textContent += oldCount;
    count = 0;
    countEl.textContent = count;
};

