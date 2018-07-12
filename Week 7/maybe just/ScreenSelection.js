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
  context.drawImage(Arrow, ArrowXPos - 240, 150, 70, 100);

  //This is going to be the arrow for the Second player
  //context.drawImage(asd, 0, 0, canvas.width, canvas.height);
  console.log(ArrowXPos);
}



function UpdateSS()
{

  //If the player presses the left key, the arrow will move to the left,
  //if the player presses the right key, the arrow will move to the right.
  //The amount that the arrow will move depends on the distance between each character.
  if(keyboard.isKeyDown(keyboard.KEY_LEFT))
  {
    if(ArrowXPos == 1260)
    {
      ArrowXPos = 1000;
    }

    if(ArrowXPos == 1000)
    {
      ArrowXPos = 760;
    }

    if(ArrowXPos == 760)
    {
      ArrowXPos = 260;
    }
  }
  if(keyboard.isKeyDown(keyboard.KEY_RIGHT))
  {

    if(ArrowXPos >= 1260)
    {
      ArrowXPos = 1260;
    }
    if(ArrowXPos <= 260)
    {
      ArrowXPos = 260;
    }

    if(ArrowXPos == 1000)
    {
      ArrowXPos = 1260;
    }

    if(ArrowXPos == 760)
    {
      ArrowXPos == 1000
    }

    if(ArrowXPos == 260)
    {
      ArrowXPos == 760
    }
  }





  if(keyboard.isKeyDown(keyboard.KEY_SPACE))
  {



    Level = Level1;
    sndMain.stop();
    sndGame.play();
    CreateCollisionData();
    GameLoop();
  }
}
