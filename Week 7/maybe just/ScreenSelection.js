var ArrowXPos = 200;


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
  context.drawImage(Arrow, ArrowXPos, 100, canvas.width, canvas.height);

  //This is going to be the arrow for the Second player
  //context.drawImage(asd, 0, 0, canvas.width, canvas.height);
}



function UpdateSS()
{

  //If the player presses the left key, the arrow will move to the left,
  //if the player presses the right key, the arrow will move to the right.
  //The amount that the arrow will move depends on the distance between each character.
  if(keyboard.isKeyDown(keyboard.KEY_LEFT))
  {
    ArrowXPos += !!!;
  }
  if(keyboard.isKeyDown(keyboard.KEY_RIGHT))
  {
    ArrowXPos -= !!!;
  }
  if(ArrowXPos >= ???)
  {
    ArrowXPos = ???;
  }
  if(ArrowXPos <= ???)
  {
    ArrowXPos = ???;
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
