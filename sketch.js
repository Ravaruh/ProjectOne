var points =[]
var mult =0.001
var r1
var r2
var g1
var g2
var b1
var b2

function setup() {
   createCanvas(windowWidth, windowHeight);
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)


var density = 30
var space = width / density

for (var x=0; x< width; x+= space) {
for (var y = 0; y<height; y+= space) {
  var p = createVector(x + random(-10,10),y + random(-10, 10))
  random(-10, 10)
  points.push(p)
}
}
  
  shuffle(points, true)
  
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
  
  mult= random (0.002, 0.01)
}

function draw() {
  noStroke()
  
  if (frameCount * 5 <= points.length) {
    var max= frameCount * 2
    } else {
      var max = points.length
      
      
    }
    
    
    
  
    
   
  
  for (var i=0; i< points.length; i++) {
    
    var r = map(points[i].x, 0, width, 50,255)
    var g = map(points[i].x, 0, height, 50,255)
    var b = map(points[i].x, 0, width, 255,50)
    var alpha = map(dist(width / 2, height / 2, points [i]. x, points[i].y, 0, 350, 400, 0))
    
    fill(r, g, b, alpha)
    
   var angle = map(noise(points[i].x * mult, points[i].y * mult), 0,1,0,720)
   
   points[i]. add (createVector(cos(angle), sin(angle)))
    
    if(dist(width / 2, height / 2, points[i].x, points [i].y) <200 )
    
    
    
  ellipse(points[i].x, points[i].y, 1)
  }
}
function mouseClicked() {
    saveCanvas('flowfield','png')

    window.alert ('Hey! Welcome to my project. I made a flow field that randomizes everytime you refresh. left click to take a png of your flowfield!')




}












  




  
  
  
  
  
  
  
