function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


let one = document.querySelector('.first');
one.addEventListener("click", get_random_color);

let two = document.querySelector('.second');
two.addEventListener("onmousemove", get_random_color);