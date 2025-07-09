const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p2Display = document.querySelector('#p2Display');
const p1Display = document.querySelector('#p1Display');


let p1Score = 0;
let p2Score = 0;
let winningScore = 21;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        if (p1Score !== winningScore) {
            p1Score += 1;
            p1Display.textContent = p1Score;
        }
        else {
            isGameOver = true;
        }
    }

})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        if (p2Score !== winningScore) {
            p2Score += 1;
            p2Display.textContent = p2Score;
        }
        else {
            isGameOver = true;
        }
    }

})
