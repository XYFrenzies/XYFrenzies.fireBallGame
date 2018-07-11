var Enemy = function()
{

    
    this.x = 30;
    this.y = 30;

    this.width = 188/4;
    this.height = 241/4;

    this.sprite = new Sprite("images/Enemy sprite sheet.png");

    this.sprite.buildAnimation (4,1,131,90,0.2, [0,1,2,3,4,5,6,7]);

}

Enemy.prototype.Update = function() 
{
    var dt = GetDeltaTime();

    this.sprite.update(dt);
    
    
}

Enemy.prototype.Draw = function()
{

    this.sprite.draw(context,this.x,this.y);
    

}