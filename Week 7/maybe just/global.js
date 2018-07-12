//These variables are used globally so that each and every
//javascript file can use these definitions.

//This is used for the changing of transitions of game states
var Level = 1;
const Level1 = 0;
const GameOver = 2;
const MainMenu = 1;
const InstructMenu = 3;
var dt = GetDeltaTime();

//Giving the force downwards of the player and any other characters
var gravity = 9.8 * 20 ;

//These are used for the player so that javascript knows which
//animation should be occuring at a specific time.
const animationLeft = 0;
const animationRight = 1;

const animationIdleLeft = 0;
const animationJumpLeft = 1;
const animationWalkLeft = 2;
const animationIdleRight = 3;
const animationJumpRight = 4;
const animationWalkRight = 5;
const animationMax = 6;

const fireRate = 0.25;
var timer = fireRate;

//This is the values that the tiles of the game are using,
//the tile along the X is 58 and 64 on the Y.
const tileSize = 64;
const mapTileSize = 58;
const tileSetX = 58;
const tileSetY = 64;

//This is to spawn the player at a specific point
const level1SpawnX = 300;
const level1SpawnY = 1400;

//These are arrays of different abilities or characters so that they
//can be used across multiple different files.
var orbs = [];
var fireBalls = [];
var enemies = [];
var wizards = [];

//Supertime is the time inbetween where the enemy can attack the player. This is set up in collision.
var superTime = 0;

//The spawn rate is how fast the enemy is spawning at a specific time.
var spawnRate = .3;

//Scoring is how much the player starts with.
var score = 0;

//Lives is how many hits from the enemies that the player can take.
var lives = 3;

//These two values are used as a result of making sure that the sounds
//can be played in the array of orbs and the jumping mechanic.
var JumpSndPlay = false;
var fireSndPlay = false;
