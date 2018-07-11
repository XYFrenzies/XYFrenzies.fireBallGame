function collides()
{
  if(enemies.length > 0)
  {
  for(i = 0; i < enemies.length; i++)
  {
    var r1 = 18;
    var r2 = 18;
    var deleted = 0;
    if(Math.sqrt( (player.x - enemies[i].x) * (player.x - enemies[i].x) + (player.y - enemies[i].y) * (player.y - enemies[i].y) ) < (r1 + r2))
    {
      //Trigger
    }
    if (orbs.length > 0)
    {
    for(l = 0; l < orbs.length; l++)
    {
      var r3 = 5;
      var r4 = 5;
      if(enemies.length <= 0)
      {
        break;
      }
      if(Math.sqrt( (orbs[l].x - (enemies[i].x + 25)) * (orbs[l].x - (enemies[i].x + 25)) + (orbs[l].y - (enemies[i].y + 25)) * (orbs[l].y - (enemies[i].y + 25)) ) < (r3 + r4))
      {
        delete enemies[i];
        deleted++;
        enemies.sort();
        score += 100;
        enemies.length -= deleted;
        i--;
      }
    }
    }
  }
}
}
