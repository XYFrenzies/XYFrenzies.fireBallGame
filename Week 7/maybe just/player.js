var Player = function(){
    this.image = document.createElement("img");

    this.x;
    this.y;
    if(Level == Level1)
    {
        this.x = level1SpawnX;
        this.y = level1SpawnY;
    }
    this.width = 54;
    this.height = 93;
<<<<<<< HEAD
=======


>>>>>>> 8dc7f7f1f9dc0e5f94116db093af8be233c9df19

    this.falling = true;
    this.jumping = false;
    this.jumpFroce = 10000;
    this.gliding = false;

    this.acceleration = 100;

    this.velX = 0;
    this.velY = 0;
    this.friction = 250;

    this.maxSpeed = 200;

    this.sprite = new Sprite("images/Sprite Sheet.png");
    // number of frames, , width, height, time between frames, what frames

    this.sprite.buildAnimation( 6, 1, 54, 71 , 0.2, [11] );

    this.sprite.buildAnimation(  6, 1, 54, 71  , 0.05, [0,1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1,0] );

    this.sprite.buildAnimation(  5, 1, 54, 71  , 0.05, [0,1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1,0] );

    this.sprite.buildAnimation(  5, 1, 54, 71, 0.2, [26,27]);

    this.sprite.buildAnimation(  6, 1, 54, 71 , 0.2, [5] );

    this.sprite.buildAnimation(  6, 1, 54, 71 , 0.05, [9,10,11,12,13,14,15,16,17,17,16,15,14,13,12,11,10,9] );

    this.sprite.buildAnimation(  6, 1, 54, 71 , 0.2, [5, 5, 6, 6, 7, 7, 8, 8, 9, 9]);


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
    if(keyboard.isKeyDown(keyboard.KEY_LEFT)) {
        left = true;
        this.direction = animationLeft;
        if(this.sprite.currentAnimation != animationWalkLeft && this.falling == false){
            this.sprite.setAnimation(animationWalkLeft);
        }
    }              // check for right key press
    else if(keyboard.isKeyDown(keyboard.KEY_RIGHT)) {
        right = true;
        this.direction = animationRight;
        if(this.sprite.currentAnimation != animationWalkRight && this.falling ==false){
            this.sprite.setAnimation(animationWalkRight);
        }
    }else {
            if(this.direction == left)
            {
                if(this.sprite.currentAnimation !=animationIdleLeft && this.jumping == false)
                {

                }
            }
            else{
                if(this.sprite.currentAnimation != animationIdleRight && this.jumping == false)
                {

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
    if(keyboard.isKeyDown(keyboard.KEY_SPACE)){
        jump = true;
        this.gliding = true;
    }
    if(this.gliding == true && this.velY >= 0){
        gravity = 9.8 *5;
    }
    if(this.falling == true ){
        if(left == true && this.sprite.currentAnimation != animationJumpLeft){
            this.sprite.setAnimation(animationJumpLeft);
        }
        if(right == true && this.sprite.currentAnimation != animationJumpRight){
            this.sprite.setAnimation(animationJumpRight);
            }
        }
    var wasLeft = this.velX < 0;
    var wasRight = this.velX > 0;
    var accelX = 0;
    var accelY = gravity;
    if(left)
        accelX -= this.acceleration;
    else if(wasLeft){
        accelX += this.friction;
    }

    if(right)
        accelX += this.acceleration;
    else if(wasRight){
        accelX -= this.friction;
    }
    if(jump && !this.jumping && !this.falling){
        accelY -= this.jumpFroce;
        this.jumping = true;
        if(left == true && this.sprite.currentAnimation != animationJumpLeft)
            this.sprite.setAnimation(animationJumpLeft)
        if (right == true && this.sprite.currentAnimation != animationJumpRight)
            this.sprite.setAnimation(animationJumpRight)




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

    var cell = cellAtTile(1, tx, ty);
    var cellRight = cellAtTile(1, tx + 1, ty);
    var cellDown = cellAtTile(1, tx, ty + 1);
    var cellDiag = cellAtTile(1, tx + 1 , ty + 1);



    if(!cellDown){
        cellDown = cellAtTile(1, tx, ty);
    }


    if(this.velY < 0){
        if((cell && !cellDown) || (cellRight && !cellDiag && nx ))
        {
            this.y = tileToCoord(ty + 1);
            this.velY = 0;
            cell = cellDown;
            cellRight = cellDiag;
            ny = 0;
        }
    }else if(this.velY > 0){
        if((cellDown && !cell) || cellDiag && !cellRight && nx){
            this.y = tileToCoord(ty);
            this.velY = 0;
            this.falling = false;
            this.jumping = false;
            ny = 0;
        }
    }

    if(this.velX < 0){
        if((cell && cellRight) || (cellDiag && !cellDown && ny)){
            this.velX = 0;
            this.x = tileToCoord(tx + 1);
        }
    } else if(this.velX > 0){
        if((cellRight && !cell) || (cellDiag && !cellDown && ny)){
            this.velX = 0;
            this.x = tileToCoord(tx);
        }
    }

    this.falling = !(cellDown || cellDiag);

    if(!cellDown){
        if(cellDown = cellAtTile(4, tx, ty + 1)){
            if(Level == Level1)
            {
                this.x = level1SpawnX;
                this.y = level1SpawnY;
                deaths++
            }
            if(Level == Level2)
            {
                this.x = level2SpawnX;
                this.y = level2SpawnY;
                deaths++
            }
            if(Level == Level3)
            {
                this.x = level3SpawnX;
                this.y = level3SpawnX;
                deaths++
            }
        }
    }

}


Player.prototype.Draw = function(){
<<<<<<< HEAD
    this.sprite.draw(context, this.x, this.y);
=======
    this.sprite.draw(context, canvas.width / 2, canvas.height / 2);
>>>>>>> 8dc7f7f1f9dc0e5f94116db093af8be233c9df19
}