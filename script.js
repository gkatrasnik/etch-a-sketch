
// creates 16 divs inside "container"
function startSketch(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i=0;i< (rows * cols);i++) {
        var cell = document.createElement("div");
        cell.textContent = (i + 1);
        document.getElementById("container").appendChild(cell);
        cell.classList.add("divSketch");
    }
}

startSketch(4, 4);