const body = document.querySelector("body");

const button = document.createElement("button");
body.appendChild(button);
button.textContent = "New Grid";

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

const cells = document.querySelectorAll(".cell");

for (let cell of cells) {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "black";
  });
}

button.addEventListener("click", () => {
  const size = prompt("Set the grid size upto 100:", "");
  console.log(+size);
});

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
  }
}
