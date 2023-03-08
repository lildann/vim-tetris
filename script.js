console.log('Javascript is running!')

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WIDTH = 600;
const HEIGHT = 600;


let redSquarePosition = {
  left: 75,
  top: 100,
}

let blueSquarePosition = {
  left: 450,
  top: 100,
}

function drawRedSquare() {
  ctx.fillStyle = "red";
  ctx.fillRect(redSquarePosition.left, redSquarePosition.top, 75, 75);
  // left, top, width, height
}

function drawBlueSquare() {
  ctx.fillStyle = "blue";
  ctx.fillRect(blueSquarePosition.left, blueSquarePosition.top, 75, 75);
}

drawRedSquare()
drawBlueSquare()

function listener(event) {
  console.log(event.code)
  // When I press the L key, move the red shape to the right
  if (event.code === 'KeyL') {
    // move the shape
    redSquarePosition.left += 10
    // clear the canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    // draw the shapes
    drawRedSquare()
    drawBlueSquare()
  }
  // When I press the L key, move the blue shape to the left
  if (event.code === 'KeyH') {
    blueSquarePosition.left -= 10
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    drawRedSquare()
    drawBlueSquare()
  }
}

window.addEventListener('keydown', listener) 