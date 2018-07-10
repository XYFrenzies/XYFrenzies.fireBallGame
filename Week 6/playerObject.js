function Player()
{
  this.listener = new window.keypress.Listener();
  this.x = c.width / 2;
  this.y = c.height / 2;
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
  this.width = 35;
  this.height = 92;
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

  // for(var i = 0; i < animationMax; i++){
  //     this.sprite.setAnimationOffset(i,-29, -33);
  // }
}

// Player.prototype.Update = function() {
//     var tx = coordToTile(this.x);
//     var ty = coordToTile(this.y);
//     var nx = this.x % gridWidth;
//     var ny = this.y % gridHeight;
//
//     var cell = cellAtTile(tx, ty);
//     var cellRight = collisionCells[0][ty][tx + 1];
//     var cellDown = collisionCells[0][ty + 1][tx];
//     var cellDiag = collisionCells[0][ty + 1][tx + 1];
//
//     if(!cellDown){
//         this.isGrounded = false;
//     } else {
//       this.isGrounded = true;
//     }
//     // if(this.velY < 0){
//     //     if((cell && !cellDown) || (cellRight && !cellDiag && nx ))
//     //     {
//     //         this.y = tileToCoord(ty + 1);
//     //         this.velY = 0;
//     //         cell = cellDown;
//     //         cellRight = cellDiag;
//     //         ny = 0;
//     //     }
//     // }else if(this.velY > 0){
//     //     if((cellDown && !cell) || cellDiag && !cellRight && nx){
//     //         this.y = tileToCoord(ty);
//     //         this.velY = 0;
//     //         this.isGrounded = true;
//     //         ny = 0;
//     //     }
//     // }
//     //
//     // if(this.velX < 0){
//     //     if((cell && cellRight) || (cellDiag && !cellDown && ny)){
//     //         this.velX = 0;
//     //         this.x = tileToCoord(tx + 1);
//     //     }
//     // } else if(this.velX > 0){
//     //     if((cellRight && !cell) || (cellDiag && !cellDown && ny)){
//     //         this.velX = 0;
//     //         this.x = tileToCoord(tx);
//     //     }
//     // }
//     //
//     // this.isGrounded = (cellDown || cellDiag);
//     //
//     // if(!cellDown){
//     //     if(cellDown = cellAtTile(4, tx, ty + 1)){
//     //         if(Level == Level1)
//     //         {
//     //             this.x = level1SpawnX;
//     //             this.y = level1SpawnY;
//     //             deaths++
//     //         }
//     //         if(Level == Level2)
//     //         {
//     //             this.x = level2SpawnX;
//     //             this.y = level2SpawnY;
//     //             deaths++
//     //         }
//     //         if(Level == Level3)
//     //         {
//     //             this.x = level3SpawnX;
//     //             this.y = level3SpawnX;
//     //             deaths++
//     //         }
//     //     }
//     // }
//
// }
