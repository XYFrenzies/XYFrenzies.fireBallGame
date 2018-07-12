function DrawInstruct()
{
//This is the instructions menu of the game that is
//transitioned form the main menu
  var MainMenuBG = document.createElement("img");
  MainMenuBG.src = "Images/Controls.png";

  context.drawImage(MainMenuBG, 0,0,canvas.width, canvas.height);

}

//When the player presses the enter key, the game will start
//and the music will begin as well as the main menu sound will disappear.
function UpdateInstruct()
{
  if(keyboard.isKeyDown(keyboard.KEY_ENTER))
  {
    Level = Level1;
    sndMain.stop();
    sndGame.play();
    CreateCollisionData();
    GameLoop();

  }
}
