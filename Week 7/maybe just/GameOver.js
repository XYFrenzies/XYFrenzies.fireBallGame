function DrawGameOver()
{
//This is the gameOver screen of which when the player
//loses all of the lives, this screen appears.
  var MainMenuBG = document.createElement("img");
  MainMenuBG.src = "Images/GameOver.png";

  context.drawImage(MainMenuBG, 0,0,canvas.width, canvas.height);
  context.fillStyle = "#ffffff";
  context.fillText("You got a score of: "+ score, canvas.width / 2 - 165, canvas.height / 2 - 60);
}
//On button press with the enter key,
//the individual is sent to the main menu.
//As well as this, the game state is reloaded.
function UpdateGameOver()
{
  if(keyboard.isKeyDown(keyboard.KEY_ENTER))
  {
    location.reload();
  }
}
