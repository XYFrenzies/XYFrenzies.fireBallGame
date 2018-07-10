//Image imports
var BGImage = document.createElement("img");
BGImage.src = "Images/Background.png";


function Draw()
{
    //Draw background
    ctx.drawImage(BGImage, 0, 0, 1650, 870);
    //Draw player
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
    //Draw enemies
    for(i = 0; i < enemies.length; i++)
    {
      ctx.drawImage(enemies[i].image, enemies[i].x, enemies[i].y, 70, 70);
    }

    ctx.fillStyle = "gold";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 50);
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Health: " + health,c.width - 200, 50);

    //Draw background tiles
    for(i = 0; i < level1.layers[0].data.length; i++)
    {
      if(level1.layers[0].data[i] != 0)
      {
        if(level1.layers[0].data[i] == 1)
        {
          ctx.fillStyle = "red";
          var x = (i % gridWidth) * tileWidth;
          var y = Math.floor(i / gridHeight) * tileHeight;
          ctx.fillRect(x, y, tileWidth, tileHeight);
        }
        if(level1.layers[0].data[i] == 2)
        {
          ctx.fillStyle = "blue";
          var x = (i % gridWidth) * tileWidth;
          var y = Math.floor(i / gridHeight) * tileHeight;
          ctx.fillRect(x, y, tileWidth, tileHeight);
        }
        if(level1.layers[0].data[i] == 3)
        {
          ctx.fillStyle = "green";
          var x = (i % gridWidth) * tileWidth;
          var y = Math.floor(i / gridHeight) * tileHeight;
          ctx.fillRect(x, y, tileWidth, tileHeight);
        }
        if(level1.layers[0].data[i] == 4)
        {
          ctx.fillStyle = "orange";
          var x = (i % gridWidth) * tileWidth;
          var y = Math.floor(i / gridHeight) * tileHeight;
          ctx.fillRect(x, y, tileWidth, tileHeight);
        }
        if(level1.layers[0].data[i] == 5)
        {
          ctx.fillStyle = "yellow";
          var x = (i % gridWidth) * tileWidth;
          var y = Math.floor(i / gridHeight) * tileHeight;
          ctx.fillRect(x, y, tileWidth, tileHeight);
        }
        if(level1.layers[0].data[i] == 6)
        {
          ctx.fillStyle = "purple";
          var x = (i % gridWidth) * tileWidth;
          var y = Math.floor(i / gridHeight) * tileHeight;
          ctx.fillRect(x, y, tileWidth, tileHeight);
        }
        if(level1.layers[0].data[i] == 7)
        {
          ctx.fillStyle = "white";
          var x = (i % gridWidth) * tileWidth;
          var y = Math.floor(i / gridHeight) * tileHeight;
          ctx.fillRect(x, y, tileWidth, tileHeight);
        }
      }
    }
}
