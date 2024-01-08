const GRID_COUNT = 16;

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
    for (let i = 0; i < input; i++) {
        var row = document.createElement("div");
        for (let j = 0; j < input; j++) {
            var column = document.createElement("div");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    addListenerToGrid();    
}

function addListenerToGrid() {
    const gridDivs = document.querySelectorAll(".container div > div");
    gridDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.classList.add("hovered-div");
        });
        div.addEventListener("mouseout", () => {
            div.classList.remove("hovered-div");
        });
    });
}

generateGrid();