var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");



//Main game loop
function Gameloop()
{
    Draw();
}

//Init game
window.onload = function() {
Gameloop();
}
