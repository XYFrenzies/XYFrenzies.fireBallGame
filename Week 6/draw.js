//Image imports
var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";


function Draw()
{
    //Draw background
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(BGImage, 0, 0, 1650, 870);
    //Draw player
    ctx.drawImage(player.image, player.x, player.y);
}
