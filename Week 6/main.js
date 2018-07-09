var c = document.getElementById("gamecanvas");

var ctx = c.getContext("2d");


//Initialisation of global objects

//Player object
var player = new Player();


//Main game loop
function Gameloop()
{
    Draw();
    movement();
    window.requestAnimationFrame(Gameloop)
}

//Init game
window.onload = function() {
Gameloop();
}
