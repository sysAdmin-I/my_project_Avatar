// JSON

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

const url = 'https://jsonplaceholder.typicode.com/posts';

const getData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const charactersList = document.querySelector('.characters-list');

        data.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            card.innerHTML = `
                <div class="card-image">
                    <img src="https://s2.afisha.ru/mediastorage/f8/40/44c361537e354921a5a5266240f8.jpg" alt="image"/> 
                </div>
                <h2>${post.title}</h2>  
                <p>${post.body}</p>     
            `;

            charactersList.append(card);
        });

    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

getData();
