var keyDebug = ""
//keys
function setupKeys() {
  //enter
  kontra.keys.bind('enter', function () {
    switch (gameState.state) {
      case "splashscreen":
        gameState.introduce();
        break;
      case "intro":
        keyDebug = gameState.state
        if (introCursor.state == "start") {
          gameState.play();
        }
        else {
          gameState.applaud();
        }
        break;
      case "game":
        keyDebug = gameState.state
        //decide how to progress
        //gameState.fight();
        gameState.move();
        break;
      case "menu":
        keyDebug = gameState.state
        break;
      case "conversation":
        keyDebug = gameState.state
        break;
      case "credits":
        keyDebug = gameState.state
        gameState.introduce();
        break;
      case "battle":
        switch (battleCursor.state) {
          case 'spot1':
            switch (slot1.state) {
              case "charging":
              //what is this?
                slot1.charge()

                break;
              case "flipping":
                break;
            }
            break;
          case 'spot2':
            break;
          case 'spot3':
            break;
          case 'spot4':
            break;
        }
        keyDebug = gameState.state

        //add coin selection here
        break;
    }
    console.log(keyDebug + " enter")
  });
  //a
  kontra.keys.bind('a', function () {
    switch (gameState.state) {
      case "intro":
        keyDebug = gameState.state
        break;
      case "game":
        keyDebug = gameState.state
        break;
      case "menu":
        keyDebug = gameState.state
        break;
      case "conversation":
        keyDebug = gameState.state
        break;
      case "credits":
        keyDebug = gameState.state
        break;
      case "battle":
        keyDebug = gameState.state
        break;
    }
    console.log(keyDebug + " a")
  });//end a
  //d
  kontra.keys.bind('d', function () {
    switch (gameState.state) {
      case "intro":
        keyDebug = gameState.state
        break;
      case "game":
        keyDebug = gameState.state
        break;
      case "menu":
        keyDebug = gameState.state
        break;
      case "conversation":
        keyDebug = gameState.state
        break;
      case "credits":
        keyDebug = gameState.state
        break;
      case "battle":
        keyDebug = gameState.state
        break;
    }
    console.log(keyDebug + " d")
  });//end d
  //w
  kontra.keys.bind('w', function () {
    switch (gameState.state) {
      case "intro":
        keyDebug = gameState.state
        introCursor.change();
        console.log(introCursor.state)
        break;
      case "game":
        keyDebug = gameState.state
        break;
      case "menu":
        keyDebug = gameState.state
        break;
      case "conversation":
        keyDebug = gameState.state
        break;
      case "credits":
        keyDebug = gameState.state
        break;
      case "battle":
        keyDebug = gameState.state
        battleCursor.up();
        break;
    }
    console.log(keyDebug + " w")
  });//end w
  //s
  kontra.keys.bind('s', function () {
    switch (gameState.state) {
      case "intro":
        keyDebug = gameState.state
        introCursor.change();
        console.log(introCursor.state)
        break;
      case "game":
        keyDebug = gameState.state
        break;
      case "menu":
        keyDebug = gameState.state
        break;
      case "conversation":
        keyDebug = gameState.state
        break;
      case "credits":
        keyDebug = gameState.state
        break;
      case "battle":
        keyDebug = gameState.state
        battleCursor.down()
        break;
    }
    console.log(keyDebug + "  s")
  });//end s
  //p
  kontra.keys.bind('p', function () {

    if (grid.is("on")) {
      grid.disappear();
    }
    else {
      grid.appear();
    }

  });//end p
}
//moving stuff with controls and changing states
function moveIntroCursor() {
  if (introCursor.state == "start") {
    introCursorSprite.x = cursorStartLocation.x;
    introCursorSprite.y = cursorStartLocation.y;
  }
  else {
    introCursorSprite.x = cursorCreditsLocation.x;
    introCursorSprite.y = cursorCreditsLocation.y;
  }
}