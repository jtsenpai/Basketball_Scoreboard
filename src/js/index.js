let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");

let scoreHome = 0
let scoreAway = 0

// Home Scores
function add1home() {
    scoreHome += 1;
    homeEl.textContent = scoreHome;
}

function add2home() {
    scoreHome += 2;
    homeEl.textContent = scoreHome;
}

function add3home() {
    scoreHome += 3;
    homeEl.textContent = scoreHome;
}

// Home Scores
function add1away() {
    scoreAway += 1;
    awayEl.textContent = scoreAway;
}

function add2away() {
    scoreAway += 2;
    awayEl.textContent = scoreAway;
}

function add3away() {
    scoreAway += 3;
    awayEl.textContent = scoreAway;
}