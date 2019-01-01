let frequency = 0.03;
let amplitude = 100;
let particleSize = 40;
let columns = 12;
let rows = 3;
let spacing = 10;
let fillColor = 255;
let bgRed = 237;
let bgGreen = 34;
let bgBlue = 93;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  let xPos = -width/2+25;
  let offset = 0;

  background(bgRed, bgGreen, bgBlue);
  translate(width/2, height/2);

	fill(fillColor);
	noStroke();

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      ellipse(xPos, sinFunc(frequency, offset+TWO_PI*(j+1)/rows, amplitude), cosFunc(frequency, offset+TWO_PI*(j+1)/rows, particleSize));
    }

    xPos = xPos + particleSize + spacing;
    offset = offset + PI/6;
  }
}

function sinFunc(freq, off, amp) {
	return map(sin(frameCount*freq + off), -1, 1, -amp, amp);
}

function cosFunc(freq, off, amp) {
	return map(cos(frameCount*freq + off), -1, 1, 0, amp);
}

function mousePressed() {
  fillColor = map(floor(random(2)), 0, 1, 0, 255);

  bgRed = floor(random(256));
  bgGreen = floor(random(256));
  bgBlue = floor(random(256));

  rows = ceil(random(4));
}
