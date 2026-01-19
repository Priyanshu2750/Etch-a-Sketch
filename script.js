function gridGeneration(container, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("cell");
      container.appendChild(div);
    }
  }
}

function eventTracker() {
  const cells = document.querySelectorAll(".cell");

  for (let cell of cells) {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "black";
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
gridGeneration(container, size);

eventTracker();

button.addEventListener("click", () => {
  size = +prompt("Set the grid size upto 100:", "");
  if (isNaN(size) || size <= 0 || size > 100) {
    alert("Please choose a number between 1 and 100!");
    size = 16;
  }
  container.replaceChildren();
  gridGeneration(container, size);
  eventTracker();
});
