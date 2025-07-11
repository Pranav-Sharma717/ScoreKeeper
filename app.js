const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p2Display = document.querySelector('#p2Display');
const p1Display = document.querySelector('#p1Display');
const resetButton = document.querySelector('#reset');
const maxpointSelect = document.querySelector('#maxpoints');

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(maxpointSelect.value);
let isGameOver = false;
let deuceMode = false;

function checkWin() {
    if (!deuceMode) {
        // Check for deuce
        if (p1Score === winningScore - 1 && p2Score === winningScore - 1) {
            deuceMode = true;
        }
    }
    if (deuceMode) {
        // In deuce, require 2-point lead
        if ((p1Score >= winningScore - 1 && p2Score >= winningScore - 1) && Math.abs(p1Score - p2Score) >= 2) {
            isGameOver = true;
            if (p1Score > p2Score) {
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');
            } else {
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');
            }
        }
    } else {
        // Normal win condition
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        } else if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
    }
}

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        checkWin();
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        checkWin();
    }
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    deuceMode = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

maxpointSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});