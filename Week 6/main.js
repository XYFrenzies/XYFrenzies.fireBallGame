var c = document.getElementById("gamec");
var ctx = c.getctx("2d");



//Main game loop
function Gameloop()
{
    Draw();
}

//Init game
window.onload = function() {
Gameloop();
}
