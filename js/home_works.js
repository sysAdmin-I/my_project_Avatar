// Gmail block

// const phoneInput = document.querySelector("#gmail_input");
// const phoneButton = document.querySelector("#gmail_button");
// const phoneResult = document.querySelector("#gmail_result");
//
// const regExp = /[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9_+-]+@gmail\.com/
//
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value.trim())) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green'
//     } else {
//         phoneResult.innerHTML = 'invalid phone gmail'
//         phoneResult.style.color = 'red'
//     }
// }

// Move block

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0, positionY = 0

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight


const moveBlock = () => {
    if (positionX < maxWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX >= maxWidth && positionY < maxHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionY >= maxHeight && positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX <= maxWidth && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()

// Time block

const secondsResume = document.querySelector("#seconds")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")

let seconds = 0
let time = false;
let interval;

stopBtn.disabled = true

function secondsUpdate() {
    secondsResume.textContent = seconds
}

function startSeconds() {
    if (!time) {
        time = true;
        stopBtn.disabled = false;
        interval = setInterval(() => {
            seconds++;
            secondsUpdate();
        }, 1000);
        secondsResume.style.color = "green";

        setTimeout(() => {
            secondsResume.style.color = "";
        }, 1500);
    }
}

function stopSeconds() {
    clearInterval(interval);
    time = false;
    stopBtn.disabled = true;
    secondsResume.style.color = "red";

    setTimeout(() => {
        secondsResume.style.color = "";
    }, 1500);
}

function resetSeconds() {
    clearInterval(interval);
    seconds = 0;
    secondsUpdate();
    time = false;
    stopBtn.disabled = true;
}

startBtn.onclick = function () {startSeconds()}
stopBtn.onclick = function () {stopSeconds()}
resetBtn.onclick = function () {resetSeconds()}