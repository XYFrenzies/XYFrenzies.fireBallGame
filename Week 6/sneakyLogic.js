function gameLogic() {
  //Run the enemy ai
  for(i = 0; i < enemies.length; i++)
  {
    enemies[i].ai();
  }
  groundHeight = 700;
  if(player.y < groundHeight) {
    player.VelY++;
  }
  else if (player.y >= groundHeight) {
    player.VelY = 0;
  }
}
