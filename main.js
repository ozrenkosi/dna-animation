let frequency = 0.03;
let amplitude = 100;
let particleSizeMAX = 40;
let particleSize;
let columns = 12;
let rows = 2;
let fillColor = 255;
let bgRed = 237;
let bgGreen = 34;
let bgBlue = 93;
let xPos;
let yPos;
let offset;
let margin = 50;
let instructions;

function setup() {
  createCanvas(700, 400);

  instructions = createP("Hint: Click the canvas to interact").position(20, 410).style("font-size: 14pt; font-family: sans-serif; color: rgb(237, 34, 93); cursor: default; font-weight: bold");
}

function draw() {
  background(bgRed, bgGreen, bgBlue);
  translate(0, height/2);

  offset = 0;

	fill(fillColor);
	noStroke();

  for (let col = 0; col < columns; col++) {
    xPos = map(col, 0, columns-1, margin, width-margin);

    for (let row = 0; row < rows; row++) {
      yPos = sinFunc(frequency, offset+TWO_PI*row/rows, -amplitude, amplitude);
      particleSize = cosFunc(frequency, offset+TWO_PI*row/rows, 0, particleSizeMAX);

      ellipse(xPos, yPos, particleSize);
    }

    offset = offset + PI/6;
  }
}

function sinFunc(freq, off, min, max) {
	return map(sin(frameCount*freq + off), -1, 1, min, max);
}

function cosFunc(freq, off, min, max) {
	return map(cos(frameCount*freq + off), -1, 1, min, max);
}

function mousePressed() {
  instructions.hide();

  fillColor = map(floor(random(2)), 0, 1, 0, 255);

  bgRed = floor(random(256));
  bgGreen = floor(random(256));
  bgBlue = floor(random(256));

  rows = ceil(random(4));
}
