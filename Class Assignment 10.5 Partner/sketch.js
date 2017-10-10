//Tayleur and Deanna

var colorPos = mouseX %255; 
function setup(){

	createCanvas(600,600);


}

function draw(){



background(0, 200, 9);
  fill(255,0,0);

  if (mouseIsPressed)
    ellipse(mouseX, mouseY, 900, 900);






// this  is how to control color with your own function
push();

scale(mouseX/90,2);	


createShapes(mouseX,mouseY);

pop();

}



function createShapes (colorPos,color2){


stroke(color2);
//strokeWeight(colorPos);
fill(241, colorPos, color2);
ellipse(mouseX, mouseY,80,80);


fill(color2, 184, colorPos);
triangle(mouseX, mouseY, mouseX+25, mouseY-50, mouseX+50, mouseY);

fill(colorPos, color2, 244);
rect(mouseX,mouseY, 50,60);





}
