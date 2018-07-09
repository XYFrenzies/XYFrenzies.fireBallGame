var c = document.getElementById("gamecanvas");
<<<<<<< HEAD
var ctx = c.getctx("2d");
=======
var ctx = c.getContext("2d");
>>>>>>> ad8a2ae7e6486df0aed47278502c2248b8c8d854



//Main game loop
function Gameloop()
{
    Draw();
}

//Init game
window.onload = function() {
Gameloop();
}
