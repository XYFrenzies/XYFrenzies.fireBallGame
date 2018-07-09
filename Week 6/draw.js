//Image imports
var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";


function Draw()
{
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(BGImage, 0, 0);
}
