
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
        hover[i].addEventListener("mouseenter", function(e) {   
        hover[i].classList.add("active");
        })
    }
}

startSketch(16, 16);
addActiveClass();