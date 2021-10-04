//TODO: add enemy attacks
//TODO: add map for level clearing
//TODO: add blockchain for coin leveling
//TODO: add a menu for changing coins and checking stats
//TODO: add floating status messages for events
//TODO: add more enemies, angry businessman(trump), etc
//TODO: change the battle UI
//TODO: add timing for bonus flips
//TODO: add attacks/abilities with animations for each coin face, and power level
var toggle = 1;
var enemyToggle = 0
var enemyList = []
var checkList = []
var charge1 = 1;
var nextCity = 3;
//globals
var enemies;
var currentEnemy;
var enemySprite;
var protagonistSprite;
var pennySprite;
var slot1;
var slot2;
var slot3;
var slot4;
var coin1;
var coin2;
var coin3;
var coin4;
var grid;
var introCursor;
var gameState;
var gameScreen;
var battleCursor;
var cursorSprite;
var rotation = 0.1;
var debug = [];
var debug = [];
var progress = "start"
var cursorLocation;
var gameLocation = "city"
var currentBattleAnimations;
var currentConversationAnimations;
var currentConversation;
var currentFrame = "done";
var introSprites = [];
var fontsize = 16;
var caps;
var words = "";
var nums;
var syms;
var protagonist;
var portraits;
var frameWords;
var currentScreen = [];
var sprites = [];//get rid of this?
var currentConversation;
var scale = 1;
var opacity = 1;
var distance = 800;
//testing convo
var intro1 = new Conversation(conversations["banana"])

//positional junk and constants
const playerBattleLocation = { x: 200, y: 350 };
const opponentBattleLocation = { x: 500, y: 290 }
const textboxWordsLocation = { x: 220, y: 50 }
const splashLength = 6500;
const cursorStartLocation = { x: 345, y: 374 }
const cursorCreditsLocation = { x: 345, y: 420 }


//cool functions

kontra.init();


kontra.assets.imagePath = 'images/';

kontra.assets.load(...assets).then(
  function () {
    //one time setups

    slot1ChargeBar = kontra.sprite(//awesome charging bar
      {
        anchor: { x: 0, y: 1 },
        x: 72,
        y: 190,
        height: charge1,
        width: 130,
        color: 'yellow',
        update: function update() {
          if (slot1.is('charging')) {
            charge1 = (charge1 + toggle * 2)
            if (charge1 >= 130) {
              toggle = -1
            }
            if (charge1 <= 0) {
              toggle = 1
            }
            this.height = charge1;
            if (this.height > 122)
              this.color = "red"
            else if (this.height > 65)
              this.color = "yellow"
            else
              this.color = "#fcffce"
          }
          else {
            toggle = 1;
            charge1 = 0;
          }
          //this.update()
          this.advance();
        }

      });
    //animations.js;
    createAnimations();
    //controls.js

    setupGameScreen();
    //gamestates.js
    setupStates();
    //controls.js
    setupKeys();
    //starting with the splash screen
    setupSplash()
    enemies = loadEnemies()

    //timer for the splash leads into the intro
    //get rid of promises and use checks in the states and update loop
    var promise1 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, splashLength);
    });

    promise1.then(function () {
      console.log("splash done");
      gameState.introduce();

    });



    //game loop
    var loop = kontra.gameLoop({

      update: function () {
        //use switches with states to control what is updated
        //create functions for each state and a global update function
        switch (gameState.state) {
          case 'splashscreen':

            break;
          case 'intro':

            break;
          case ('credits'):

            break;
          case ('game'):

            break;
          case ('menu'):

            break;
          case ('scroll'):

            break;
          case ('battle'):

            break;
          default:
            break;
        }
        switch (slot1.state) {
          case 'empty':
            break;
          case 'charging':
            slot1ChargeBar.update();
            break;
          case 'flipping':
            break;
          case 'dud':
            break;
        }
        //moving the background
        if (gameState.is('scroll')) {
          speed = 5;

          distance -= speed
          enemyList.forEach(function (elem) {
            elem.move(-speed, 0)
          })
          gameScreen['background'].forEach(function (elem) {
            elem.x -= speed
          })

          if (distance < 1) {
            distance = 800;
            gameState.encounter()
          }
        }
        //screen.js
        gameScreen.update();
        enemyList.forEach(function (item) {
             item.update();
           })
        //change stuff

        //showing enemy hp
        // if (currentEnemy) {
        //   let x = currentEnemy.drawHealth()
        //   x.forEach(function (elem) { elem.update(); })
        // }

        //testing this here for the flipping animation
        coin1.processFlip();
        slot1.cooling();

      },//end update
      render: function () {

        switch (gameState.state) {
          case 'splashscreen':
            gameScreen.render();
            break;
          case 'intro':
            gameScreen.render();
            break;
          case ('credits'):
            gameScreen.render();
            break;
          case ('game'):
            gameScreen.render();
            break;
          case ('menu'):
            gameScreen.render();
            break;
          case ('scroll'):
            gameScreen.render();
            break;
          case ('battle'):
            //gameScreen.render();
            gameScreen["background"].forEach(function (element) {
              element.render();
            })
            gameScreen["characters"].forEach(function (element) {
              element.render();
            })
            enemyList.forEach(function (item) {
              item.render();
            })
            slot1ChargeBar.render();
            switch (slot1.state) {
              case 'empty':
                break;
              case 'charging':
                
                break;
              case 'flipping':
                break;
              case 'dud':
                break;
            }
            gameScreen["battleUI"].forEach(function (element) {
              element.render();
            })
            gameScreen["coins"].forEach(function (element) {
              element.render();
            })
            gameScreen["status"].forEach(function (element) {
              element.render();
            })
            gameScreen["resultsUI"].forEach(function (element) {
              element.render();
            })
            gameScreen["textbox"].forEach(function (element) {
              element.render();
            })
            gameScreen["transition"].forEach(function (element) {
              element.render();
            })
            break;
          default:
            break;
        }

        /*
                //current convo
                //put the left portrait
                if (currentFrame != "done") {
                  animations["textbox"].animations.twoconv.render({ x: 0, y: 0 });
                  animations[currentFrame.leftportrait.person].animations.portrait.render({ x: 54, y: 52 })
                  animations[currentFrame.rightportrait.person].animations.portrait.render({ x: 603, y: 94 })
                  //put the right portrait
                  //put the text
                }
                else {
                  words = [];
                }
                if (words.length > 0) {
                  words.forEach(function (element) {
                    element.sprite.render(element.position);
                  });
                }
        
        */


        //showing enemy hp
        // if (currentEnemy) {
        //   let x = currentEnemy.drawHealth()
        //   x.forEach(function (elem) { elem.render(); })
        // }
        //leave this at the end, positioning overlay
        debug.forEach(function (element) {
          element.render();
        })//overlay done

      }//end of render
    });//end of game loop

    //testing conversations
    // currentConversation = new Conversation(conversations.banana);
    // currentFrame = currentConversation.getNextFrame();

    // words=writeText(frameWords,textboxWordsLocation)

    // frameWords = currentFrame.words;

    loop.start();

  }).catch(function (err) {
    console.log("can't find" + err);
    throw err;
  });
