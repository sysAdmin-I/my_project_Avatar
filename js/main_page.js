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

// Move block

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

const rotor = document.createElement('div');
rotor.className = 'rotor';
childBlock.appendChild(rotor);

rotor.style.marginTop = '14px';
rotor.style.width = '50px';
rotor.style.height = '50px';
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
