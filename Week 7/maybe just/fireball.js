function FireBall(inX, inY, inDirX){
  this.x = inX;
  this.y = inY;
  this.dirX = inDirX;
  this.sprite = new Sprite("Images/Fireball Sprite sheet.png");

//This is the animation of the sprite of the fireball
//of which changes from one frame to another.
  this.sprite.buildAnimation(2, 1, 45, 45, 0.1, [0, 1]);
}
//This is to 
FireBall.prototype.Update = function()
{
  this.x += this.dirX * dt;
  this.sprite.update(dt);
}

FireBall.prototype.Draw = function()
{
    this.sprite.draw(context, this.x - player.x, this.y - player.y);

}
