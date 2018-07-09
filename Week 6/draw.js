//Image imports
var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";


function Draw()
{
    //Draw background
    ctx.drawImage(BGImage, 0, 0, 1650, 870);
    //Draw player
    ctx.drawImage(player.image, player.x, player.y);
    //Draw enemies
    for(i = 0; i < enemies.length; i++)
    {
      ctx.drawImage(enemies[i].image, enemies[i].x, enemies[i].y, 70, 70);
    }

    ctx.fillStyle = "gold";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score,10,50);
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Health: " + health,c.width - 200,50);
}
