function gameLogic() {
  //Run the enemy ai
  for(i = 0; i < enemies.length; i++)
  {
    enemies[i].ai();
  }


//This is going to be for the jumping mechanics
  if((player.jumping > player.gravity) && player.isPlayerFalling = true)
  {

    player.VelY += 10;

  }
  if(player.VelY = 30)
  {
    player.isPlayerFalling == true;
    player.VelY -= 10;

  }

  if(player.VelY = 0)
  {
    player.isPlayerFalling = false;
    player.isPlayerGrounded = true
  }
}
