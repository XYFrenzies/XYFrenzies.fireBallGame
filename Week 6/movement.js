function movement()
{
  if (player.jumping && player.jumpLock == false) {
    player.isGrounded = false;
    player.VelY = -20;
    player.jumpLock = true;
  }
  if (player.crouching) {
    //Do stuff
  }
  if (player.movingRight) {
    if (player.VelX < 6) {
      player.VelX += 2;
    }
  }
  if (player.movingLeft) {
    if (player.VelX > -6) {
      player.VelX -= 2;
    }
  }
  //Player touching ground check
  if(player.isGrounded) {
    player.VelY = 0;
    player.y = groundHeight;
  }
  //Apply vector movement
  player.x += player.VelX * dt / 11;
  player.y += player.VelY * dt / 11;
  console.log(player.isGrounded);
for(i = 0; i < enemies.length; i++)
 {
   enemies[i].move() * dt * 20;
 }
}
