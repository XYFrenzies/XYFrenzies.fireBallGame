function DrawMenu()
{
//This is the drawing of the main menu
  var MainMenuBG = document.createElement("img");
  MainMenuBG.src = "Images/WOZTheFinalWizard.png";

  context.drawImage(MainMenuBG, 0,0,canvas.width, canvas.height);

}
//This checks for whenever the player presses the space bar,
//the tutorial comes up
function UpdateMenu()
{
  if(keyboard.isKeyDown(keyboard.KEY_SPACE))
  {
    musicStart();
    Level = InstructMenu;
    instructions();
  }
}
