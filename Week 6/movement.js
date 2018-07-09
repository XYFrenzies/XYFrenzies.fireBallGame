function movement()
{
  if (player.jumping) {
    //To determine if the player is grounded or not
    player.isPlayerGrounded == false;
    player.y--;
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
for(i = 0; i < enemies.length; i++)
 {
   enemies[i].move();
 }
}
