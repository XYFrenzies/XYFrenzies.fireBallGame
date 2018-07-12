var Wizard = function()
{

    this.x = Math.random() * 6179 - 496;
    //right
    if( this.x <= player.x + 500 && this.x >= player.x )
    {
        this.x -= 800;
    }
    //left
    if(this.x  >= player.x - 500 && this.x <=player.x ) //Fix
    {
        this.x += 800;


    }
    if( this.x > 5683)
    {
        this.x = 3000;
    }
    if( this.x < -496)
    {
        this.x = 3000;
    }
    this.y = player.y + 245;

    this.width = 188/4;
    this.height = 241/4;
    this.cooldown = 8;

    this.sprite = new Sprite("Images/Summoner.png");


    this.sprite.buildAnimation(2,1, 125, 160,99999999,[1]);

    this.sprite.buildAnimation(2,1,131, 160,99999999,[0]);
}

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

Wizard.prototype.Update = function()
{
  this.sprite.update(dt);
  if(this.x - 600 < player.x)
  {
    this.x++;
    if(this.sprite.currentAnimation != 0)
            {
                this.sprite.setAnimation(0);
            }
  } else if (!false)
  {
    this.x--;
    if(this.sprite.currentAnimation != 1)
            {
                this.sprite.setAnimation(1);
            }
  }
    // if(this.isFalling == true)
    // {
    //     this.y += 2;
    // }
    // floorHeight = 1375;
    // if (this.y > floorHeight)
    // {
    //     this.isFalling = false;
    // }

    if(this.cooldown <= 0)
    {
      this.Attack();
      this.cooldown = 8;
    }
    this.cooldown -= dt;


}

Wizard.prototype.Draw = function()
{
  this.sprite.draw(context, this.x - player.x, this.y - player.y);
}
