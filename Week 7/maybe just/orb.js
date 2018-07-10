function ORB(inX, inY, inDir){
  this.x = inX;
  this.y = inY;
  this.dir = inDir;
  this.sprite = new Sprite("images/player orb.png");

  this.sprite.buildAnimation(2, 1, 45, 45, 0.2, [0, 0, 1, 1]);


}

ORB.prototype.Update()
{
  this.x += this.dir;

}

ORB.prototype.Draw()
{
    this.sprite.draw(context, this.x, this.y);
  //Draw code
}
