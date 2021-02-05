const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var rope;
var roof1,roof2;
var backgroundImg;

var score = 0;

function preLoad(){
    polygon = loadImage("polygon.png")
    getBackgroundImg();
}

function setup(){
    createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;

    getBackgroundImg();

    ground = new Ground(500, 490, 1500, 20);

roof1 = new Ground(450,350,250,20)

roof2 = new Ground(800,200,210,20)

 polygon = new Polygon(150, 300, 40);

 rope = new Rope(polygon.body,{x:150,y:300})

 block1 = new Block(360,320,30,40)
 block2 = new Block(390,320,30,40)
 block3 = new Block(420,320,30,40)
 block4 = new Block(450,320,30,40)
 block5 = new Block(480,320,30,40)
 block6 = new Block(510,320,30,40)
 block7 = new Block(540,320,30,40)

 block8 = new Block(390,280,30,40)
 block9 = new Block(420,280,30,40)
 block10 = new Block(450,280,30,40)
 block11 = new Block(480,280,30,40)
 block12 = new Block(510,280,30,40)

 block13 = new Block(420,240,30,40)
 block14 = new Block(450,240,30,40)
 block15 = new Block(480,240,30,40)

 block16 = new Block(450,200,30,40)

 block17 = new Block2(740,180,30,40)
 block18 = new Block2(770,180,30,40)
 block19 = new Block2(800,180,30,40)
 block20 = new Block2(830,180,30,40)
 block21 = new Block2(860,180,30,40)

 block22 = new Block2(770,140,30,40)
 block23 = new Block2(800,140,30,40)
 block24 = new Block2(830,140,30,40)

 block25 = new Block2(800,100,30,40)


 

}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
  Engine.update(engine);
  
  fill("lime")
  textSize(25)
text("Score: "+score,800,50)

  ground.display();

  polygon.display();

  roof1.display();
  roof2.display();

block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();

block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();

block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();

block16.display();
block16.score();

block17.display();
block17.score();
block18.display();
block18.score();
block19.display();
block19.score();
block20.display();
block20.score();
block21.display();
block21.score();

block22.display();
block22.score();
block23.display();
block23.score();
block24.display();
block24.score();

block25.display();
block25.score();

rope.display();

fill(255)
textSize(25)
text("Drag the hexagonal stone & release it towards the blocks.  ",100,50)


}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   rope.fly();
}

async function getBackgroundImg(){

    var responce = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    
    var responceJson = await responce.json();
    
    console.log(responceJson);
    
    var dt = responceJson.datetime;
    
    console.log(dt);
    
    var hour = dt.slice(11,13);
    
    console.log(hour);
    
    if(hour>=06&&hour<=14){
        bg="bg.png";
    }
    
    else{
        bg = "bg2.jpg"
    }
    
    backgroundImg = loadImage(bg);
    console.log(backgroundImg)
    }

