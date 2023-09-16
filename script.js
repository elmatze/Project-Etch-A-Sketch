
const father = document.querySelector(".father");

for (i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", () =>
        div.setAttribute("style", "background-color: gray")
    );
    father.appendChild(div);
}




