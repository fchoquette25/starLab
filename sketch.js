let bg
let starFill
let innerBase = 25;  
let outerBase = 50;  
let breathingSpeed = 0.025; 

function setup() {
  createCanvas(400, 400);
  changeBGColor();
  starFill = randomColor();
  fill(starFill);
  noStroke();
}

function draw() {
  background(bg);
  
  let inner = innerBase + sin(frameCount * breathingSpeed) * 20;  
  let outer = outerBase + cos(frameCount * breathingSpeed) * 30;
  
  drawStar(width / 2, height / 2, inner, outer);
}

// TASK 1: parameterize this function for inner and outer radii and number of sides
function drawStar(mx, my, inner, outer) {
  let numberOfSides = 7;
  let numberOfPoints = numberOfSides * 2;
  let theta = 0;
  let dt = TWO_PI / numberOfPoints;

  beginShape();
  for (let i = 0; i < numberOfPoints; i++) {
    if (i % 2 === 0) {
      vertex(mx + inner * cos(theta + dt * i), my + inner * sin(theta + dt * i));
    } else {
      vertex(mx + outer * cos(theta + dt * i), my + outer * sin(theta + dt * i));
    }
  }
  endShape();
}

function randomColor(avenues=true) {
  if (avenues) {
    return color(randomAvenuesColor());
  } else {
    return color(random(255), random(255), random(255));
  }
}

function changeBGColor(avenues=true) {
  bg = randomColor(avenues);
}

function keyPressed() {
  if (key === 'b') {
    changeBGColor();
  }
}

// Hex Codes for the Official Avenues Colors
const colors = { 
  white: "#ffffff",
  black: "#000000",
  ash: "#B7B09C",
  ochre: "#D3AE6F",
  indigo: "#3D68B2",
  moss: "#267355",
  pristineBlue: "#44C3D4",
  violet: "#9796C9",
  nimbus: "#CAC3BC",
  pistachio: "#C5D982",
  olive: "#8A916A",
  terracotta: "#C17E60",
  gold: "#F5CD64",
  clay: "#C3411E",
  grass: "#0D9A48",
  navy: "#273879"
};

function randomAvenuesColor() {
  return random(Object.values(colors));
}
