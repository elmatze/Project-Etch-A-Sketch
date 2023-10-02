const father = document.querySelector(".father");
const slider = document.querySelector(".slider");
const statevalue = document.getElementById("statevalue");

statevalue.innerHTML = slider.value; // Display the -default- (16) slider value

createDefaultGrid();

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  statevalue.innerHTML = this.value; // displays the current slider value
  gridSize = this.value * this.value;
  reciprocal = 1 / this.value
  divSize = reciprocal.toLocaleString("en", {style: "percent", minimumFractionDigits: 3})
  father.innerHTML = "";
  createGrid()
}
  
function createDefaultGrid() {
  for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `height: 1/16`);
    div.style.width = 1/16;

    div.addEventListener("mouseenter", 
      () => div.setAttribute("style", "background-color: rgba(180, 180, 180, 0.9)",));
    div.addEventListener("mouseenter",
      () => div.style.height = 1/16);
    div.addEventListener("mouseenter",
      () => div.style.width = 1/16);
    father.appendChild(div)
  }
}

function createGrid() {
  for (i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `height: ${divSize}`);
    div.style.width = divSize;

    div.addEventListener("mouseenter", 
      () => div.setAttribute("style", "background-color: rgba(180, 180, 180, 0.9)",));
    div.addEventListener("mouseenter",
      () => div.style.height = divSize);
    div.addEventListener("mouseenter",
      () => div.style.width = divSize);
    father.appendChild(div);
  }
}