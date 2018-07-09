function movement()
{



  if (player.jumping && player.isPlayerGrounded) {

    


    //player.y--;
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
