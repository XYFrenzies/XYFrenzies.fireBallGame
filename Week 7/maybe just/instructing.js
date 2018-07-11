function DrawInstruct()
{

  var MainMenuBG = document.createElement("img");
  MainMenuBG.src = "Images/WOZTheFinalWizard.png";

  context.drawImage(MainMenuBG, 0,0,canvas.width, canvas.height);

}

function UpdateInstruct()
{
  if(keyboard.isKeyDown(keyboard.KEY_ENTER))
  {
    Level = Level1;
    CreateCollisionData();
    GameLoop();
  }
}
