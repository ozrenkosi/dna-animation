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

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(bgRed, bgGreen, bgBlue);
  translate(0, height/2);

  offset = 0;

	fill(fillColor);
	noStroke();

  for (let i = 0; i < columns; i++) {
    xPos = map(i, 0, columns-1, margin, width-margin);

    for (let j = 0; j < rows; j++) {
      yPos = sinFunc(frequency, offset+TWO_PI*j/rows, -amplitude, amplitude);
      particleSize = cosFunc(frequency, offset+TWO_PI*j/rows, 0, particleSizeMAX);

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
  fillColor = map(floor(random(2)), 0, 1, 0, 255);

  bgRed = floor(random(256));
  bgGreen = floor(random(256));
  bgBlue = floor(random(256));

  rows = ceil(random(4));
}
