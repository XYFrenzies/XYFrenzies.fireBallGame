function DrawScreenSelection()
{
  var ScreenBG = document.createElement("img");
  ScreenBG.src = "Images/Character Selection.png";

  var Arrow = document.createElement("img");
  Arrow.src = "Images/Arrow.png";


  //This is going to be the background. The background will include
  //all of the different colours that each player can be.
  context.drawImage(ScreenBG,0, 0, canvas.width, canvas.height);

  //This is going to be the arrow for the first player
  context.drawImage(Arrow, ArrowXPos, 150, 70, 100);

  //This is going to be the arrow for the Second player
  //context.drawImage(asd, 0, 0, canvas.width, canvas.height);

}



function UpdateSS()
{
  dt = GetDeltaTime();
  //If the player presses the left key, the arrow will move to the left,
  //if the player presses the right key, the arrow will move to the right.
  //The amount that the arrow will move depends on the distance between each character.
  if(keyboard.isKeyDown(keyboard.KEY_LEFT))
  {
   
   
      if(ArrowXPos == blue && arrowPressed == false)
      {
        arrowPressed = true;
        ArrowXPos = yellow;
      }
      if(ArrowXPos == yellow && arrowPressed == false)
      {
        arrowPressed = true;
        ArrowXPos = red;
      }
      if(ArrowXPos == red && arrowPressed == false)
      {
        arrowPressed = true;
        ArrowXPos = green;
      }
   

  
  }
  if(keyboard.isKeyDown(keyboard.KEY_RIGHT))
  {
  
      if(ArrowXPos == green  && arrowPressed == false)
      {
        arrowPressed = true;
        ArrowXPos = red;
      }
      if(ArrowXPos == red && arrowPressed == false)
      {
        arrowPressed = true;
        ArrowXPos = yellow;
      }
      if(ArrowXPos == yellow && arrowPressed == false)
      {
        arrowPressed = true;
        ArrowXPos = blue;
      }
  
   
  }

  if(keyboard.isKeyUp(keyboard.KEY_RIGHT) && singleMove == true)
  {
    arrowPressed = false;
    singleMove = false;
  }
  if(keyboard.isKeyUp(keyboard.KEY_LEFT) && singleMove == true)
  {
    arrowPressed = false;
    singleMove = false;

  }
    
  timerArrow -= dt;

  if(timerArrow <=0)
  {
    singleMove = true;
    timerArrow = arrowTime;
  }

  if(keyboard.isKeyDown(keyboard.KEY_SPACE))
  {

    if(ArrowXPos == green)
    {
      SpriteSheet = SpriteSheetGreen;
    } else if (ArrowXPos == red)
    {
      SpriteSheet = SpriteSheetRed;
    } else if (ArrowXPos == yellow)
    {
      SpriteSheet = SpriteSheetYellow;
    } else 
    {
      SpriteSheet = SpriteSheetBlue;
    }


    Level = Level1;
    sndMain.stop();
    sndGame.play();
    player = new Player();
    CreateCollisionData();
    GameLoop();
  }
}
