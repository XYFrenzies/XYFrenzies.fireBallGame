function collides()
{
  //This involves the collision of the enemy with the player.
  if(enemies.length > 0)
  {
  for(i = 0; i < enemies.length; i++)
  {
    //Checks for the radius of the enemy using circle to circle collision.
    var r1 = 40;
    var r2 = 40;
    var deleted = 0;
    if(enemies[i] != undefined)
    {
    if(Math.sqrt( (player.x - enemies[i].x) * (player.x - enemies[i].x) + (player.y - enemies[i].y) * (player.y - enemies[i].y) ) < (r1 + r2))
    {
      //This checks that if the player is within the range of the enemy,
      //the lives will decrease by 1 and that the enemy attack will occur.
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
    //This is the collision of the orbs with the enemies.
    for(l = 0; l < orbs.length; l++)
    {
      var r3 = 5;
      var r4 = 5;
      if(enemies[i] != undefined)
      {
        if(orbs[l] != undefined)
        {
          if(Math.sqrt( (orbs[l].x - (enemies[i].x + 25 )) * (orbs[l].x - (enemies[i].x + 25)) + (orbs[l].y - (enemies[i].y + 25)) * (orbs[l].y - (enemies[i].y + 25)) ) < (r3 + r4))
          {
            //If the orb collides with the enemy, the enemy will delete as well as the orb.
            delete enemies[i];
            delete orbs[l];
            //The score will increase by 100
            score += 100;
          }
        }


      }
    }
  }
}
}
}
  //This code is to get the wizard fireball to interact with the player and as a result, they lose a life.
  for(i = 0; i < fireBalls.length; i++)
  {
    var r5 = 50;
    var r6 = 50;
    if(player != undefined)
    {
      if(fireBalls[i] != undefined)
      {
        if(Math.sqrt(  (fireBalls[i].x + player.width + 600 - (player.x + 25)) * (fireBalls[i].x + player.width + 600 - (player.x + 25)) + (fireBalls[i].y + 340 - (player.y + 25)) * (fireBalls[i].y + 340 - (player.y + 25)) ) < (r5 + r6))
        {
        //This is the check if the player is interacting with the wizards fireball.
        //The lives will decrease by 1 and that the fireball will delete from the game.
          alert("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!");
          lives -= 1;
          delete fireBalls[i];
        }
      }


    }
  }


}
