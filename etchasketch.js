const GRID_COUNT = 16;
const RGB_MAX_VALUE = 255;
const body = document.body;
const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
        let input = prompt("Enter Grid Size: ");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        generateGrid(input);
});

function generateGrid(input = GRID_COUNT) {
    for (let i = 0; i < input * input; i++) {
        var square = document.createElement("div");
        square.classList.add('square');
        square.setAttribute("style", `width: ${(container.offsetWidth / input) - 2}px; 
        height: ${(container.offsetHeight / input) - 2}px`);

        container.appendChild(square);
    }
    addListenerToGrid();    
}

function generateRandomRgbValue() {
    return Math.floor(Math.random() * RGB_MAX_VALUE);
}

function addListenerToGrid() {
    const gridDivs = document.querySelectorAll(".square");
    gridDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            let r = generateRandomRgbValue();
            let g = generateRandomRgbValue();
            let b = generateRandomRgbValue();
            div.style.background = `rgb(${r}, ${g}, ${b})`;
        });
    });
}

generateGrid();