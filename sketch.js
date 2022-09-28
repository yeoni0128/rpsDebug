var titleImg, rockImg, scissorImg, paperImg;
var rock, scissor, paper, name, bg, resetButton;
var dataBase;
var gameState = 0;
var playerCount = 0;
var playerData;
var form,game,player,item
var players = [];
var allPlayers
var p1,p2

function preload() {
  titleImg = loadImage("assets/RPS.png");
  rockImg = loadImage("assets/Rock.png");
  scissorImg = loadImage("assets/Scissors.png");
  paperImg = loadImage("assets/Paper.png");
  resetImg = loadImage("assets/reset.png");
}

function setup() {
  database = firebase.database();
  createCanvas(windowWidth,windowHeight);
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("#13abb3");

  if (gameState === 1) {
    game.play();
  }

  if (playerCount === 2) {
    gameState = 1;
    game.update(1)
  }
}





