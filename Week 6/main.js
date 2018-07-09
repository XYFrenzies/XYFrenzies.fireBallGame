var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

//Image imports
var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";


//Main game loop
function Gameloop()
{
    Draw();
}

//Init game
Gameloop();
