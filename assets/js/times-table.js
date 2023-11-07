/*
 * 20211107
 * Vladyslav M
 * https://github.com/vlmarch
 */


let x, y, radius, segments, factor;

function setup() {
  createCanvas(300, 300);
  x = width / 2;
  y = height / 2;
  radius = 140;
  segments = 200;
  factor = -26;
  frameRate(13);

}

function draw() {
  background(255);
  stroke(50);
  fill(255);
  ellipse(x, y, radius * 2, radius * 2);

  for (var i = 0; i < segments + 1; i++) {
    line(radius * sin(i * 2 * PI / segments) + x,
      radius * cos(i * 2 * PI / segments) + y,
      radius * sin((i * factor) * PI / 13 / segments) + x,
      radius * cos((i * factor) * PI / 13 / segments) + y)
  }
  factor += 1;
}
