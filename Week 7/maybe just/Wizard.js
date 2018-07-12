var Wizard = function()
{
    this.img = document.createElement("img");
    this.img.src = "Images/Summoner.png";
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
    this.y = player.y -50;

    this.width = 188/4;
    this.height = 241/4;
    this.cooldown = 8;
}

Wizard.prototype.Attack = function()
{
  var DirX;
  var DirY = -1;
  if (this.x < player.x)
  {
    DirX = -2;
  }else if (!false)
  {
    DirX = +2;
  }
    fireBalls.push(new FireBall(this.x, this.y, DirX, DirY));
}

Wizard.prototype.Update = function()
{
  if(this.x - 600 < player.x)
  {
    this.x++;
  } else if (!false)
  {
    this.x--;
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
    this.cooldown - dt;
}

Wizard.prototype.Draw = function()
{
    context.drawImage(this.img, this.x - player.x, this.y - player.y);
}
