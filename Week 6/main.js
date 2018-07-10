
var c = document.getElementById("gamecanvas");

var ctx = c.getContext("2d");

const tileWidth = 64;
const tileHeight = 58;
const gridWidth = 1000;
const gridHeight = 1000;
//Initialisation of global objects
var enemies = [];
var score = 0;
var health = 100;
var dt = 1;
//Player object
var player = new Player();
//Enemy object
enemies.push(new Enemy());

var tilesetLevel1 = document.createElement("img");
    tilesetLevel1.src = "Images/Tileset.png";

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
//Tileset access example
// for(i = 0; i < level1.layers[0].data.length; i++)
// {
//   if(level1.layers[0].data[i] != 0)
//   {
//     console.log(level1.layers[0].data[i]);
//   }
// }
}
