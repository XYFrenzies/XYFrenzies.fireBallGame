function gameLogic() {
  //Run the enemy ai
  for(i = 0; i < enemies.length; i++)
  {
    enemies[i].ai();
  }
}
