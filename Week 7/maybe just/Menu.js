function DrawMenu()
{

  var MainMenuBG = document.createElement("img");
  MainMenuBG.src = "Images/WOZTheFinalWizard.png";

  context.drawImage(MainMenuBG, 0,0,canvas.width, canvas.height);

}

function UpdateMenu()
{
  if(keyboard.isKeyDown(keyboard.KEY_SPACE))
  {
    musicStart();
    Level = InstructMenu;
    instructions();
  }
}
