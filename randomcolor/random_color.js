let button = document.getElementById("colorButton");
let bodyBackground = document.body;
let headerText = document.querySelector('h1');

function getRandomColor(){ 
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

button.addEventListener("click", function() {
    bodyBackground.style.backgroundColor = getRandomColor();
    headerText.style.color = getRandomColor();
    button.style.backgroundColor = getRandomColor();
    button.style.color = getRandomColor();
});

