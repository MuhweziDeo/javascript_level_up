let min = 1,
    max = 10,
    winnigNumber = 2,
    guesseleft = 2;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function () {
    // console.log(guessInput.value);
    let guess = parseInt(guessInput);
    // console.log(guess)

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please select an number btwn ${min} and ${max}`);
    }

});

function setMessage(msg) {
    message.textContent = msg;
}
''