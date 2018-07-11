function DrawMenu()
{
  context.fillStyle = "Blue";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "Gold";
  context.fillText("Welcome to wizard baller!", canvas.width / 4, canvas.height / 6);
  context.fillText("Press space to begin!", canvas.width / 4, canvas.height / 2 - 15)

}

function UpdateMenu()
{
  if(keyboard.isKeyDown(keyboard.KEY_SPACE))
  {
    Level = Level1;
  }
}
