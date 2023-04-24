

var logoFont;

//Global variables
let angle = 0; //angle of wheel in rotation
let rotSpeed = 0; //speed of rotation


let Onexcoords = []; //arrays containing positions of drawn shapes
let Oneycoords = [];
let Twoxcoords = [];
let Twoycoords = [];
let Threexcoords = [];
let Threeycoords = [];



let brushvalue = 1; //draw circle

let springUse = false; //whether the spring controls the wheel

//Spring Variables
let bob = 250; //bob
let anchor;
let velocity;  //starting velocity
let restLength = 200; //length of the spring at rest
let k = 0.02; //spring constant(how fast spring will move)
let gravity;


function preload(){
    logoFont = loadFont('assets/sticks.otf') //logo
    //rectMode(CENTER);
}

function setup()
{
	createCanvas(1000, 1000);
    angleMode(DEGREES);
    rectMode(CENTER); //center of the square
    
    //Spring
    bob = createVector(350,200); //the part of the spring that bounces
    anchor = createVector(300,0); //anchor of the spring
    velocity = createVector(0,0); //2d vector
    gravity = createVector(0,0.1); //vector that points down
    
}

function draw()
{
    if(velocity == 0)
        {
            gravity.y = 0; //spring will not move after reset
            
        }
    if(springUse == true)
        {
    rotSpeed = velocity.x + velocity.y; //pulling down on the spring will also spin the wheel    
        }

    background(200); //fill white
    
    //TEXT
    //User Instructions
    
    stroke(1);
    textFont(logoFont);
    textSize(20);
    text("P r e s s   t h e   a r r o w s   t o   s p i n", 30, 30);
    
    text("C l i c k  o n  w h e e l",15,120);
    text("t o  d r a w",30,150);
    
    text("P r e s s   C  t o  d r a w / r e s t a r t", 380, 30);
    
    text("K e y s : 1,2,3", 30,370)
    text("B r u s h   V a l u e", 30, 400);
    textSize(40);
    text(brushvalue,60,450);
    textSize(20);
    
    
    
    
    
    text("c l i c k  f o r  S p r i n g  C o n t r o l",600, 180);
    
    text("'r'  t o  r e m o v e  l a s t  s h a p e",600, 120);
    
    
    //Changes centre of origin
    translate(350,250);
    
    //Preset selectors
    fill(255,0,0);
    rect(-80,300,40,40);
    
    fill(0,255,0);
    rect(0,300,40,40);
    
    fill(0,0,255);
    rect(80,300,40,40);
    
    //spring selector
    if(springUse == false)
        {
    fill(0,0,0, 25); //changes colour of box when checked
        }
    else
        {
            fill(255,255,0);
        }
    rect(anchor.x,anchor.y - 50,20,20); //slightly above the anchor of the spring
    
    //spring
    //Spring
    line(bob.x,bob.y,anchor.x,anchor.y); //draws a line from the bob and the anchor
    
    fill(45,197,244);
   
    ellipse(anchor.x,anchor.y,64); // Anchor
   
    ellipse(bob.x,bob.y,64); //Bob
    
     let force = p5.Vector.sub(bob,anchor); //vector function that subtracts one vector from another
    
    let extension = force.mag() - restLength; //How much is is stretched from the rest Length
   
    force.normalize(); //makes vector between 0 and 1
    
    force.mult(-1 * k * extension); //-1 as the spring goes backwards, multiplied by spring constant multiplied by the extension
   
    velocity.add(force); //jerks the spring back
    
    velocity.add(gravity); //applies gravity physics(the y axis is slowly decreasing)
    
    bob.add(velocity); //moves the bob
    
    velocity.mult(0.99); // loses velocity over time
    
    if (mouseIsPressed)
        {
 //(mouse x is 355 more than bob.x)
            
            if(bob.x + 355 > mouseX - 50 && bob.x + 355 < mouseX + 50) //setting bounds to select the bob
                {
                    if(bob.y + 255 > mouseY - 50 && bob.y + 255 < mouseY + 50) //if it is touching the bob
                        
                    
                    {
                    bob.x = mouseX - 355;
                    bob.y = mouseY - 255;
                        
                        //bob will be where the mouse is, subtraction is due to the translation
                            
                        }
                    
                    
                }
        }
    
    
   
    
    
    //rotate by the angle 
    angle = angle + rotSpeed; // creating a loop as every frame it will incremement
    
    rotate(angle); //rotates anything that is drawn after this function
    
    fill(0);//black
    
    stroke(1);
    strokeWeight(1);
    
    
    fill(150,150,150);
    
    //drawing the board
    
    triangle(0,0,200,0,195,-50);
    triangle(0,0,-200,0,-195,50);
   
    triangle(0,0,0,200,50,195);
    triangle(0,0,0,-200,-50,-195);
    
    triangle(0,0,130,150,175,100);
    triangle(0,0,-130,-150,-175,-100);
    
    triangle(0,0,100,-175,140,-145);
    triangle(0,0,-100,+175,-140,+145);
    
    
  //OnexCoords is the coordinates for brush one,
  //twoxcoords is for brush two...etc
    
    
 for(let i = 0; i < Onexcoords.length; i++)
     {
         for(let i = 0; i < Oneycoords.length; i++)
             {
           fill(255,0,0);
            ellipse(Onexcoords[i],Oneycoords[i],20,20);  //runs through the length of the array adding each circle that has been drawn     
             }
     }
    
for(let i = 0; i < Twoxcoords.length; i++)
    {
        for(let i = 0; i < Twoycoords.length; i++)
            {
            fill(0,255,0);
            rect(Twoxcoords[i],Twoycoords[i],20,20);
            }
    }
    
for(let i = 0; i < Threexcoords.length; i++)
    {
        for(let i = 0; i < Threeycoords.length; i++)
            {
            
         fill(0,0,255);
         triangle(Threexcoords[i],Threeycoords[i],Threexcoords[i] + 20,Threeycoords[i], Threexcoords[i] + 8,Threeycoords[i] - 20);
            }
    }
     

    
    noFill();
    strokeWeight(2);
//    ellipse(0,0,400,400) //outside circle
    fill(255,0,0);
    triangle(-5,-200,5,-200,0, -205); //marker
    strokeWeight(5);
    
    
}

  function keyPressed()
{
    if(keyCode == 38) // up arrow key
        {
            rotSpeed += 3;
            console.log(rotSpeed); //speeds up rotation speed
        }
    if(keyCode == 40) // down arrow key
        {
            rotSpeed -= 3;
            console.log(rotSpeed); //slows down rotSpeed
        }
    if(keyCode == 67) //C
        {
            //resets all parameters
            
            
            //All the array holding the shapes are cleared
            Onexcoords.length = 0;
            Oneycoords.length = 0;
            Twoxcoords.length = 0;
            Twoycoords.length = 0;
            Threexcoords.length = 0;
            Threeycoords.length = 0;
            
            rotSpeed = 0;
            angle = 0;
            
            velocity.x = 0;
            velocity.y = 0;
            
            springUse = false;
            
        }
   
        //change brushes
    if(keyCode == 49) //1
        {
            brushvalue = 1;
        }
    if(keyCode == 50) //2
        {
            brushvalue = 2;
        
        }
    if(keyCode == 51) //3
        {
           brushvalue = 3;
        }
    
    if(keyCode == 82) //r   removing last shape made                           with brush selected
        {
            if(brushvalue == 1)
                {
            Onexcoords.pop();
            Oneycoords.pop();
                }
            if(brushvalue == 2)
                {
            Twoxcoords.pop();
            Twoycoords.pop();
                }
            if(brushvalue == 3)
                {
            Threexcoords.pop();
            Threeycoords.pop(); //depending on brush selected, it will remove the last values of the arrays that are drawing the shapes
                }
        }
    
   
  
    }

 function mousePressed()
{
    
  var newcoordx = mouseX - 350; //taking away the translation
  var newcoordy = mouseY - 250;
    
//  console.log(newcoordx);
    
  if(newcoordx > 290 && newcoordx < 310)
        {
         springUse = springUse != true; //if within bounds of the spring checking box
        console.log(springUse);
        }

    
    
  //Preset Selector
    
    //if within bounds will trigger a function that draws shapes on the wheel
    
  if(newcoordx > -90 && newcoordx < -60 && newcoordy > 280 && newcoordy < 320)
      {
          PresetOne();
      }
  if(newcoordx > -15 && newcoordx < 15 && newcoordy > 280 && newcoordy < 320)
      {
         PresetTwo(); 
      }
if(newcoordx > 60 && newcoordx < 90 && newcoordy > 280 && newcoordy < 320)
    {
        PresetThree();
    }

    
//  console.log(newcoordx, newcoordy);
    
    if(newcoordx < 150 && newcoordy < 150 && newcoordx > -150 && newcoordy > -150) //if within the bounds of the wheel
        {
    if(brushvalue == 1)
        //pushes to different arrays depending on the brush selected
        {
    Onexcoords.push(newcoordx); 
    Oneycoords.push(newcoordy);
        }
    if(brushvalue == 2)
        {
    Twoxcoords.push(newcoordx);
    Twoycoords.push(newcoordy);
        }
    if(brushvalue == 3)
        {
    Threexcoords.push(newcoordx);
    Threeycoords.push(newcoordy);
        }
    }
    
 }
    

function mouseReleased()
{
     move = false; //for the spring
}
function PresetOne()
{
    
    //clears all shapes on screen
            Onexcoords.length = 0;
            Oneycoords.length = 0;
            Twoxcoords.length = 0;
            Twoycoords.length = 0;
            Threexcoords.length = 0;
            Threeycoords.length = 0; 
    
    
    
    console.log("Running Preset One");
   
    //values of shapes
     Onexcoords.push(-51,-40,-20,5,31,53,72,75,62,43,17,-12,-37,-70,-97,-106,-115,-119,-115,-101,-86,-63,-39,-49,-29); 
    Oneycoords.push(-1,-25,-42,-49,-44,-29,-2,24,51,65,78,81,79,73,57,38,5,-29,-56,-82,-107,-132,-160,-145,-165,);
}

function PresetTwo()
{
    
    Onexcoords.length = 0;
            Oneycoords.length = 0;
            Twoxcoords.length = 0;
            Twoycoords.length = 0;
            Threexcoords.length = 0;
            Threeycoords.length = 0;
    
    console.log("Running Preset Two");
    Twoxcoords.push(1,0,-1,-90,-95,99,102,-84,-108,-134,64,81,97,66,85,105,-45,-60,-76);
    
    Twoycoords.push(-113,-41,78,24,-2,-26,-1,-72,-89,-108,-86,-109,-132,54,70,85,59,79,98);
}

function PresetThree()
{
    console.log("Running Preset Three");
    
    Onexcoords.length = 0;
            Oneycoords.length = 0;
            Twoxcoords.length = 0;
            Twoycoords.length = 0;
            Threexcoords.length = 0;
            Threeycoords.length = 0;
    
    Threexcoords.push(-81,-17,44,106,-129,-2,-46,-71,-96,29,57,79,-108,106);
    
    Threeycoords.push(85,76,68,72,78,-133,-91,-49,-2,-103,-58,-17,34,24);
}



