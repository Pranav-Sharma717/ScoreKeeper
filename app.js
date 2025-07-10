const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p2Display = document.querySelector('#p2Display');
const p1Display = document.querySelector('#p1Display');
const resetButton = document.querySelector('#reset');
const maxpointSelect = document.querySelector('#maxpoints')


let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(maxpointSelect.value);
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        if (p1Score !== winningScore) {
            p1Score += 1;
            p1Display.textContent = p1Score;
            p1Display.classList.add('winner');
        }
        else {
            isGameOver = true;
            p1Display.classList.add('loser');
        }
    }

})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        if (p2Score !== winningScore) {
            p2Score += 1;
            p2Display.textContent = p2Score;
            p2Display.classList.add('winner');
        }
        else {
            isGameOver = true;
            p1Display.classList.add('loser');
        }
    }

})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}


maxpointSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

