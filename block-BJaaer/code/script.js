let form = document.querySelector('form');
let modal = document.querySelector('.modalOverlay');
let modalInfo = document.querySelector('.modalInfo');

let userInfo = {};



function handleSubmit(event) {
    console.log('Handle submit');
    event.preventDefault();
    let elements = event.target.elements; 
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    modal.classList.add("open");
    let close = document.querySelector(".modalClose");
    close.addEventListener('click', () => {
        modal.classList.remove("open");
    });
    display(userInfo);
}

form.addEventListener('submit', handleSubmit);

function display(data = {}) {
    console.log('Display');
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `You Love: ${data.gender}`;
    let color = document.createElement("p");
    color.innerText = `Color: ${data.color}`;
    let range = document.createElement("p");
    range.innerText = `Range: ${data.name}`;
    let genre = document.createElement("p");
    genre.innerText = `Book Genre: ${data.drone}`;
    let terms = document.createElement("p");
    terms.innerText = `${data.terms ? "You have accepted the term and condition" : "You have not accepted the term and condition"}`;
    modalInfo.append(h1, email, choice, color, range, genre,terms);
}
