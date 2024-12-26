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

// POST DATA

const form = document.querySelector('form')
const token = '7054026396:AAGwuudcwtlVR6NrKdl1Dgga4fIDvjIA4oA'
const chat_id = '@tetris_bot_izat'
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

form.onsubmit = (event) => {
    event.preventDefault()

    const {name, phone}  = Object.fromEntries(new FormData(form).entries())

    const text = `Имя: ${name}\n Номер: ${phone}`

    fetch(URL_API, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chat_id: chat_id,
            text: text,
        })
    })
}