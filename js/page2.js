// урок 1

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

//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let index = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    })
    tabs.forEach(item => {
        item.classList.remove('tab_content_item_active');
    })
}
const showTabContent = (t = 0) => {
    tabContentBlocks[index].style.display = 'block';
    tabs[t].classList.add('tab_content_item_active');
}

hideTabContent();
showTabContent(index)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, t) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(t)
                index = t
            }
        })
    }
}

const autoTabs = () => {
    setInterval(() => {
        index++
        if (index >= tabContentBlocks.length) {
            index = 0
        }
        hideTabContent();
        showTabContent(index)
    }, 3000)
}

autoTabs()

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

