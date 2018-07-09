var c = document.getElementById("gamecanvas");

var ctx = c.getContext("2d");


//Initialisation of global objects

//Keyboard Listener object
var listener = new window.keypress.Listener();
listener.simple_combo("s", function() {
    player.y += 5;
});
listener.simple_combo("d", function() {
    player.x += 5;
});
listener.simple_combo("w", function() {
    player.y -= 5;
});
listener.simple_combo("a", function() {
    player.x -= 5;
});
//Player object
var player = new Player();


//Main game loop
function Gameloop()
{
    Draw();
    window.requestAnimationFrame(Gameloop)
}

//Init game
window.onload = function() {
Gameloop();
}
