function movement()
{

var isPlayerGrounded;
var gravity = 0;
  if (player.jumping) {



    //player.y--;
  }
  if (player.crouching) {
    player.y++;
  }
  if (player.movingRight) {
    player.x++;
  }
  if (player.movingLeft) {
    player.x--;
  }
}
