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
    document.body.style.overflow = "hidden";
}

modalTrigger.onclick = openModal;
modalCloseButton.onclick = closeModal;
modal.onclick = (event) => {
   if (event.target === modal) {
       closeModal();
   }
}


// addEventListener('scroll')
// removeEventListener('scroll',)


