var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");



//The following Howl is a function that are using the howler srcipt to produce the sound
var sndMain = new Howl(
  {
    urls : ['Sounds/menu.wav'],
    loop:true,
    buffer:true,
    volume:0.1
  });

var sndGame = new Howl(
  {
    urls: ['Sounds/Game.mp3'],

    loop:false,
    buffer:true,
    volume:0.1
  });

var sndEndGame = new Howl(
  {

    urls: ['Sounds/EndGame.wav'],

    loop:false,
    buffer:true,
    volume:0.1
  });

var sndJump = new Howl(
  {
    urls:['Sounds/Jump.mp3'],
    loop:false,
    buffer:true,
    volume:0.05,
  })

var fireBall = new Howl(
  {
    urls:['Sounds/Fire Ball.wav'],
    loop:false,
    buffer:true,
    volume:0.05,
  })

var swordsClashing = new Howl(
  {
    urls:['Sounds/Swords.wav'],
    loop:false,
    buffer:true,
    volume:0.05,
  })

//Creates the tileset of the game
var tileset = document.createElement("img");
tileset.src = "Images/Tileset.png";



var collisionCells = new Array();

//This is the background image which is representing a black brick wall
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
//This allows for the spawning of the Enemy, wizard, orbs and fireball
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

//Allows for the sound effect of the fire ball to occur on trigger with the spacebar

    if(player.firelock = true && fireSndPlay == false)
    {
      fireBall.play();
      fireSndPlay = true;
    }

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
}


//This is updating each variable in the game
function GameLoop()
{

    Update();
    Draw();
    if(lives <= 0)
    {
      if(Cookies.get('HighScore') == undefined)
      {
        Cookies.set('HighScore', score);
      } else {
      if(score > Cookies.get)
      {
        Cookies.set('HighScore', score);
        HighScore = score;
      } else {
        HighScore = Cookies.get('HighScore');
      }
      }
      Level = GameOver;
      gameOver();
      sndGame.stop();
      sndEndGame.play();
    } else {
        requestAnimationFrame(GameLoop);
    }

}
//This is the tutorial state
function instructions()
{
  if(Level == InstructMenu)
  {
    UpdateInstruct();
    DrawInstruct();
    requestAnimationFrame(instructions);
  }
}
//This is the main Menu state
function startMenu()
{

  UpdateMenu();
  DrawMenu();
  if(Level == MainMenu)
  {
  requestAnimationFrame(startMenu);
  }
}

//This is the SelectionScreen for the player.
function SelectionScreenMenu()
{
  if(Level == SelectionScreen)
  {
    UpdateSS();
    DrawScreenSelection();
    requestAnimationFrame(SelectionScreenMenu);
  }
}

//This is the gameOver state
function gameOver()
{
  if(Level == GameOver)
  {
    UpdateGameOver();
    DrawGameOver();
    requestAnimationFrame(gameOver);
  }
}
//This is to ensure that the music works in the main menu
function musicStart()
{
    sndMain.play();
}


window.onload = function()
{

    startMenu();

};
