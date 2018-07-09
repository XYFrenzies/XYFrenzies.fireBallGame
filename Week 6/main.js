
var c = document.getElementById("gamecanvas");

var ctx = c.getContext("2d");


//Initialisation of global objects
var enemies = [];
//Player object
var player = new Player();
//Enemy object
enemies.push(new Enemy());

//Main game loop
function Gameloop()
{
    Draw();
    gameLogic();
    movement();
    window.requestAnimationFrame(Gameloop);
}

//Init game
window.onload = function() {
Gameloop();
}
