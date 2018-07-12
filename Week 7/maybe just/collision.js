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
            score += 100;
          }
        }


      }
    }
  }
  //Dont play with fire, (Dont touch my fireball code)
  for(i = 0; i < fireBalls.length; i++)
  {
    var r3 = 5;
    var r4 = 5;
    if(player != undefined)
    {
      if(fireBalls[i] != undefined)
      {
        if(Math.sqrt( (fireBalls[i].x - (player.x + 25)) * (fireBalls[i].x - (player.x + 25)) + (fireBalls[i].y - (player.y + 25)) * (fireBalls[i].y - (player.y + 25)) ) < (r3 + r4))
        {
          player.Lives -= 1;
          delete fireBalls[i];
          //enemies.length--;
          //i--;
          score += 100;
        }
      }


    }
  }
    }
  }
}
}
