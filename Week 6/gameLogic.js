function gameLogic() {
  //Run the enemy ai
  for(i = 0; i < enemies.length; i++)
  {
    enemies[i].ai();
  }
  groundHeight = 700;
  //Apply gravity
  if(player.y < groundHeight) {
    player.VelY++;
  }
  //Is player touchign ground
  else if (player.y >= groundHeight) {
    player.isGrounded = true;
    player.jumpLock = false;
  }

  //Slowly stop player movement
  if (player.VelX > 0)
  {
    player.VelX--;
  }
  if (player.VelX < 0)
  {
    player.VelX++;
  }
}
