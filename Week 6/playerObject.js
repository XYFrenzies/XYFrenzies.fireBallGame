function Player() {
  this.listener = new window.keypress.Listener();
  this.x = 0;
  this.y = 778;
  this.image = document.createElement("img");
  this.image.src = "Images/Character.png";
  this.VelX = 0;
  this.VelY = 0;
  this.isPlayerFalling = false;
  this.isPlayerGrounded = true;
  this.gravity = 0;
  this.movingRight = false;
  this.movingLeft = false;
  this.jumping = false;
  this.crouching = false;
  this.combos = this.listener.register_many([
    {
        "keys"          : "s",
        "is_exclusive"  : false,
        "on_keydown"    : function() {
            this.crouching = true;
        },
        "on_keyup"      : function(e) {
            this.crouching = false;
        },
        "this"          : this
    },
    {
        "keys"          : "w",
        "is_exclusive"  : false,
        "on_keydown"    : function() {
            this.jumping = true;
        },
        "on_keyup"      : function(e) {
            this.jumping = false;
            this.isPlayerFalling = true;
        },
        "this"          : this
    },
    {
        "keys"          : "d",
        "is_exclusive"  : false,
        "on_keydown"    : function() {
            this.movingRight = true;
        },
        "on_keyup"      : function(e) {
            this.movingRight = false;
        },
        "this"          : this
    },
    {
        "keys"          : "a",
        "is_exclusive"  : false,
        "on_keydown"    : function() {
            this.movingLeft = true;
        },
        "on_keyup"      : function(e) {
            this.movingLeft = false;
        },
        "this"          : this
    }
  ]);
}
