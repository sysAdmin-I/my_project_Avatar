// Gmail block

const phoneInput = document.querySelector("#gmail_input");
const phoneButton = document.querySelector("#gmail_button");
const phoneResult = document.querySelector("#gmail_result");

const regExp = /[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9_+-]+@gmail\.com/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value.trim())) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'invalid phone gmail'
        phoneResult.style.color = 'red'
    }
}

//Move block

// const parentBlock = document.querySelector(".parent_block");
// const childBlock = document.querySelector(".child_block");
//
// const rotor = document.createElement('div')
// rotor.className = 'rotor';
// rotor.style.backgroundColor = 'url../images/pngwing.com.png'
//
//
// let positionX = 0, positionY = 0
//
// const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth
// const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight
//
//
// const moveBlock = () => {
//     if (positionX < maxWidth && positionY === 0) {
//         positionX++
//         childBlock.style.left = `${positionX}px`;
//         requestAnimationFrame(moveBlock)
//     } else if (positionX >= maxWidth && positionY < maxHeight) {
//         positionY++
//         childBlock.style.top = `${positionY}px`;
//         requestAnimationFrame(moveBlock)
//     } else if (positionY >= maxHeight && positionX > 0) {
//         positionX--
//         childBlock.style.left = `${positionX}px`;
//         requestAnimationFrame(moveBlock)
//     } else if (positionX <= maxWidth && positionY > 0) {
//         positionY--
//         childBlock.style.top = `${positionY}px`;
//         requestAnimationFrame(moveBlock)
//     }
// }
//
// moveBlock()

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

const rotor = document.createElement('div');
rotor.className = 'rotor';
childBlock.appendChild(rotor);

rotor.style.marginTop = '8px';
rotor.style.width = '100px';
rotor.style.height = '100px';
rotor.style.backgroundImage = 'url(../images/pngwing.com.png)';
rotor.style.backgroundSize = 'cover';
rotor.style.position = 'absolute';
rotor.style.top = '-20px';
rotor.style.left = '50%';
rotor.style.transform = 'translateX(-50%)';
rotor.style.animation = 'rotate 1s linear infinite';

let positionX = 0, positionY = 0;

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < maxWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        childBlock.style.transform = 'rotate(90deg)';
        childBlock.style.transition = 'transform 0.5s';
        requestAnimationFrame(moveBlock);
    } else if (positionX >= maxWidth && positionY < maxHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        childBlock.style.transform = 'rotate(180deg)';
        childBlock.style.transition = 'transform 0.5s';
        requestAnimationFrame(moveBlock);
    } else if (positionY >= maxHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
        childBlock.style.transform = 'rotate(270deg)';
        childBlock.style.transition = 'transform 0.5s';
        requestAnimationFrame(moveBlock);
    } else if (positionX <= maxWidth && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
        childBlock.style.transform = 'rotate(360deg)';
        childBlock.style.transition = 'transform .5s';
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();

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

// // JSON
//
// const characterList = document.querySelector('.characters-list');
//
// const request = new XMLHttpRequest();
// request.open('GET', '../data/persons.json');
// request.setRequestHeader('Content-Type', 'application/json');
// request.send();
//
// request.onload = () => {
//     let data = JSON.parse(request.response);
//
//     data.forEach(character => {
//         const card = document.createElement('div');
//         card.classList.add('character-card');
//
//         card.innerHTML = `
//        <img src="${character.person_photo}" alt="${character.name}" />
//        <h2>${character.name}</h2>
//        <p>Age: ${character.age}</p>
//     `;
//         card.style.color = "white";
//         card.style.fontSize = "20px";
//         card.style.backgroundSize = "cover";
//         card.style.backgroundPosition = "center";
//         characterList.append(card)
//     });
// };
//
// const request1 = new XMLHttpRequest();
// request1.open('GET', '../data/any.json', );
// request1.send();
//
//
// request1.onload = () => {
//     let data1 = JSON.parse(request1.response);
//     console.log(data1);
// };
//

