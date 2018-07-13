function ORB(inX, inY, inDir){
  this.x = inX;
  this.y = inY;
  this.dir = inDir;
  this.sprite = new Sprite("Images/player orb.png");
  //this.image = document.createElement("img");
  //this.image.src = ("Images/player orb.png");

  this.sprite.buildAnimation(2, 1, 45, 45, 0.1, [0, 1]);
}

ORB.prototype.Update = function()
{
  this.x += this.dir * dt;
  this.sprite.update(dt);

}

ORB.prototype.Draw = function()
{

    //this.sprite.draw(context, this.x - player.x + player.width + 600, this.y - player.y + 340);
    context.fillStyle = "red";
    context.fillText("E", this.x - player.x + player.width + 600, this.y - player.y + 340);
  //Draw code
}
