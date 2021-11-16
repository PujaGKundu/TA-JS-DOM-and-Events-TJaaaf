let ul = document.querySelector('ul');

let ol = document.createElement('ol');

function get_number() {
    var letters = ['0','1','2','3','4','5','6','7','8','9'];
    var number = 0;
    for (var i = 0; i < 2; i++ ) {
        let randomNumber = Math.floor(Math.random() * 3);
        number += letters[randomNumber];
    }
    if (number <= 500) return number;
}


function get_random_color() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        let randomNumber = Math.floor(Math.random() * 16);
        color += letters[randomNumber];
    }
    return color;
}


function handlerClick() {
    let randonColor = get_random_color();
    ol.style.backgroundColor = randonColor;
}



ol.classList.add('box');

for(let i = 0; i < 500; i++) {
    ol.innerText = get_number();
}

ol.addEventListener("mousemove", handlerClick);

ul.append(ol);
