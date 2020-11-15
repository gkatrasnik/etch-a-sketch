
// creates 16 divs inside "container"
function startSketch(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i=0;i< (rows * cols);i++) {
        var cell = document.createElement("div");
        document.getElementById("container").appendChild(cell);
        cell.classList.add("cellStyle");
    }
}


function addActiveClass() {
    let hover = document.getElementsByClassName("cellStyle");

    for (let i=0; i<hover.length; i++) {
        hover[i].addEventListener("mouseover", function(e) {   
        hover[i].classList.add("active");
        })
    }
}

function clearGrid() {

    let newGridSize
    do {newGridSize = parseInt(prompt("Enter a number from 1 to 100", 50));
    }while (isNaN(newGridSize) || newGridSize > 100 || newGridSize < 1);

    const grid = document.getElementById("container");
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    startSketch(newGridSize, newGridSize);
    addActiveClass();
}

startSketch(50, 50);
addActiveClass();