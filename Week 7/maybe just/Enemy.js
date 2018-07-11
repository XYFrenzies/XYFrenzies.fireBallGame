var Enemy = function()
{


    this.x = player.x;
    this.y = player.y;

    this.width = 188/4;
    this.height = 241/4;

    this.sprite = new Sprite("Images/Enemy sprite sheet.png");

    this.sprite.buildAnimation (4,2,131,90,0.5, [0,1,2,3,4,5,6,7]);

    this.isFalling = true;
}

Enemy.prototype.Update = function()
{
    var dt = GetDeltaTime();

    this.sprite.update(dt);
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
}

Enemy.prototype.Draw = function()
{

    this.sprite.draw(context,this.x - player.x + 600, this.y - player.y + 340);


}
