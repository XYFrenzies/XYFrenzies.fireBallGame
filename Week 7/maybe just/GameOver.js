function DrawGameOver()
{

  var MainMenuBG = document.createElement("img");
  MainMenuBG.src = "Images/GameOver.png";

  context.drawImage(MainMenuBG, 0,0,canvas.width, canvas.height);

}

function UpdateGameOver()
{
  if(keyboard.isKeyDown(keyboard.KEY_ENTER))
  {
    location.reload();
  }
}
