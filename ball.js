const canva = document.getElementById("canva");
const ctx = canva.getContext("2d");

canva.height = window.innerHeight;
canva.width = window.innerWidth;

// ctx.fillStyle = "white";
// ctx.fillRect(10, 10, 200, 200);
var color = getRandomColor();

// Sir, I need your input here, random number generator sometimes
// generates a number that gets the ball stuck on top or on the sides, how can we avoid that

let x = Math.floor(Math.random() * Math.random() * (1200 - 200) + 200);
let y = Math.floor(Math.random() * Math.random() * (500 - 200) + 200);
console.log(x, y);
let FPS = 60;
let radius = 20;
let xspeed = Math.random() * Math.random() * (5 - 3) + 3;
let yspeed = Math.random() * Math.random() * (6 - 2) + 2;

function clear() {
  ctx.clearRect(0, 0, canva.width, canva.height);
}
function getRandomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function move() {
  x += xspeed;
  y += yspeed;
}
function animate() {
  clear();

  // ctx.fillRect(x, 100, 50, 200);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  if (x + radius >= canva.width) {
    // x = canva.width - radius;
    xspeed = -xspeed;
    color = `#${getRandomColor()}`;
  }
  if (y + radius >= canva.height) {
    // y = canva.height - radius;
    yspeed = -yspeed;
    color = `#${getRandomColor()}`;
  }
  if (x - radius <= 0) {
    // x = canva.width - radius;
    // x = 0 + radius;
    xspeed = -xspeed;
    color = `#${getRandomColor()}`;
  }
  if (y - radius <= 0) {
    // y = 0 + radius;
    yspeed = -yspeed;
    color = `#${getRandomColor()}`;
  }

  move();
}

window.setInterval(animate, 1000 / FPS);
