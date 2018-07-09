function movement()
{
  if (player.jumping) {
    player.VelY -= 5;
  }
  if (player.crouching) {
    player.y++;
  }
  if (player.movingRight) {
    player.x++;
  }
  if (player.movingLeft) {
    player.x--;
  }
  //Vector movement
  player.x += player.VelX;
  player.y += player.VelY;
for(i = 0; i < enemies.length; i++)
 {
   enemies[i].move();
 }
}
