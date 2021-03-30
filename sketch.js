const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sandwich;

function preload(){
	sandwich = loadImage("sandwich.png");
}

function setup() {
	createCanvas(680, 653);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);  
}

function draw() {
	background("cyan");

	textSize(15);
	fill("black");
	
	text("recipe for the sandwich:",50 ,50);
	text("ingrediants:",50, 85);
	text("1)bread",50, 110);
	text("2)vegetables(tomatoes,cucumber)",50, 135);
	text("3)butter/mayonnaise/cheese",50, 160);
	text("4)any seasoning like origano(optional)",50, 185);
	text("process/how to make sandwich(raw):",50, 220);
	text("1)cut the tomatoes and cucumber",50, 245);
	text("2)put some butter/mayonnaise/cheese on the bread",50, 270);
	text("3)after putting the butter/mayonnaise/cheese put some vegetables on it",50, 295);
	text("4)then you can put some seasoning over it",50, 320);
	text("5)the sandwich is ready, bon appetit!!",50, 345);
	
	image(sandwich ,200,350,300,300);
    
	drawSprites();
}



