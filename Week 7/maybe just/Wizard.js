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
    this.y = player.y -50;

    this.width = 188/4;
    this.height = 241/4;
    this.cooldown = 8;
    this.sprite = new Sprite("Images/Enemy sprite sheet.png");


    this.sprite.buildAnimation(8,2,131,93,0.2,[0,1,2]);

    this.sprite.buildAnimation(8,2,131,93,0.2,[7,6,5]);

    this.sprite.buildAnimation(8,2,131,93,0.1, [8,8,8,9,10,11])

    this.sprite.buildAnimation(8,2,131,93,0.1, [15,15,15,14,13,12])



}

Wizard.prototype.Attack = function()
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
    fireBalls.push(new FireBall(this.x, this.y, (this.x - player.x), (this.y - player.y)))
}

Wizard.prototype.Update = function()
{
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

    if(this.x - 70 >= player.x)
    {
        this.x -= 2;
        if(this.sprite.currentAnimation != 0)
        {
            this.sprite.setAnimation(0);
        }
    }
    if(this.x + 50 < player.x)
    {
        this.x += 2;
        if(this.sprite.currentAnimation != 1)
        {
            this.sprite.setAnimation(1);
        }
    }
    this.cooldown - dt;
    this.sprite.update(dt);
}

Wizard.prototype.Draw = function()
{

    this.sprite.draw(context,this.x - player.x + 600, this.y - player.y + 340);


}
