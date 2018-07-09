function Enemy() {
  this.listener = new window.keypress.Listener();
  this.x = 500;
  this.y = 778;
  this.image = document.createElement("img");
  this.image.src = "Images/enemy.png";
  this.movingRight = false;
  this.movingLeft = false;
  this.jumping = false;
  this.crouching = false;
  this.ai = function(){};
}
