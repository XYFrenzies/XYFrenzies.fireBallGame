function gameLogic() {
  //Run the enemy ai
  for(i = 0; i < enemies.length; i++)
  {
    enemies[i].ai();
  }
//This is going to be for the jumping mechanics
  if(player.jumping > gravity)
  {
    VelX += 10;

  }
  if(VelX == 30)
  {
    player.isPlayerFalling == True;
  }
}
