
//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let index1 = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    })
    tabs.forEach(item => {
        item.classList.remove('tab_content_item_active');
    })
}
const showTabContent = (t = 0) => {
    tabContentBlocks[index1].style.display = 'block';
    tabs[t].classList.add('tab_content_item_active');
}

hideTabContent();
showTabContent(index1)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, t) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(t)
                index1 = t
            }
        })
    }
}

const autoTabs = () => {
    setInterval(() => {
        index1++
        if (index1 >= tabContentBlocks.length) {
            index1 = 0
        }
        hideTabContent();
        showTabContent(index1)
    }, 3000)
}

autoTabs()

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

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


// Converter

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement,secondElement,threeElement,fourElement) => {
    element.oninput = () => {
        console.log(targetElement.id)
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {

            const data = JSON.parse(xhr.response)

            if (element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2);
                secondElement.value = (element.value / data.eur).toFixed(2);
            }
            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2);
                secondElement.value = ((element.value * data.usd) / data.eur).toFixed(2);
            }
            if (element.id === 'eur') {
                targetElement.value = (element.value * data.eur).toFixed(2);
                secondElement.value = ((element.value * data.eur) / data.usd).toFixed(2);
            }

            if (element.value === '') {targetElement.value = '';secondElement.value = '';threeElement.value = '';fourElement.value = '';}
        }
    }
}

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);


// DRY - don't repeat yourself
// KISS - keep it super simple

// CARD SWITCHER

const cardBlock = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let cardId = 1
const maxCardId = 200

const card = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            const { title, completed, id } = data;
            cardBlock.innerHTML = `
               <p>${title}</p>
               <p>${completed}</p>
               <span>${id}</span>
            `;
        });
};

card(cardId);

btnNext.onclick = () => {
    cardId = cardId < maxCardId ? cardId + 1 : 1;
    card(cardId)
};

btnPrev.onclick = () => {
    cardId = cardId > 1 ? cardId - 1 : maxCardId;
    card(cardId)
};

setInterval(() => {
    cardId = cardId < maxCardId ? cardId + 1 : 1;
    card(cardId)
}, 7000)

// WEATHER

const searchInput = document.querySelector('.cityName');
const searchButton = document.querySelector('#search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const weatherIcon = document. querySelector ('#weather_icon');

const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

searchButton.onclick = async () => {
    try {
        const response = await fetch(`${API_URL}?appid=${API_KEY}&q=${searchInput.value}&units=metric&lang=RU`)
        const data = await response.json()
        city.innerHTML = data.name || 'Город не найден'
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '&deg;C' : '///'
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        searchInput.value = ''
    } catch (error) {
        console.log(error)
    }
}

