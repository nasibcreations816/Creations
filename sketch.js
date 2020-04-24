var cx,cy;
var rx,ry;
var cspeed;
 var display;

function setup() {
  createCanvas(600, 600);
  cx=250;
  cy=250;
  cxspeed=2;
  cyspeed=2;
  rx=30;
  ry=35;
  rxspeed=2;
  ryspeed=1.5;
  
  
}

function draw() {
  background(220);
  
  
 
  ellipse(cx,cy,130,130);
  
  rect(rx,ry,100,60);
  rx+=rxspeed;
  ry+=ryspeed;
  if (rx-0 <=0 || rx+15>width){
    rxspeed*=-1;}
  if (ry-15 <=0 || ry+15>height){
    ryspeed*=-1;}
  push();
  fill(0);
  textSize(30);
  text('ABC',cx,cy);
  textSize(45);
  text('DVD',rx,ry,15,75);
  pop();
  cx+=cxspeed;
  cy+=cyspeed;
  if (cx-0 <=0 || cx+25>width){
    cxspeed*=-1;}
  if (cy-15 <=0 || cy+15>height){
    cyspeed*=-1;}
  
  
 if (mouseIsPressed){
   fill(16,255,255)}
  else {
    fill(160,0,181)
  }
 
  

  
 
  

       }