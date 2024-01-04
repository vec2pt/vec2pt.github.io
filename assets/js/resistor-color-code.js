/*
 * 20231123
 */

var digit = [
  { value: 0, color: "#000000" },
  { value: 1, color: "#8a3d06" },
  { value: 2, color: "#c40808" },
  { value: 3, color: "#ff4d00" },
  { value: 4, color: "#ffd500" },
  { value: 5, color: "#00a33d" },
  { value: 6, color: "#0060b6" },
  { value: 7, color: "#8210d2" },
  { value: 8, color: "#8c8c8c" },
  { value: 9, color: "#ffffff" }
];

var multiplier = [
  { value: 1, color: "#000000" },
  { value: 10, color: "#8a3d06" },
  { value: 100, color: "#c40808" },
  { value: 1000, color: "#ff4d00" },
  { value: 10000, color: "#ffd500" },
  { value: 100000, color: "#00a33d" },
  { value: 1000000, color: "#0060b6" },
  { value: 10000000, color: "#8210d2" },
  { value: 100000000, color: "#c40808" },
  { value: 1000000000, color: "#ffffff" },
  { value: 0.1, color: "#a99e21" },
  { value: 0.01, color: "#bfbfaf" }
];

var tolerance = [
  { value: "±1%", color: "#8a3d06" },
  { value: "±2%", color: "#c40808" },
  { value: "±0.5%", color: "#00a33d" },
  { value: "±0.25%", color: "#0060b6" },
  { value: "±0.1%", color: "#8c8c8c" },
  { value: "±0.05%", color: "#c40808" },
  { value: "±5%", color: "#a99e21" },
  { value: "±10%", color: "#bfbfaf" }
];

// 4 Band rects
var b4r1 = [150, 25, 25, 125];
var b4r2 = [200, 40, 25, 95];
var b4r3 = [250, 40, 25, 95];
var b4r4 = [375, 25, 25, 125];

// 5 Band rects
var b5r1 = [150, 225, 25, 125];
var b5r2 = [200, 240, 25, 95];
var b5r3 = [250, 240, 25, 95];
var b5r4 = [300, 240, 25, 95];
var b5r5 = [375, 225, 25, 125];


var img;
var index4Band = [2, 2, 1, 0]
var index5Band = [2, 2, 0, 0, 0]

function preload() {
  img = loadImage('../assets/js/resistors.svg');
}

function setup() {
  createCanvas(550, 400);
  noStroke();
  textAlign(LEFT);
  textFont('Space Mono');
}

function draw() {
  background(255);

  // 4 Band
  fill(digit[index4Band[0]].color); rect(...b4r1);
  fill(digit[index4Band[1]].color); rect(...b4r2);
  fill(multiplier[index4Band[2]].color); rect(...b4r3);
  fill(tolerance[index4Band[3]].color); rect(...b4r4);

  // 5 Band
  fill(digit[index5Band[0]].color); rect(...b5r1);
  fill(digit[index5Band[1]].color); rect(...b5r2);
  fill(digit[index5Band[2]].color); rect(...b5r3);
  fill(multiplier[index5Band[3]].color); rect(...b5r4);
  fill(tolerance[index5Band[4]].color); rect(...b5r5);

  image(img, 0, 0);

  // Annotation
  fill(0);
  textSize(15);
  text('4-Band', 25, 75);
  text(calc4Band(), 125, 175);
  text('5-Band', 25, 275);
  text(calc5Band(), 125, 375);

  textSize(10);
  text("* click on the band to change the color", 300, 400)
}

function mouseClicked() {
  // 4 Band
  if (mouseInRect(...b4r1)) {
    index4Band[0] = (index4Band[0] + 1) % digit.length
  }
  else if (mouseInRect(...b4r2)) {
    index4Band[1] = (index4Band[1] + 1) % digit.length
  }
  else if (mouseInRect(...b4r3)) {
    index4Band[2] = (index4Band[2] + 1) % multiplier.length
  }
  else if (mouseInRect(...b4r4)) {
    index4Band[3] = (index4Band[3] + 1) % tolerance.length
  }

  // 5 Band
  if (mouseInRect(...b5r1)) {
    index5Band[0] = (index5Band[0] + 1) % digit.length
  }
  else if (mouseInRect(...b5r2)) {
    index5Band[1] = (index5Band[1] + 1) % digit.length
  }
  else if (mouseInRect(...b5r3)) {
    index5Band[2] = (index5Band[2] + 1) % digit.length
  }
  else if (mouseInRect(...b5r4)) {
    index5Band[3] = (index5Band[3] + 1) % multiplier.length
  }
  else if (mouseInRect(...b5r5)) {
    index5Band[4] = (index5Band[4] + 1) % tolerance.length
  }
}


function mouseInRect(x, y, w, h) {
  return x <= mouseX && mouseX <= x + w && y <= mouseY && mouseY <= y + h;
}

function calc4Band() {
  let val = Number(digit[index4Band[0]].value.toString() + digit[index4Band[1]].value.toString()) * multiplier[index4Band[2]].value;
  val = Math.round(val * 100) / 100;
  return toOhm(val) + " " + tolerance[index4Band[3]].value;
}

function calc5Band() {
  let val = Number(digit[index5Band[0]].value.toString() + digit[index5Band[1]].value.toString() + digit[index5Band[2]].value.toString()) * multiplier[index5Band[3]].value;
  val = Math.round(val * 100) / 100;
  return toOhm(val) + " " + tolerance[index5Band[4]].value;
}

function toOhm(val) {
  if (val < 1000) {
    return (val).toString() + "Ω";
  }
  else if (val < 1000000) {
    return (val / 1000).toString() + "KΩ";
  }
  else if (val < 1000000000) {
    return (val / 1000000).toString() + "MΩ";
  }
  else {
    return (val / 1000000000).toString() + "GΩ";
  }
}
