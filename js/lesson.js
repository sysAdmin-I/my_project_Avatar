// урок 1

// Phone block

// const phoneInput = document.querySelector("#phone_input");
// const phoneButton = document.querySelector("#phone_button");
// const phoneResult = document.querySelector("#phone_result");
//
// const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green'
//     } else {
//         phoneResult.innerHTML = 'invalid phone number'
//         phoneResult.style.color = 'red'
//     }
// }

//

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


