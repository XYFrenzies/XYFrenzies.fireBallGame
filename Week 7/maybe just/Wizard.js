var Wizard = function()
{
this.myFunnyBone = document.createElement("img");
this.myFunnyBone.src = "Images/Fun.png";
    this.x = Math.random() * 6179 - 496;
    //This is for the wizard to move to the right to follow the player.
    if( this.x <= player.x + 500 && this.x >= player.x )
    {
        this.x -= 8000;
    }
    //This is for the wizard to move to the left to follow the player.
    if(this.x  >= player.x - 500 && this.x <=player.x ) //Fix
    {
        this.x += 8000;


    }
    //This is to restrict the wizard from moving off map.
    //As there is not real collision occuring, the use of the
    //walls restricting the wizard will stop it from going outside the map.
    if( this.x > 5683)
    {
        this.x = 3000;
    }
    if( this.x < -496)
    {
        this.x = 3000;
    }
    this.y = player.y + 245;

    //This is rthe width and the height of the wizard.
    this.width = 188/4;
    this.height = 241/4;
    this.cooldown = 8;
    //This is the sprite definition of the wizard.
    this.sprite = new Sprite("Images/Summoner.png");
    this.sprite.buildAnimation(2,1, 125, 160,99999999,[1]); // Moves to the left.

    this.sprite.buildAnimation(2,1,131, 160,99999999,[0]); // Moves to the right.
}

//This is the attacking function of the wizard, when the player is in a
//specific direction from the wizard, the wizard will shoot out a fireball.

Wizard.prototype.Attack = function()
{
  var DirX;
  if (this.x - 600 < player.x)
  {
    DirX = 200;
  }else if (!false)
  {
    DirX = -200;
  }
    fireBalls.push(new FireBall(this.x, player.y + 340, DirX));
}

//This is the update for which calls for the animations whenever, the player in terms of the wizard has moved.
Wizard.prototype.Update = function()
{
  this.sprite.update(dt);
  if(this.x - 520 <= player.x)
  {
    this.x += 2;
    if(this.sprite.currentAnimation != 0)
    //This is the animation for when the wizard moves to the right.
            {
                this.sprite.setAnimation(0);
            }
  }
  if (this.x - 700 >= player.x)
  {
    this.x -= 2;
    if(this.sprite.currentAnimation != 1)
            {
    //This is the animation for when the wizard moves to the left.
                this.sprite.setAnimation(1);
            }
  }

//This is the cooldown for which the fireballs will be coming from the wizard.
    if(this.cooldown <= 0)
    {
      this.Attack();
      this.cooldown = 8;
    }
    this.cooldown -= dt;

}

//This is to draw the wizard and that it comes towards the centre of the player.
Wizard.prototype.Draw = function()
{

  context.fillStyle = "Red";
  context.fillText("Merlin the unkillable!", this.x - player.x - this.width / 2 - 50, this.y - player.y - this.height / 2 - 1);
  this.sprite.draw(context, this.x - player.x, this.y - player.y);
}
