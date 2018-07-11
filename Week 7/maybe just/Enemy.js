var Enemy = function()
{

    
    this.x = 600;
    this.y = 1000;

    this.width = 188/4;
    this.height = 241/4;

    this.sprite = new Sprite("images/Summoner.png");

    this.sprite.buildAnimation (1,1,188,241,999999, [1]);

}

Enemy.prototype.Update = function() 
{
    var dt = GetDeltaTime();

    this.sprite.update(dt);
    this.sprite.setAnimation(0);
    
}

Enemy.prototype.Draw = function()
{

    this.sprite.draw(context, 300, 1400);


}