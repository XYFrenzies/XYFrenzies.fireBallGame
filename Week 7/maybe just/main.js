var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var player = new Player();


var score = 0;
var lives = 3;

var tileset = document.createElement("img");
tileset.src = "Images/Tileset.png";



var collisionCells = new Array();

var BackgroundImage = document.createElement("img");
BackgroundImage.src = ("Images/Background.png");


function CreateCollisionData(){
    if(Level == Level1){
        for(var i = 0; i < level1.layers.length; i++){ // for every layer
            var index= 0; //the index in the map data
            collisionCells[i] = new Array();
            for(var y = 0; y < level1.height; y++){ // for every y tile
                collisionCells[i][y] = new Array();
                for(var x = 0; x < level1.width; x++){ // for every x tile
                    if(level1.layers[i].data[index] !=0 ){// if there is a tile in that position

                        //a tile is 4x as large as map cell
                        collisionCells[i][y][x] = true;
                    }
                    else{
                        collisionCells[i][y][x] = false;
                    }
                    index++;
                }
            }
        }
    }
}

function coordToTile(Coord){
    //takes in x or y and gives back which row or column of the map contains that x/y
    return Math.floor(Coord/mapTileSize);
}

function tileToCoord(tile){
    return tile * mapTileSize;
}

function cellAtTile(layer, tx, ty ){
    //returns true or false if the tile has collision
    if(Level == Level1){
        if(tx <= 0 || tx >= level1.width)
            return 1;
        if(ty <= 0 || ty >= level1.height)
            return 0;
    }
    return collisionCells[layer][ty][tx];
}

function DrawMap(){
    if(Level == Level1){
        for(var i = 0; i < level1.layers.length; i++){
            var index = 0;
            for(var y = 0; y < level1.height ; y++){
                for(var x = 0; x < level1.width; x++){
                    if( level1.layers[i].data[index] != 0){
                        var tileIndex = level1.layers[i].data[index] - 1;
                        var sx =  (tileIndex % tileSetX) * (tileSize);
                        var sy =  (Math.floor(tileIndex / tileSetY)) * (tileSize);
                        var offsetX = player.x;
                        var offsetY = player.y;
                        context.drawImage(tileset, sx, sy, tileSize, tileSize, x*mapTileSize - offsetX, (y-1)*mapTileSize - offsetY, tileSize, tileSize);
                    }
                    index++
                }
            }
        }
    }
}
var timable = 9;
function Update(){
  timable += dt;
    player.Update();
    if(timable > 10)
    {
      timable = 0;
      enemies.push(new Enemy());
    }
    for(i = 0; i < enemies.length; i++)
    {
      enemies[i].Update();
    }
    for(i = 0; i < orbs.length; i++)
    {
      orbs[i].Update();
    }
    collides();

}

function Draw(){

    //clear the screen
    context.fillStyle = "#f1f1f1" ;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(BackgroundImage, 0,0,canvas.width, canvas.height);
    DrawMap();

    context.font = "30px Arial";
    context.fillStyle = "#ff0000";
    context.fillText("Time: ", 10, 50);

    context.fillStyle = "#ff0000"
    context.fillText("Lives: ", 1000, 50)
    //draw the player
    player.Draw();

    for(i = 0; i < enemies.length; i++)
    {
      enemies[i].Draw();
    }


    //for(i = 0; i < orbs.length; i++)
    //{
      //orbs[i].Draw();
    //}


}

function GameLoop(){
    Update();
    Draw();
    requestAnimationFrame(GameLoop);
}

CreateCollisionData();
GameLoop();
