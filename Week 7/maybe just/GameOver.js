function DrawGameOver()
{

  var MainMenuBG = document.createElement("img");
  MainMenuBG.src = "Images/GameOver.png";

  context.drawImage(MainMenuBG, 0,0,canvas.width, canvas.height);
  context.fillStyle = "#ffffff";
  context.fillText("You got a score of: "+ score, canvas.width / 2 - 165, canvas.height / 2 - 60);

}

function UpdateGameOver()
{
  if(keyboard.isKeyDown(keyboard.KEY_ENTER))
  {
    location.reload();
  }
}
