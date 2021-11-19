let form = document.querySelector('form');

let userInfo = {};

function modal(info) {
    
}

function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.value;
    modal(userInfo);
}

form.addEventListener('submit', handleSubmit);