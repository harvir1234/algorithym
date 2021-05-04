
var rectangle1,rectangle2;
var rectangle3,rectangl4;
var edges;
function setup() {
  createCanvas(800,400);
 rectangle1= createSprite(300, 200, 50, 50);
 rectangle2= createSprite(500,300,50,50);
 rectangle3=createSprite (100,400,50,50);
 rectangle4=createSprite (500,80,50,50);
 edges=createEdgeSprites()
 rectangle1.shapeColor="red"
 rectangle2.shapeColor="blue"
 rectangle3.shapeColor="green"
 rectangle4.shapeColor="orange"
 rectangle2.velocityY=7
 rectangle4.velocityY=-7
}

function draw() {
  background(255,255,255); 
  rectangle1.x=mouseX
  rectangle1.y=mouseY
  console.log(rectangle1.x-rectangle2.x) 
  if(isTouching(rectangle1,rectangle3)){
    rectangle1.shapeColor="black"
    rectangle3.shapeColor="pink"
  }
  else{
    rectangle1.shapeColor="red"
    rectangle3.shapeColor="green"
  }
  bounceOff(rectangle2,rectangle4);
 rectangle2.bounceOff(edges)
 rectangle4.bounceOff(edges)
  drawSprites();
}
