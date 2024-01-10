const GRID_COUNT = 4;

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

// function generateGrid(input = GRID_COUNT) {
//     for (let i = 0; i < input; i++) {
//         var row = document.createElement("div");
//         row.classList.add('row');
//         for (let j = 0; j < input; j++) {
//             var column = document.createElement("div");
//             column.classList.add('column');
//             row.appendChild(column);
//         }
//         container.appendChild(row);
//     }
//     addListenerToGrid();    
// }

function generateGrid(input = GRID_COUNT) {
    for (let i = 0; i < input * input; i++) {
        var square = document.createElement("div");
        square.classList.add('square');

        let containerWidth = container.offsetWidth;
        square.setAttribute("style", `width: ${containerWidth / input}px; height: ${container.offsetHeight / input}`);

        container.appendChild(square);
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