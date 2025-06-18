const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

const CONTAINER_SIZE = 500;

// Create grid
function createGrid(size) {
  container.innerHTML = "";
  const squareSize = CONTAINER_SIZE / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#00ffe0";
    });

    container.appendChild(square);
  }
}

// Resize grid button
resizeBtn.addEventListener("click", () => {
  let size = prompt("Enter grid size (1–100):");
  size = parseInt(size);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

// Default grid
createGrid(16);
