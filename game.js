

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var screenwidth = canvas.width;
var screenheight = canvas.height;

var backgroundImage = new Image();
backgroundImage.src = "download.png";

var playerTop = new Image();
playerTop.src = "Player_Top.png";

var playerBottom = new Image();
playerBottom.src = "Player_Bottom.png";

var playerScaleX = 0.25;
var playerScaleY = 0.25;

var playerTopXPos = 1220;
var playerTopYPos = 1100;

var playerXPivitPoint = (screenwidth / 2) - playerScaleX /2;
var playerYPivitPoint = canvas.height / 2 - 400;

var playerBottomXPos = 305;
var playerBottomYPos = 375;

var rotation = 0;
var radius = 100;

mouse.Initialise(this.canvas);

//Should be for the mouse tracker
function mouseTracker()
{

	var distanceX = mouse.GetX() - playerTopXPos;
	var distanceY = mouse.GetY() - playerTopYPos;
	var angle = Math.atan2(distanceX, distanceY);

	rotation = -angle;

	//var pointX = playerTopXPos + radius * Math.cos(angle);
	//var pointY = playerTopYPos + radius * Math.sin(angle);
}





function Update()
{
	mouseTracker();
	console.log();

}





function Draw()
{
	
	context.fillStyle="#000000";
	context.fillRect( 0, 0, canvas.width, canvas.height);
	



	//
	//

	//draw the background images
	context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

	context.fillText(mouse.GetX() + "," + mouse.GetY(), 10, 20);
	//draw Player Bottom
	//Rotating the player
	


	context.save();
	context.scale(playerScaleX, playerScaleY);

	context.translate(playerTopXPos , playerTopYPos);

	context.rotate(rotation + 180);

	context.drawImage(playerTop, 0, 0);

	context.restore();

	
	context.drawImage(playerBottom, playerBottomXPos, playerBottomYPos, playerBottom.width * playerScaleX, playerBottom.height * playerScaleY);



}


function GameLoop()
{
	Update();
	Draw();
	requestAnimationFrame(GameLoop);
}

//Kick of the game loop
GameLoop();