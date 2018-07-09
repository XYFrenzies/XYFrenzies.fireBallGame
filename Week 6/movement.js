function movement()
{
  if (player.jumping && player.jumpLock == false) {
    player.isGrounded = false;
    player.VelY -= 20;
    player.jumpLock = true;
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
  //Player touching ground check
  if(player.isGrounded) {
    player.VelY = 0;
  }
  //Apply vector movement
  player.x += player.VelX;
  player.y += player.VelY;
for(i = 0; i < enemies.length; i++)
 {
   enemies[i].move();
 }
}
