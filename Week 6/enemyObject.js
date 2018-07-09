function Enemy()
{
  this.listener = new window.keypress.Listener();
  this.x = 500;
  this.y = 778;
  this.image = document.createElement("img");
  this.image.src = "Images/enemy.png";
  this.movingRight = true;
  this.movingLeft = false;
  this.jumping = false;
  this.crouching = false;
  this.ai = function(){
    if(this.x < 0)
    {
      this.movingLeft = false;
      this.movingRight = true;
    }
    if(this.x > c.width)
    {
      this.movingLeft = true;
      this.movingRight = false;
    }
  };
  this.move = function()
  {
    if(this.movingLeft)
    {
      this.x--;
    }
    if(this.movingRight)
    {
      this.x++;
    }
  };
}
