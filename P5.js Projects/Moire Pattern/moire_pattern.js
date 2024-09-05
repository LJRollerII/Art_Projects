let x = 0
function setup() {
  createCanvas(720, 500);
}

function draw() {
  background(220);
//Loop that starts from zero and repeats 1000 times with a spacing of 10 in between
  for(let i=0;i<1000;i+=10){
  noFill()
  stroke('purple')
  strokeWeight(3)
//Create the elipse at the center of the canvas
  ellipse(360,250,i,i) 
  
  stroke('red')
  strokeWeight(3)
  //Add -500 to the variable so smaller circles will appear
  ellipse(x, 250, i - 500, i - 500)
  
}
//Write condition that make patterns reappear once they've reached the end of the canvas
if (x > width) {
  
  x = 0
} else {
  //Increment the variable 'x' by 3
  x = x + 3
}

}

