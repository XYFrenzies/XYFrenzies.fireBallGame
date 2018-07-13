var Player2 = function()
{
      //Default position
      this.x = level1Player2SpawnX;
      this.y = level1Player2SpawnY;
      //Value that is red
      this.redval = 0;
      //Width and height of the player
      this.width = 54;
      this.height = 93 ;

      //Checking if the player is falling, jumping, its
      //jumpforce and it floating across the screen whilst jumping/falling
      this.falling = true;
      this.jumping = false;
      this.jumpFroce = 15000;
      this.gliding = false;

      //Continuously Increased speed of the player
      this.acceleration = 800;

      //This is the change in continues movement of the player.
      this.velX = 0;
      this.velY = 0;
      this.friction = 2000;

      //This is to limit the player from having to hold the spacebar when they shoot the fireball.
      this.fireLock = false;

      //This is the fastest that the player can travel.
      this.maxSpeed = 800;


      //This is the animation change of the player as it moves to the left and the right as well as its idle animation.
      this.sprite = new Sprite(SpriteSheet);
      // Rows of frames in the X, columns of frames in the Y, width, height, time between frames, what frames.


      this.sprite.buildAnimation( 6, 1, 54, 73 , 0.2, [11] ); //IDLE LEFT

      this.sprite.buildAnimation(  6, 1, 54, 73, 0.05, [0, 0, 1, 1, 2, 2, 3, 3, 4, 4] ); //JUMP LEFT

      this.sprite.buildAnimation(  6, 1, 54, 73, 0.05, [0, 0, 1, 1, 2, 2, 3, 3, 4, 4] ); //WALK LEFT

      this.sprite.buildAnimation(  6, 1, 54, 73 , 0.2, [5] ); //IDLE RIGHT


      this.sprite.buildAnimation(  6, 1, 54, 73 , 0.05, [10, 10, 9, 9, 8, 8, 7, 7, 6, 6]); //JUMP RIGHT

      this.sprite.buildAnimation(  6, 1, 54, 73 , 0.05, [ 10, 10, 9, 9, 8, 8, 7, 7, 6, 6]); //WALK RIGHT


      //This is the offset of the player and the change of animation.
      for(var i = 0; i < animationMax; i++){
          this.sprite.setAnimationOffset(i,-29, -33);
      }
  }


  Player2.prototype.Update = function(){

      //This is to update delta time in terms of the player movement.
      dt = GetDeltaTime();

      this.sprite.update(dt);
      //Introduce gravity so that the player can junp and act normal.
      gravity = 9.8 * 20;
      timer -= dt;

      //Gliding is used for when the player is moving whilst in the air.
      this.gliding = false;


      //This is to check if the player is left, right or jumping.
      var left = false;
      var right = false;
      var jump = false;

      //check for left key press
      if(keyboard.isKeyDown(keyboard.KEY_A))
      {
          left = true;
          this.direction = animationLeft;
          if(this.sprite.currentAnimation != animationWalkLeft && this.falling == false)
          {
              //When the player moves to the left, the animation of it moving to the left occurs.
              this.sprite.setAnimation(animationWalkLeft);
          }
      }
      // check for right key press
      else if(keyboard.isKeyDown(keyboard.KEY_D))
      {
          right = true;
          this.direction = animationRight;
          if(this.sprite.currentAnimation != animationWalkRight && this.falling ==false)
          {
              //When the player moves to the right, the animation of it moving to the right occurs.
              this.sprite.setAnimation(animationWalkRight);
          }
      }else {
              if(this.direction == left)
              {
                  if(this.sprite.currentAnimation !=animationIdleLeft && this.jumping == false)
                  {
                      //This is to check that if the player has moved to the left
                      //but not moving top the left anymore, the left idle animation will occur.
                      this.sprite.setAnimation(animationIdleLeft);
                  }
              }
              else{
                  if(this.sprite.currentAnimation != animationIdleRight && this.jumping == false)
                  {
                    //This is to check that if the player has moved to the right
                    //but not moving top the right anymore, the right idle animation will occur.
                      this.sprite.setAnimation(animationIdleRight);
                  }

              }
      }
      //This is the jumping mechanic
      if(keyboard.isKeyDown(keyboard.KEY_W))
      {
        //When the player jumps, they are able to glide and therefore the jumping sound will occur.
          jump = true;
          this.gliding = true;
          if(this.jumping == true && JumpSndPlay == false)
          {
              sndJump.play();
              JumpSndPlay = true;
          }
      }

      if(this.falling == true )
      {
          //As there is no specific different animation for the jumping,
          //this doesnt do much but animate the same animation as the normal animation of walking either direction.
          if(left == true && this.sprite.currentAnimation != animationJumpLeft)
          {
              this.sprite.setAnimation(animationJumpLeft);
          }
          if(right == true && this.sprite.currentAnimation != animationJumpRight)
          {
              this.sprite.setAnimation(animationJumpRight);
          }
      }
      //This is to introduce the idea of acceleration and friction to the game.
      var wasLeft = this.velX < 0;
      var wasRight = this.velX > 0;
      var accelX = 0;
      var accelY = gravity;
      //If the player is moving to the left and continues to move the left, accelerationw ill increase.
      if(left)
      {
          accelX -= this.acceleration;
      }
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
      JumpSndPlay = false;
      if(this.y > floorHeight)
      {
        this.y = floorHeight;
      }
    }
    if(this.x < -496 - this.width)
    {
      this.velX = 0;
      this.x = -496 - this.width;
      this.accelX = 0;
    }
    if(this.x > 5683 - this.width)
    {
      this.velX = 0;
      this.x = 5683 - this.width;
      this.accelX = 0;
    }
    if(keyboard.isKeyDown(keyboard.KEY_SPACE)  && this.fireLock == false)
    {
      fireSndPlay = false;
      this.fireLock = true;
      if(this.velX > 0)
      {
          orbs.push(new ORB(this.x, this.y, this.velX + 1000));
      } else if (this.velX < 0)
      {
          orbs.push(new ORB(this.x, this.y, this.velX - 1000));
        } else
        {
          if(this.sprite.currentAnimation == animationIdleRight)
          {
            orbs.push(new ORB(this.x, this.y, 500));
          }
          else
          {
            orbs.push(new ORB(this.x, this.y, -500));
          }
        }
      }
      if(keyboard.isKeyUp(keyboard.KEY_SPACE)  && this.fireLock == true)
      {
        this.fireLock = false;

      }
  }


  Player2.prototype.Draw = function()
  {



      if(this.redval > 0)
      {
        this.redval -= dt;
        this.sprite.draw(context, canvas.width / 2 + this.width, canvas.height / 2);
        context.globalAlpha=0.62;
        context.fillStyle="red";
        context.fillRect(canvas.width / 2 + 15, canvas.height / 2 - 30, this.width, this.height - 20);
        context.globalAlpha=1;

      } else if (!false){
      //This is to draw the player in the centre of the canvas so that the player has a large scope of the map.
      this.sprite.draw(context, canvas.width / 2 + this.width, canvas.height / 2);
      }
      //This is where the orbs are draw.

      for(var i = 0; i < orbs.length; i++)
      {
        if(orbs[i] != undefined)
        {
          orbs[i].Draw();
        }
      }

  }