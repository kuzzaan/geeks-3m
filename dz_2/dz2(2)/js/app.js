const block = document.getElementById("block");
const edge = document.getElementById("edge");
const radius = edge.offsetWidth / 2 - block.offsetWidth / 2;

let angle = 0;

function moveBlock() {
  let x = Math.cos(angle) * radius;
  let y = Math.sin(angle) * radius;

  block.style.left = edge.offsetLeft + x + "px";
  block.style.top = edge.offsetTop + y + "px";

  angle += 0.01;

  if (angle >= 2 * Math.PI) {
    angle = 0;
  }

  setTimeout(moveBlock, 10);
}

moveBlock();
