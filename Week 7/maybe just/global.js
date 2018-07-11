const Level = 0;
const Level1 = 0;
var dt = GetDeltaTime();

var gravity = 9.8 * 20 ;

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

const tileSize = 64;
const mapTileSize = 58;
const tileSetX = 58;
const tileSetY = 64;

const level1SpawnX = 300;
const level1SpawnY = 1000;

var orbs = [];

var deaths = 0;
