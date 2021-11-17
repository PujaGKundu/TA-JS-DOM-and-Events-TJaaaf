let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let root = document.querySelector('ul');
let root1 = document.querySelector('div[class = "boxes"]');





numbers.forEach((number) => {
    let li = document.createElement('li');
    li.classList.add('box');
    let h2 = document.createElement('h2');
    h2.innerText = number;
    h2.style.visibility = "hidden";
    li.addEventListener("click", function() {
        h2.style.visibility = "visible";
    });
    li.append(h2);
    root.append(li);
});

numbers.forEach((number) => {
    let div = document.createElement('div');
    div.classList.add('box');
    let h2 = document.createElement('h2');
    h2.innerText = number;
    h2.style.visibility = "hidden";
    div.addEventListener("click", function() {
        h2.style.visibility = "visible";
    });
    div.append(h2);
    root1.append(div);
});