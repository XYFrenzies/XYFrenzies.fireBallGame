function ORB(inX, inY, inDir){
  this.x = inX;
  this.y = inY;
  this.dir = inDir;
  this.sprite = new Sprite("Images/player orb.png");
  //this.image = document.createElement("img");
  //this.image.src = ("Images/player orb.png");

  this.sprite.buildAnimation(2, 1, 45, 45, 0.2, [0, 1]);
}

ORB.prototype.Update = function()
{
  this.x += this.dir;

}

ORB.prototype.Draw = function()
{
    //this.sprite.draw(context, this.x, this.y);
    //context.drawImage(this.image, this.x - player.x, this.y - player.y);

    this.sprite.draw(context, this.x - player.x, this.y - player.y);
    //context.fillStyle("black");
    //context.fillStyle = "black";
    //context.fillRect(this.x - player.x, this.x - player.y, 150, 150);
  //Draw code
}
