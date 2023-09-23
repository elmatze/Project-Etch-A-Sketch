const father = document.querySelector(".father");
const slider = document.querySelector(".slider");
const statevalue = document.getElementById("statevalue");

statevalue.innerHTML = slider.value; // Display the -default- (16) slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  if (typeof variable !== 'undefined') {
    father.removeChild(div) // problematic but maybe the correct way
  } 
  statevalue.innerHTML = this.value; // displays the current slider value
  gridSize = this.value * this.value; // works!
  reciprocal = 1 / this.value
  divSize = reciprocal.toLocaleString("en", {style: "percent", minimumFractionDigits: 3})
  console.log(divSize)
  for (i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `height: ${divSize}`);
    div.style.width = divSize;

    div.addEventListener("mouseenter", 
      () => div.setAttribute("style", "background-color: gray",));
    div.addEventListener("mouseenter",
      () => div.style.height = divSize);
    div.addEventListener("mouseenter",
      () => div.style.width = divSize);
    father.appendChild(div);
  }
}





