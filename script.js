
const newGrid = document.querySelector(".newGrid")
const father = document.querySelector(".father");

const div = document.createElement("div");

createGrid(16 * 16);

newGrid.addEventListener("click", function getGridSizeLength() {
    // delete the previous grid - for now just the new divs are added to the existing ones
    let gridSideLength = prompt("How long should the side of the new square grid be?");
    let gridSize = gridSideLength * gridSideLength;
    console.log(gridSize);
    createGrid(gridSize);
} )

function createGrid(gridSize) {
    if (gridSize == 256) {
        for (i = 0; i < gridSize; i++) {
            div.addEventListener("mouseenter", () =>
                div.setAttribute("style", "background-color: gray")
            );
            father.appendChild(div);
        };
    }
    else {
        div.remove();
        for (i = 0; i < gridSize; i++) {
            div.addEventListener("mouseenter", () =>
                div.setAttribute("style", "background-color: gray")
            );
            father.appendChild(div);
        };
    }
};



