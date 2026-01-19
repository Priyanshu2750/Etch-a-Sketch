const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
  }
}

const cells = document.querySelectorAll(".cell");

for (let cell of cells) {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "black";
  });
}
