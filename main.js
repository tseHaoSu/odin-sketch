document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.querySelector("#gameContainer");
  const gridSizeDisplay = document.querySelector("#gridSize");

  const createGrid = (size) => {
    gameContainer.innerHTML = "";
    const cellSize = 20;
    const containerSize = cellSize * size;
    gameContainer.style.width = `${containerSize}px`;
    gameContainer.style.height = `${containerSize}px`;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const square = document.createElement("cell");
        square.classList.add("grid-square");
        gameContainer.appendChild(square);
        square.addEventListener("mouseover", hoverEffect);
      }
    }
  };

  const hoverEffect = (event) => {
    event.target.style.backgroundColor = "black";
  };

  const gridSizeChange = () => {
    const gridSize = parseInt(prompt("Enter the grid size:"), 10);
    if (!isNaN(gridSize) && gridSize > 0) {
      createGrid(gridSize);
      gridSizeDisplay.textContent = `Grid Size: ${gridSize}`;
    } else {
      alert("Invalid grid size. Please enter a positive number.");
    }
  };


  createGrid();
  gridSizeChange();
});
