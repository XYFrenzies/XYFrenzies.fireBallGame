function collides()
{
  if(enemies.length > 0)
  {
  for(i = 0; i < enemies.length; i++)
  {
    var r1 = 40;
    var r2 = 40;
    var deleted = 0;
    if(enemies[i] != undefined)
    {
    if(Math.sqrt( (player.x - enemies[i].x) * (player.x - enemies[i].x) + (player.y - enemies[i].y) * (player.y - enemies[i].y) ) < (r1 + r2))
    {
      if(superTime > 0)
      {
        
      } else
      {
          lives -= 1;
          superTime = 1;
      }

      //Trigger
      enemies[i].Attack();
    }
    if (orbs.length > 0)
    {
    for(l = 0; l < orbs.length; l++)
    {
      var r3 = 5;
      var r4 = 5;
      if(enemies[i] != undefined)
      {
        if(orbs[l] != undefined)
        {
          if(Math.sqrt( (orbs[l].x - (enemies[i].x + 25)) * (orbs[l].x - (enemies[i].x + 25)) + (orbs[l].y - (enemies[i].y + 25)) * (orbs[l].y - (enemies[i].y + 25)) ) < (r3 + r4))
          {
            delete enemies[i];
            delete orbs[l];
            //enemies.length--;
            //i--;
            orbs.sort();
            enemies.sort();
            score += 100;
          }
        }


      }
    }
    }
    }
  }
}
}
