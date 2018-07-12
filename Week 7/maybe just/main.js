var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var player = new Player();


var sndMain = new Howl(
  {
    src: ['Sounds/1 Hour of Magical & Fantasy & Epic Music Full HD 1080p 150 Pictures Slideshow.mp3'],
    loop:true,
    buffer:true,
    volume:0.4
  });

var sndGame = new Howl(
  {
    src: ['Sounds/Game.mp3'],

    loop:false,
    buffer:true,
    volume:0.4
  });

var sndEndGame = new Howl(
  {

    src: ['Sounds/EndGame.wav'],

    loop:false,
    buffer:true,
    volume:0.4
  });

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
  superTime -= dt;
    player.Update();
    if(timable > spawnRate)
    {
      timable = 0;
      enemies.push(new Enemy());
    }
    for(i = 0; i < enemies.length; i++)
    {
      if(enemies[i] != undefined)
      {
      enemies[i].Update();
    }
    }
    for(i = 0; i < wizards.length; i++)
    {
      if(wizards[i] != undefined)
      {
      wizards[i].Update();
      }
    }
    for(i = 0; i < orbs.length; i++)
    {
      if(orbs[i] != undefined)
      {
        orbs[i].Update();
      }
    }
    for(i = 0; i < fireBalls.length; i++)
    {
      if(fireBalls[i] != undefined)
      {
        fireBalls[i].Update();
      }
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
    context.fillText("Score: "+ score, 10, 50);

    context.fillStyle = "#ff0000"
    context.fillText("Lives: "+ lives, 1000, 50)
    //draw the player
    player.Draw();

    for(i = 0; i < enemies.length; i++)
    {
      if(enemies[i] != undefined)
      {
      enemies[i].Draw();
      }
    }
    for(i = 0; i < wizards.length; i++)
    {
      if(wizards[i] != undefined)
      {
      wizards[i].Draw();
      }
    }
    for(i = 0; i < fireBalls.length; i++)
    {
      if(fireBalls[i] != undefined)
      {
        fireBalls[i].Draw();
      }
    }


    //for(i = 0; i < orbs.length; i++)
    //{
      //orbs[i].Draw();
    //}


}
wizards.push(new Wizard());
function GameLoop()
{
    sndMain.stop();
    sndGame.play();
    Update();
    Draw();
    if(lives <= 0)
    {
      Level = GameOver;
      gameOver();
    } else {
        requestAnimationFrame(GameLoop);
    }

}
function instructions()
{
  if(Level == InstructMenu)
  {
    UpdateInstruct();
    DrawInstruct();
    requestAnimationFrame(instructions);
  }
}
function startMenu()
{
  sndEndGame.stop();
  sndMain.play();
  UpdateMenu();
  DrawMenu();
  if(Level == MainMenu)
  {
  requestAnimationFrame(startMenu);
  }
}
function gameOver()
{
  if(Level == GameOver)
  {
    sndGame.stop();
    sndEndGame.play();
    UpdateGameOver();
    DrawGameOver();
  requestAnimationFrame(gameOver);
  }
}
window.onload = function()
{
  startMenu();
};
