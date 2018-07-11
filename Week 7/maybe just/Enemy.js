var Enemy = function()
{


    this.x = player.x;
    this.y = player.y + -200;

    this.width = 188/4;
    this.height = 241/4;

    this.sprite = new Sprite("Images/Enemy sprite sheet.png");


    this.sprite.buildAnimation(8,2,131,93,0.5,[0,1,2]);

    this.sprite.buildAnimation(8,2,131,93,1,[7,6,5]);

    this.isFalling = true;

    
}

Enemy.prototype.Update = function()
{
       
    
  
    if(this.isFalling == true)
    {
        this.y += 2;
    }
    floorHeight = 1375;
    if (this.y > floorHeight)
    {
        this.isFalling = false;
    }

    if(this.isFalling == false)
    {
        if(this.x > player.x)
        {
            this.x -= 2;
        }
        if(this.x < player.x)
        {
            this.x += 2;
        }
    }
    this.sprite.update(dt);
}

Enemy.prototype.Draw = function()
{

    this.sprite.draw(context,this.x - player.x + 600, this.y - player.y + 340);


}
