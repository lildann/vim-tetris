console.log('Javascript is running!')

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WIDTH = 600;
const HEIGHT = 600;

let redSquarePosition = {
  left: 80,
  top: 100,
}
let blueSquarePosition = {
  left: 400,
  top: 100,
}
let purpleSquarePosition = blueSquarePosition;


function drawRedSquare() {
  ctx.fillStyle = "red";
  ctx.fillRect(redSquarePosition.left, redSquarePosition.top, 80, 80);
  // left, top, width, height
}
function drawBlueSquare() {
  ctx.fillStyle = "blue";
  ctx.fillRect(blueSquarePosition.left, blueSquarePosition.top, 80, 80);
}
function drawPurpleSquare() {
  ctx.fillStyle = "purple";
  ctx.fillRect(purpleSquarePosition.left, purpleSquarePosition.top, 80, 80)
}
function drawPurpleWin() {
  ctx.font = "30px Rubik Iso";
  ctx.fillStyle = "lime"
  ctx.fillText("You made purple!", 10, 50);
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
  // When I press the H key, move the blue shape to the left
  if (event.code === 'KeyH') {
    blueSquarePosition.left -= 10
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    drawRedSquare()
    drawBlueSquare()
  }
  // When red square hits blue square delete both and create a purple square + text
  if (blueSquarePosition.left === redSquarePosition.left) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    drawPurpleSquare()
    drawPurpleWin()
  }

}

window.addEventListener('keydown', listener) 