var Enemy = function()
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
    this.y = player.y -25;

    this.width = 188/4;
    this.height = 241/4;
//This is the calling of the sprites that are used
//as a frame by frame change of the character within the game.
    this.sprite = new Sprite("Images/Enemy sprite sheet.png");
    this.seedling = document.createElement("img");
    this.seedling.src = "Images/seedy.jpg";

    this.sprite.buildAnimation(8,2,131,93,0.2,[0,1,2]);

    this.sprite.buildAnimation(8,2,131,93,0.2,[7,6,5]);

    this.sprite.buildAnimation(8,2,131,93,0.1, [8,8,8,9,10,11])

    this.sprite.buildAnimation(8,2,131,93,0.1, [15,15,15,14,13,12])

    this.isFalling = true;

    this.randomSpawn; //????????? What does this do?

}
//This is for the attacking animation.

Enemy.prototype.Attack = function()
{
  player.redval = 1;
//If the player is on the left side of the enemy, the enemy would attack to the left.
    if(this.sprite.currentAnimation == 0)
    {
        swordsClashing.play();
        this.sprite.setAnimation(2);

        if(this.sprite.currentAnimation != 2)
        {

            this.sprite.setAnimation(2);
        }
    }
//If the player is on the right side of the enemy, the enemy would attack to the right.
    if(this.sprite.currentAnimation == 1)
    {
        swordsClashing.play();
        if(this.sprite.currentAnimation != 3)
        {

            this.sprite.setAnimation(3);
        }
    }
}

//This allows for the physics of the enemy.
//It stops them from falling through the floor.
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
            //This is the activation of the moving to the left
            if(this.sprite.currentAnimation != 0)
            {
                this.sprite.setAnimation(0);
            }
        }
        if(this.x + 50 < player.x)
        {
            this.x += 2;
            //This is the activation of the moving to the right
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
  //This is setting the location of which the enemy
  //should attack the player as well as follow the player.
    // this.sprite.draw(context,this.x - player.x + 600, this.y - player.y + 340);
    context.drawImage(this.seedling, this.x - player.x + 600, this.y - player.y + 340, 50, 100);

}
