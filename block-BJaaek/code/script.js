let one = document.querySelector('.first');
let two = document.querySelector('.second'); 

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
    one.style.backgroundColor = randonColor;
}

function handlerMove() {
    let randonColor = get_random_color();
    two.style.backgroundColor = randonColor;
}


one.addEventListener("click", handlerClick);

two.addEventListener("mousemove", handlerMove);