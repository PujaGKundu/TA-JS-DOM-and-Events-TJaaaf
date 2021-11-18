

let root = document.querySelectorAll('.digits li');
root.forEach((num) => {
    let text = num.dataset.text;
    num.innerText = text;
});

let output = document.getElementById('#cursor');
output.innerText = 0;

let clear = document.getElementsById('#clear');

clear.addEventListener('click', () => {
    output.innerText = 0;
});