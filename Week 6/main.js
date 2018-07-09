var c = document.getElementById("gamecanvas");
var ctx = c.getcontext("2d");



//Main game loop
function Gameloop()
{
    Draw();
}

//Init game
window.onload = function() {
Gameloop();
}
