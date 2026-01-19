function rgbGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function gridGeneration(container, size, cellSize) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      container.appendChild(cell);
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
    }
  }
}

function eventTracker() {
  const cells = document.querySelectorAll(".cell");

  for (let cell of cells) {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = rgbGenerator();
    });
  }
}

const body = document.querySelector("body");

const button = document.createElement("button");
body.appendChild(button);
button.textContent = "New Grid";

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

let size = 16;
gridGeneration(container, size, 960 / size);

eventTracker();

button.addEventListener("click", () => {
  size = +prompt("Set the grid size upto 100:", "");
  if (isNaN(size) || size <= 0 || size > 100) {
    alert("Please choose a number between 1 and 100!");
    size = 16;
  }
  container.replaceChildren();
  gridGeneration(container, size, 960 / size);
  eventTracker();
});
