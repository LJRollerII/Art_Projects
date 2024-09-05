let r = 0
let angle=0
//To make the 2D appear on the 3D as its texture or wrapping, make global variable art
let art
function setup() {
  createCanvas(400, 400, WEBGL);
  art = createGraphics(400, 400)
}

function draw() {
  background(220);
  //Place all 2D code inside push() and pop()
  push()
  for (let i = 0; i < width - 50; i =+50) {
    art.noFill()
    art.stroke(r,i + mouseX,i)
    art.strokeWeight(5)
    // Let's have the circle increase in size
    r = r + 0.4
    art.ellipse(i,i, r + i,r + i)
    //Create condition where if r touches the max width or height start agin from 0.
    if (r > width || r < 0 || r > height || r < 0) {
      r = 0
    }
  }
  pop()
  
  push()
  texture(art)
  noStroke()
  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)
  box(200)
  angle+=0.003
  pop()
}