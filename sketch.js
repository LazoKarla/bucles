function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();

  for (let x = 50; x <= width - 50; x += 50) {
    for (let y = 50; y <= height - 50; y += 50) {
      let distance = dist(mouseX, mouseY, x, y);
      let diameter = map(distance, 0, width / 2, 10, 50);
      let r = random(255);
      fill(100, 150, 200);
      circle(x, y, diameter);
    }
  }
}
