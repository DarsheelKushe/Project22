var starImg,bgImg;
var star, starBody;
var starGroup;
var r = 0;
var count=0;
//create variable for fairy sprite and fairyImg
var fairy,fairyImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load Sound for fairy here
	music = loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
	fairyImage = loadAnimation("fairy1.png","fairy2.png");
}

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	

	starGroup = createGroup();
    starBodyGroup = [];

	//write code to play fairyVoice sound
	music.play();

	//create fairy sprite and add animation for fairy

	fairy = createSprite(350,600,50,50);
	fairy.addAnimation("flyingfairy",fairyImage);
	fairy.scale = 0.4;

	fairy.setCollider("circle",0,0,200);
	fairy.debug = false;

	Engine.run(engine);
}


function draw() {
	background(bgImg);
	count++;
    if (count % 80 == 0) {
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	starBody = Bodies.circle(Math.round(random(20,650)) , 30 , 5 , {restitution:0.5, isStatic:false});
	star.body = starBody;
	

	starGroup.add(star);
	starBodyGroup.push(starBody);

	World.add(world, starBody);
	console.log("ruig");
	}

	for(var i=0; i< starGroup.length ; i++){
		var star1 =starGroup.get(i);
		star1.x= starBodyGroup[i].position.x;
		star1.y= starBodyGroup[i].position.y;

		if (star1.isTouching(fairy)) {  
			star1.visible=false;
			
			}
	}
		
  //console.log(star.y);

  //write code to stop star in the hand of fairy
 
 
  drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	//writw code to move fairy left and right
	if(keyCode === RIGHT_ARROW)
	{
		fairy.velocityX = 6;
	}

	if(keyCode === LEFT_ARROW)
	{
		fairy.velocityX = -6;
	}
}

