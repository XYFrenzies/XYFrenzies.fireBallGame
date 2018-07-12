function FireBall(inX, inY, inDirX){
  this.x = inX;
  this.y = inY;
  this.dirX = inDirX;
  this.sprite = new Sprite("Images/Fireball Sprite sheet.png");
  //this.image = document.createElement("img");
  //this.image.src = ("Images/player orb.png");

  this.sprite.buildAnimation(2, 1, 45, 45, 0.1, [0, 1]);
}

FireBall.prototype.Update = function()
{
  this.x += this.dirX * dt;
  this.sprite.update(dt);
}

FireBall.prototype.Draw = function()
{
    //this.sprite.draw(context, this.x, this.y);

    //context.drawImage(this.image, this.x - player.x + 300, this.y - player.y + 300);

    //context.drawImage(this.image, this.x - player.x, this.y - player.y);

    this.sprite.draw(context, this.x - player.x, this.y - player.y + 100);

    //context.fillStyle("black");
    //context.fillStyle = "black";
    //context.fillRect(this.x - player.x, this.x - player.y, 150, 150);
  //Draw code
}
