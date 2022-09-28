class Game {
  constructor() {
    this.resetButton = createButton("Reset");
    this.rockButton = createButton("Rock");
    this.paperButton = createButton("Paper");
    this.scissorButton = createButton("Scissor");

  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

   // item = new Item();
    

    form = new Form();
    form.show();

    p1 = createSprite(50, height / 2, 50, 50);
    p1.shapeColor = "red";

    p2 = createSprite(width - 50, height / 2, 50, 50);
    p2.shapeColor = "yellow"

    players = [p1, p2];
  }

  handleElements() {

    this.resetButton.class("resetButton");
    this.resetButton.position(50, 80);


    this.rockButton.size(80, 40);
    this.rockButton.class("customButton2");
    this.rockButton.position(width / 2 + 90, height - 50);
    this.paperButton.position(width / 2, height - 50);
    this.paperButton.class("customButton2");
    this.scissorButton.position(width / 2 - 90, height - 50);
    this.scissorButton.size(80, 40);
    this.scissorButton.class("customButton2");


  }


  play() {
    this.handleElements();
    this.handleShoot()

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        players[index - 1].position.x = x;
        players[index - 1].position.y = y;

        if (index === player.index) {
          //console.log(index);
          //stroke(10);
          //fill("red");
          //ellipse(x, y, 60, 60);

          // Changing camera position in y direction
          //camera.position.x = cars[index - 1].position.x;
          //camera.position.y = cars[index - 1].position.y;
        }
      }

      this.handlePlayerControls();
      this.handleResetButton()

      drawSprites();
    }
  }

  handlePlayerControls() {
    // handling keyboard events
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.positionY -= 10;
      player.update();
    }
  }
  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
      });
      window.location.reload();
    });
  }
  handleShoot() {
    this.paperButton.mousePressed(() => {
      //paper = createSprite()
      //paper.addImage("paperImg")
      //paper.x = this.positionX
      //paper.y = this.positionY
      item = new Item
      item.addItem()

    })
    this.rockButton.mousePressed(() => {
      //rock = createSprite()
      //rock.addImage("rockImg")
      //rock.x = this.positionX
      //rock.y = this.positionY
      item = new Item
      item.addItem()

    })
    this.scissorButton.mousePressed(() => {
      //scissor = createSprite()
      //scissor.addImage("scissorImg")
      //scissor.x = this.positionX
      //scissor.y = this.positionY
      item = new Item
      item.addItem()
    })
}
}
