function Player()
{
  this.listener = new window.keypress.Listener();
  this.x = 0;
  this.y = 100;
  this.image = document.createElement("img");
  this.image.src = "Images/Character.png";
  this.VelX = 0;
  this.VelY = 0;
  this.isGrounded = false;
  this.movingRight = false;
  this.movingLeft = false;
  this.jumping = false;
  this.crouching = false;
  this.jumpLock = false;
  this.combos = this.listener.register_many([
    {
        "keys"          : "s",
        "is_exclusive"  : false,
        "on_keydown"    : function()
        {
            this.crouching = true;
        },
        "on_keyup"      : function(e)
        {
            this.crouching = false;
        },
        "this"          : this
    },
    {
        "keys"          : "w",
        "is_exclusive"  : false,
        "on_keydown"    : function()
        {
            this.jumping = true;
        },
        "on_keyup"      : function(e)
        {
            this.jumping = false;
            this.isPlayerFalling = true;
        },
        "this"          : this
    },
    {
        "keys"          : "d",
        "is_exclusive"  : false,
        "on_keydown"    : function()
        {
            this.movingRight = true;
        },
        "on_keyup"      : function(e)
        {
            this.movingRight = false;
        },
        "this"          : this
    },
    {
        "keys"          : "a",
        "is_exclusive"  : false,
        "on_keydown"    : function()
        {
            this.movingLeft = true;
        },
        "on_keyup"      : function(e)
        {
            this.movingLeft = false;
        },
        "this"          : this
    }
  ]);


//This is the animation of the player.
  this.sprite = new Sprite("Sprites/Sprite Sheet.png");

  this.sprite.buildAnimation(5, 2, 54, 73, 0.2, [6, 6, 7, 7, 8, 8, 9, 9, 10, 10]); //Moving Left
  this.sprite.buildAnimation(5, 2, 54, 73, 0.2, [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]); //Moving Right




}
