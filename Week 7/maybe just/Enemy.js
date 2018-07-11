var Enemy = function()
{


    this.x = player.x;
    this.y = player.y + -200;

    this.width = 188/4;
    this.height = 241/4;

    this.sprite = new Sprite("Images/Enemy sprite sheet.png");


    this.sprite.buildAnimation(8,2,131,93,0.2,[0,1,2]);

    this.sprite.buildAnimation(8,2,131,93,0.2,[7,6,5]);

    this.sprite.buildAnimation(8,2,131,93,0.1, [8,8,8,9,10,11])

    this.sprite.buildAnimation(8,2,131,93,0.1, [15,15,15,14,13,12])

    this.isFalling = true;

    
}

Enemy.prototype.Attack = function()
{
    if(this.sprite.currentAnimation == 0)
    {
        this.sprite.setAnimation(2);
        if(this.sprite.currentAnimation != 2)
        {
            this.sprite.setAnimation(2);
        }
    }
    if(this.sprite.currentAnimation == 1)
    {
        if(this.sprite.currentAnimation != 3)
        {
            this.sprite.setAnimation(3);
        }
    }
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
        if(this.x - 70 >= player.x)
        {
            this.x -= 2;
            if(this.sprite.currentAnimation != 0)
            {
                this.sprite.setAnimation(0);
            }
        }
        if(this.x + 25 < player.x)
        {
            this.x += 2;
            if(this.sprite.currentAnimation != 1)
            {
                this.sprite.setAnimation(1);
            }
        }
    }
    this.sprite.update(dt);
}

Enemy.prototype.Draw = function()
{

    this.sprite.draw(context,this.x - player.x + 600, this.y - player.y + 340);


}


