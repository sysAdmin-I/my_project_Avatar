// modal

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector("#btn-get");
const modalCloseButton = document.querySelector(".modal_close");

const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}
const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

modalTrigger.onclick = openModal;
modalCloseButton.onclick = closeModal;
modal.onclick = (event) => {
   if (event.target === modal) {
       closeModal();
   }
}

const scrollBottom = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener("scroll", scrollBottom);
    }
};

window.addEventListener("scroll", scrollBottom);

setTimeout(openModal, 10000)

// Gmail block

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp1 = /[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9_+-]+@gmail\.com/

gmailButton.onclick = () => {
    if (regExp1.test(gmailInput.value.trim())) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'invalid phone gmail'
        gmailResult.style.color = 'red'
    }
}


// Phone block

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'invalid phone number'
        phoneResult.style.color = 'red'
    }
}


// POST DATA

const form = document.querySelector('form')
const token = '7054026396:AAGwuudcwtlVR6NrKdl1Dgga4fIDvjIA4oA'
const chat_id = '@tetris_bot_izat'
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

form.onsubmit = (event) => {
    event.preventDefault()

    const {name, phone,gmail}  = Object.fromEntries(new FormData(form).entries())

    const text = ` Имя: ${name}\n Номер: ${phone}\n Почта: ${gmail}`

    try {
        fetch(URL_API, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                chat_id: chat_id,
                text: text,
            })
        })
    } catch (error) {
        console.log('Error')
    }
}