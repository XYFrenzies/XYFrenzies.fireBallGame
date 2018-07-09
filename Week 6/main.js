var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");


var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";



function Draw()
{
    context.drawImage(BGImage, 0, 0, 1650, 870);
}











function Gameloop()
{
    Draw();
}

Gameloop();