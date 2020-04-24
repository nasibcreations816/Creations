function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);
 
  
  push();
  
  fill(230,255,255);
  ellipse(30,610,700,700);//big planet
  pop();
  
  push();
  fill(240,255,245)
  arc(30,610,700,650,17,34,OPEN);
  fill(241,250,240);
  arc(100,630,550,650,17,34,OPEN);
 pop();
  push();
  fill(255,47,246);
  ellipse(250,233,100,100);//medium
  
  pop();
  
  push();
  fill(250,0,246);
  arc(253,235,80,90,11,123,OPEN);
  fill(240,40,246);
  arc(260,235,80,90,11,123,OPEN);
  pop();
  
  
  push();
  fill(174,0,255);
  ellipse(450,370,200,200);
  pop();
  
  
  ellipse(142,230,3,3);//second
  ellipse(50,40,5,5);//first
  ellipse(540,500,10,10);//fourth
  ellipse(436,50,10,10);//third

  push();
  fill(255,255,230);
  triangle(48,40,52,40,50,-5);//first star
  triangle(48,40,52,40,50,100);
  triangle(12,40,50,42,50,38);
  triangle(90,40,50,42,50,38);
  pop();
  
  push();
  fill(255,255,230);
  triangle(140,230,144,230,142,200);//second star
  triangle(140,230,144,230,142,280);
  triangle(110,232,142,234,142,230);
  triangle(175,232,142,234,142,230);
  
  pop();
  
  
  push();
  fill(255,255,230);
  triangle(433,50,439,50,436,120);//third star
  triangle(433,50,439,50,436,10);
  triangle(390,50,436,47,436,53);
  triangle(480,50,436,47,436,53);
  pop();
  
  push();
  fill(255,255,230);
  triangle(536,500,544,500,540,460);//fourth
  triangle(536,500,544,500,540,560);
  triangle(495,501,537,505,537,498);
  triangle(585,501,537,505,537,498);
pop();

    
  ellipse(250,300,1,1);
  ellipse(130,200,1,1);
  ellipse(203,298,1,1);
  ellipse(123,120,1,1);
  ellipse(130,142,1,1);
  ellipse(134,336,1,1);
  ellipse(439,128,1,1);
  ellipse(10,10,1,1);
  ellipse(11,230,1,1);
  ellipse(13,423,1,1);
  ellipse(487,11,1,1);
  ellipse(476,27,1,1);
  ellipse(495,538,1,1);
  ellipse(376,237,1,1);
  ellipse(243,121,1,1);
  ellipse(111,100,1,1);
  ellipse(5,433,1,1);
  ellipse(432,567,1,1);
  ellipse(347,278,1,1);
  ellipse(476,588,1,1);
  ellipse(34,175,1,1);
  ellipse(23,457,1,1);
  ellipse(25,250,1,1);
  ellipse(15,232,1,1);
  ellipse(250,15,1,1);
  ellipse(230,10,1,1);
  ellipse(150, 5,1,1);
  ellipse(123,394,1,1);
  ellipse(134,176,1,1);
  ellipse(167,246,1,1);
  ellipse(147,458,1,1);
  ellipse(112,347,1,1);
  ellipse(76,485,1,1);
  ellipse(54,237,1,1);
  ellipse(276,57,1,1);
  ellipse(227,34,1,1);
  ellipse(98,35,1,1);
  ellipse(100,23,1,1);
  ellipse(134,45,1,1);
  ellipse(142,52,1,1);
  ellipse(5,267,1,1);
  ellipse(7,136,1,1);
  ellipse(23,256,1,1);
  ellipse(15,253,1,1);
  ellipse(21,113,1,1);
  ellipse(26,136,1,1);
  ellipse(42,167,1,1);
  ellipse(51,126,1,1);
  ellipse(64,150,1,1);
  ellipse(73,163,1,1);
  ellipse(115,115,1,1);
  ellipse(238,23,1,1);
  ellipse(138,320,1,1);
  ellipse(526,113,1,1);
  ellipse(512,123,1,1);
  ellipse(457,93,1,1);
  ellipse(486,263,1,1);
  ellipse(327,123,1,1);
  ellipse(476,125,1,1);
  ellipse(483,262,1,1);
  ellipse(313,139,1,1);
  ellipse(348,176,1,1);
  ellipse(321,231,1,1);
  
}