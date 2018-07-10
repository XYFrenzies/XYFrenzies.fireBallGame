var Player = function(){


    this.x;
    this.y;
    //Sets default position
    if(Level == Level1)
    {
        this.x = level1SpawnX;
        this.y = level1SpawnY;
    }
    this.width = 54;
    this.height = 93;


    this.falling = true;
    this.jumping = false;
    this.jumpFroce = 10000;
    this.gliding = false;

    this.acceleration = 1000;

    this.velX = 0;
    this.velY = 0;
    this.friction = 200;

    this.maxSpeed = 1000;

    this.sprite = new Sprite("images/Sprite Sheet.png");
    // number of frames, , width, height, time between frames, what frames

    this.sprite.buildAnimation( 6, 1, 54, 72 , 0.2, [11] ); //IDLE LEFT

    this.sprite.buildAnimation(  6, 1, 54, 72, 0.05, [0, 0, 1, 1, 2, 2, 3, 3, 4, 4] ); //JUMP LEFT

    this.sprite.buildAnimation(  6, 1, 54, 72, 0.05, [0, 0, 1, 1, 2, 2, 3, 3, 4, 4] ); //WALK LEFT

    this.sprite.buildAnimation(  6, 1, 54, 72 , 0.2, [5] ); //IDLE RIGHT


    this.sprite.buildAnimation(  6, 1, 54, 72 , 0.05, [10, 10, 9, 9, 8, 8, 7, 7, 6, 6]); //JUMP RIGHT


    this.sprite.buildAnimation(  6, 1, 54, 72 , 0.05, [ 10, 10, 9, 9, 8, 8, 7, 7, 6, 6]); //WALK RIGHT



    for(var i = 0; i < animationMax; i++){
        this.sprite.setAnimationOffset(i,-29, -33);
    }



}






Player.prototype.Update = function(){
    var dt = GetDeltaTime();

    this.sprite.update(dt);

    gravity = 9.8 * 20;
    timer -= dt;


    this.gliding = false;



    var left = false;
    var right = false;
    var jump = false;

    				// check for left key press
    if(keyboard.isKeyDown(keyboard.KEY_LEFT))
    {
        left = true;
        this.direction = animationLeft;
        if(this.sprite.currentAnimation != animationWalkLeft && this.falling == false)
        {
            this.sprite.setAnimation(animationWalkLeft);
        }
    }              // check for right key press
    else if(keyboard.isKeyDown(keyboard.KEY_RIGHT))
    {
        right = true;
        this.direction = animationRight;
        if(this.sprite.currentAnimation != animationWalkRight && this.falling ==false)
        {
            this.sprite.setAnimation(animationWalkRight);
        }
    }else {
            if(this.direction == left)
            {
                if(this.sprite.currentAnimation !=animationIdleLeft && this.jumping == false)
                {
                    this.sprite.setAnimation(animationIdleLeft);
                }
            }
            else{
                if(this.sprite.currentAnimation != animationIdleRight && this.jumping == false)
                {
                    this.sprite.setAnimation(animationIdleRight);
                }

            }
    }
    //check for up key press
    /*if(keyboard.isKeyDown(keyboard.KEY_UP)) {
        if(timer <= 0){
            var bullet = new Bullet(this.x, this.y)
            bullets.push(bullet);
            timer = fireRate;
        }
    }
    */
    if(keyboard.isKeyDown(keyboard.KEY_UP))
    {
        jump = true;
        this.gliding = true;
    }
    if(this.gliding == true && this.velY >= 0)
    {
        gravity = 9.8 *5;
    }
    if(this.falling == true )
    {
        if(left == true && this.sprite.currentAnimation != animationJumpLeft)
        {
            this.sprite.setAnimation(animationJumpLeft);
        }
        if(right == true && this.sprite.currentAnimation != animationJumpRight)
        {
            this.sprite.setAnimation(animationJumpRight);
        }
    }
    var wasLeft = this.velX < 0;
    var wasRight = this.velX > 0;
    var accelX = 0;
    var accelY = gravity;
    if(left)
        accelX -= this.acceleration;
    else if(wasLeft)
    {
        accelX += this.friction;
    }

    if(right)
        accelX += this.acceleration;
    else if(wasRight)
    {
        accelX -= this.friction;
    }
    if(jump && !this.jumping && !this.falling)
    {
        accelY -= this.jumpFroce;
        this.jumping = true;
        if(left == true && this.sprite.currentAnimation != animationJumpLeft)
        {
            this.sprite.setAnimation(animationJumpLeft)
        }
        if (right == true && this.sprite.currentAnimation != animationJumpRight)
        {
            this.sprite.setAnimation(animationJumpRight)
        }
}




    this.x += this.velX * dt;
    this.y += this.velY * dt;
    this.velX += accelX * dt;
    this.velY += accelY * dt;


    //max speeds
    if(this.velX > this.maxSpeed)
        this.velX = this.maxSpeed;
    else if (this.velX < -this.maxSpeed)
        this.velX = -this.maxSpeed;

    //no jitter
    if((wasLeft && (this.velX > 0)) || (wasRight && (this.velX < 0))){
        this.velX = 0;
    }
    var tx = coordToTile(this.x);
    var ty = coordToTile(this.y);
    var nx = this.x % mapTileSize;
    var ny = this.y % mapTileSize;

    var cell = cellAtTile(0, tx, ty);
    var cellRight = cellAtTile(0, tx + 1, ty);
    var cellDown = cellAtTile(0, tx, ty + 1);
    var cellDiag = cellAtTile(0, tx + 1 , ty + 1);


floorHeight = 1400;
if (this.y > floorHeight)
{
  this.velY = 0;
  this.falling = 0;
  this.jumping = 0;
  if(this.y > floorHeight)
  {
    this.y = floorHeight;
  }
}
if(this.x < -496)
{
  this.velX = 0;
  this.x = -496;
  this.accelX = 0;
}
if(this.x > 5683)
{
  this.velX = 0;
  this.x = 5683;
  this.accelX = 0;
}
    // if(this.velY < 0){
    //     if((cell && !cellDown) || (cellRight && !cellDiag && nx ))
    //     {
    //         this.y = tileToCoord(ty + 1);
    //         this.velY = 0;
    //         cell = cellDown;
    //         cellRight = cellDiag;
    //         ny = 0;
    //     }
    // }else if(this.velY > 0){
    //     if((cellDown && !cell) || cellDiag && !cellRight && nx){
    //         this.y = tileToCoord(ty);
    //         this.velY = 0;
    //         this.falling = false;
    //         this.jumping = false;
    //         ny = 0;
    //     }
    // }
    //
    // if(this.velX < 0){
    //     if((cell && cellRight) || (cellDiag && !cellDown && ny)){
    //         this.velX = 0;
    //         this.x = tileToCoord(tx + 1);
    //     }
    // } else if(this.velX > 0){
    //     if((cellRight && !cell) || (cellDiag && !cellDown && ny)){
    //         this.velX = 0;
    //         this.x = tileToCoord(tx);
    //     }
    // }

    // this.falling = !(cellDown || cellDiag);
    //
    // if(!cellDown){
    //     if(cellDown = cellAtTile(0, tx, ty + 1)){
    //         if(Level == Level1)
    //         {
    //             this.x = level1SpawnX;
    //             this.y = level1SpawnY;
    //             deaths++
    //         }
    //         if(Level == Level2)
    //         {
    //             this.x = level2SpawnX;
    //             this.y = level2SpawnY;
    //             deaths++
    //         }
    //         if(Level == Level3)
    //         {
    //             this.x = level3SpawnX;
    //             this.y = level3SpawnX;
    //             deaths++
    //         }
    //     }
    // }

}


Player.prototype.Draw = function(){

    this.sprite.draw(context, canvas.width / 2, canvas.height / 2);


}
