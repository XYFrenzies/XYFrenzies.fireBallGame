//Collision data
var collisionCells = new Array();


//Collission =)
/*for(var i = 0; i < level1.layers.length; i++){ // for every layer
          var index= 0; //the index in the map data
          collisionCells[i] = new Array();
          for(var y = 0; y < level1.height; y++){ // for every y tile
              collisionCells[i][y] = new Array();
              for(var x = 0; x < level1.width; x++){ // for every x tile
                  if(level1.layers[i].data[index] !=0 ){// if there is a tile in that position

                      //a tile is 4x as large as map cell
                      collisionCells[i][y][x] = true;
                      collisionCells[i][y - 1][x] = true;
                      collisionCells[i][y - 1][x + 1] = true;
                      collisionCells[i][y][x + 1] = true;
                  }
                  else{
                      collisionCells[i][y][x] = false;
                  }
                  index++;
              }
          }
<<<<<<< HEAD
      }
//Thingies
// function coordXToTile(x) {
//   return x % gridWidth;
// }
// function coordYToTile(y) {
//   return math.floor(y / gridWidth);
// }
function coordToTile(Coord){
    //takes in x or y and gives back which row or column of the map contains that x/y
    return Math.floor(Coord/mapTileSize);
}
=======
      }*/
>>>>>>> fed8cfe4cc40e4b66bded095e4da850fa58f94f5

function tileToCoord(tile){
    return tile * mapTileSize;
}
function cellAtTile(tx, ty)
{
  if(tx <= 0 || tx >= gridWidth)
  {
    return 1;
  }
  if(ty <= 0 || ty >= gridHeight)
  {
    return 0;
  }
  return collisionCells[0][ty][tx];
}
function gameLogic()
{
  //Run the enemy ai
  for(i = 0; i < enemies.length; i++)
  {
    enemies[i].ai();
  }
  groundHeight = 700;
  //Apply gravity
  if(player.y < groundHeight) {
    player.isGrounded = false;
    player.VelY++;
  }
  //Is player touchign ground
  else if (player.y >= groundHeight) {
    player.isGrounded = true;
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
