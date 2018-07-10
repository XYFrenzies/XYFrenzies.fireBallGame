var Level = 0; 
var Level1 = 0;


var gravity = 9.8 * 20 ;

var animationLeft = 0;
var animationRight = 1;

var animationIdleLeft = 0;
var animationJumpLeft = 1; 
var animationWalkLeft = 2;
var animationIdleRight = 3;
var animationJumpRight = 4;
var animationWalkRight = 5; 
var animationMax = 6; 

var fireRate = 0.25;
var timer = fireRate;

var tileSize = 64;
var mapTileSize = 58;
var tileSetX = 58;
var tileSetY = 64; 

var level1SpawnX = 30;
var level1SpawnY = 30;


var deaths = 0;