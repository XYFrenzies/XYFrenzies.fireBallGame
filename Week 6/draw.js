//Image imports
var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";


function Draw()
{
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(BGImage, 0, 0);
}
