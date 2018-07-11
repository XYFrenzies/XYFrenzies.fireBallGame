function collides()
{
  for(i = 0; i < enemies.length; i++)
  {
    var r1 = 18;
    var r2 = 18;

    if(Math.sqrt( (player.x - enemies[i].x) * (player.x - enemies[i].x) + (player.y - enemies[i].y) * (player.y - enemies[i].y) ) < (r1 + r2))
    {
      //Trigger
    }
    for(i = 0; i < orbs.length; i++)
    {

    }
  }
}
