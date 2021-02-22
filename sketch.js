const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var ball, slingshot;
var wall;
var gameState=0;
var boxarray=[];
var boxarray2=[];


function preload(){
    jcbImage=loadImage("sprites/jcb1.png");
    bgImage=loadImage("sprites/bgg.jpeg");
}


function setup(){
    var canvas = createCanvas(1700,800);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(850,height,1700,30);
    wall = new Ground(260,750,30,300)
    ball = new Ball(100,300,80,80);

    box1  = new Box(1200,100,70,70);
    box2  = new Box(1200,100,70,70);
    box3  = new Box(1200,100,70,70);
    box4  = new Box(1200,100,70,70);
    box5  = new Box(1200,100,70,70);
    box6  = new Box(1200,100,70,70);
    box7  = new Box(900,100,70,70);
    box8  = new Box(900,100,70,70);
    box9  = new Box(900,100,70,70);
    box10 = new Box(900,100,70,70);
    box11 = new Box(900,100,70,70);
    box12 = new Box(900,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(700,100,70,70);
    box17 = new Box(700,100,70,70);
    box18 = new Box(700,100,70,70);
    box19 = new Box(700,100,70,70);
    box20 = new Box(700,100,70,70);

    createBox2();

    
    boxarray=[box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20]
    console.log(boxarray);
    
    slingshot = new SlingShot(ball.body,{x:380, y:310});
}

function draw(){
        background(bgImage);
    
        
    Engine.update(engine);
    if(gameState ===0){
for(var i=0; i<20; i++){
boxarray[i].display();


}
if(boxarray.length===0){
    gameState=1;
    
}   
if(gameState===1){
    console.log("this is gameState 1")
}

    /*box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
*/}  

if(gameState===1){



    box101.display();
    box201.display();
    box30.display();
    box40.display();
    box50.display();
    box60.display();
    box70.display();
    box80.display();
    box90.display();
    box100.display();
    box110.display();
    box120.display();
    box130.display();
    box140.display();
    box150.display();
    box160.display();
    box170.display();
    box180.display();
    box190.display();
    box200.display();
}   
    
    ground.display();
    wall.display();
    
    slingshot.display();    

    ball.display();
    image(jcbImage,2,300,400,550)
  
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function createBox2(){
    box101 = new Box2(1300,100,70,70);
    box201 = new Box2(1300,100,70,70);
    box30 = new Box2(1300,100,70,70);
    box40 = new Box2(1300,100,70,70);
    box50 = new Box2(1300,100,70,70);
    box60 = new Box2(1300,100,70,70);
    box70 = new Box2(1000,100,70,70);
    box80 = new Box2(1000,100,70,70);
    box90 = new Box2(1000,100,70,70);
    box100 = new Box2(1000,100,70,70);
    box110 = new Box2(1000,100,70,70);
    box120 = new Box2(1000,100,70,70);
    box130 = new Box2(800,100,70,70);
    box140 = new Box2(800,100,70,70);
    box150 = new Box2(800,100,70,70);
    box160 = new Box2(800,100,70,70);
    box170 = new Box2(800,100,70,70);
    box180 = new Box2(800,100,70,70);
    box190 = new Box2(800,100,70,70);
    box200 = new Box2(800,100,70,70);
 
    boxarray2=[box101,box201,box30,box40,box50,box60,box70,box80,box90,box100,box110,box120,box130,box140,box150,box160,box170,box180,box190,box200]
    
       

}