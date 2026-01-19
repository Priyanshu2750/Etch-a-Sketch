const container = document.querySelector(".container");

for (let j = 0; j < 16; j++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  container.appendChild(div);
}
