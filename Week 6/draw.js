//Image imports
var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";


function Draw()
{
<<<<<<< HEAD
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(BGImage, 0, 0, 1650, 870);
=======
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(BGImage, 0, 0);
>>>>>>> 9a2cfdcd58c1e7c56be25a78852eeabe09251336
}
