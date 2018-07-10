// //Collision data
// var collisionCells = new Array();
//
//
// //Collission =)
// for(var i = 0; i < level1.layers.length; i++){ // for every layer
//           var index= 0; //the index in the map data
//           collisionCells[i] = new Array();
//           for(var y = 0; y < level1.height; y++){ // for every y tile
//               collisionCells[i][y] = new Array();
//               for(var x = 0; x < level1.width; x++){ // for every x tile
//                   if(level1.layers[i].data[index] !=0 ){// if there is a tile in that position
//
//                       //a tile is 4x as large as map cell
//                       collisionCells[i][y][x] = true;
//                       collisionCells[i][y - 1][x] = true;
//                       collisionCells[i][y - 1][x + 1] = true;
//                       collisionCells[i][y][x + 1] = true;
//                   }
//                   else{
//                       collisionCells[i][y][x] = false;
//                   }
//                   index++;
//               }
//           }
//
//       }
//Thingies
// function coordXToTile(x) {
//   return x % gridWidth;
// }
// function coordYToTile(y) {
//   return math.floor(y / gridWidth);
// }
function tileXToQuard(i) {
  //var xOffset = player.x - c.width / 2;
  var x = (i % gridWidth) * tileWidth;
  return x;
}
function tileYToQuard(i) {
  //var yOffset = player.y - c.height / 2;
  var y = Math.floor(i / gridHeight) * tileHeight;
  return y;
}
// function cellAtTile(tx, ty)
// {
//   if(tx <= 0 || tx >= gridWidth)
//   {
//     return 1;
//   }
//   if(ty <= 0 || ty >= gridHeight)
//   {
//     return 0;
//   }
//   return collisionCells[0][ty][tx];
// }
function gameLogic()
{
  var tmp = false; //I wonder what this does?
  for(i = 0; i < level1.layers[0].data.length; i++)
  {

    if(level1.layers[0].data[i] != 0 && level1.layers[0].data[i] <= 6) {
    if(player.x < tileXToQuard(i) + tileWidth &&
    player.x + player.width > tileXToQuard(i) &&
    player.y < tileYToQuard(i) + tileHeight &&
    player.height + player.y > tileYToQuard(i))
    {
      tmp = true;
    }
  }
}
if(tmp)
{
  player.isGrounded = true;
}
else {
  player.isGrounded = false;
}
  //Run the enemy ai
  for(i = 0; i < enemies.length; i++)
  {
    enemies[i].ai();
  }
  groundHeight = 700;
  //Apply gravity
  // if(player.y < groundHeight) {
  //   player.isGrounded = false;
  //   player.VelY++;
  // }
  // //Is player touchign ground
  // else if (player.y >= groundHeight) {
  //   player.isGrounded = true;
  //   player.jumpLock = false;
  // }
  if(player.isGrounded == false)
  {
    player.VelY++;
  } else {
    player.jumpLock = false;
  }
  //Slowly stop player movement
  if (player.VelX > 0)
  {
    player.VelX--;
  }
  if (player.VelX < 0)
  {
    player.VelX++;
  }
}
