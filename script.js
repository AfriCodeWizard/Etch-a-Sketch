const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#000"
    });
    
    
    container.appendChild(square);
}