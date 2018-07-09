
var c = document.getElementById("gamecanvas");

var ctx = c.getContext("2d");


//Initialisation of global objects
var enemies = [];
var score = 0;
var health = 100;
var dt = 1;
//Player object
var player = new Player();
//Enemy object
enemies.push(new Enemy());

var lastUpdate = Date.now();
//Main game loop
function Gameloop()
{
    dt = Date.now() - lastUpdate;
    if(dt === 0){
      dt = 1/60;
    }
    Draw();
    gameLogic();
    movement();
    lastUpdate = Date.now(); //1000
    window.requestAnimationFrame(Gameloop);
}

//Init game
window.onload = function() {
Gameloop();
}
