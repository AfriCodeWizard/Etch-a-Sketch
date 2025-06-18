const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

const CONTAINER_SIZE = 500; // total pixel space

// Create the grid with a given number of squares per side
function createGrid(size) {
  // Clear old grid
  container.innerHTML = "";

  // Set container size
  container.style.width = `${CONTAINER_SIZE}px`;
  container.style.height = `${CONTAINER_SIZE}px`;

  const squareSize = CONTAINER_SIZE / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#000";
    });

    container.appendChild(square);
  }
}

// Button click handler
resizeBtn.addEventListener("click", () => {
  let size = prompt("Enter grid size (max 100):");
  size = parseInt(size);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

// Create default 16x16 grid on load
createGrid(16);
