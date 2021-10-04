//statemachines
//Actual gameState
function setupStates() {
  gameState = new StateMachine({
    init: 'splashscreen',
    transitions: [
      { name: 'introduce', from: 'splashscreen', to: 'intro' },
      { name: 'introduce', from: 'credits', to: 'intro' },
      { name: 'applaud', from: 'intro', to: 'credits' },
      { name: 'play', from: 'intro', to: 'game' },
      { name: 'play', from: 'conversation', to: 'game' },
      { name: 'play', from: 'battle', to: 'game' },
      { name: 'finish', from: 'battle', to: 'game' },
      { name: 'converse', from: 'game', to: 'conversation' },
      { name: 'fight', from: 'game', to: 'battle' },
      { name: 'move', from: 'game', to: 'scroll' },
      { name: 'encounter', from: 'scroll', to: 'battle' },
    ],
    methods: {
      onEncounter: function () {
        slot1.fill()
      },
      onFinish: function () {
        gameScreen['status'] = [];
        slot1.cooldown = 0;
        charge1 = 0
        //place next bg section
        gameScreen['background'].push(kontra.sprite({ animations: animations['longstreet'].animations, x: 800, y: 0 }))
        nextCity = (nextCity + 1) % 6
        //place next enemy
       
        //cycle 2 enemy variables?
        currentEnemy = new Enemy(enemies['mugger'])

        //adding new enemy
        
        enemyList[enemyToggle] = new Enemy(enemies['mugger'])
        enemyList[enemyToggle].move(800, 0)
        enemyToggle = (enemyToggle + 1) % 2

        currentEnemy = enemyList[enemyToggle]
        //enemyList[enemyToggle].move(800, 0)
        //gameScreen['characters'].push(item.sprite)

      },
      onMove: function () {

      },
      //trans out
      onLeaveSplashscreen: function () {
        gameScreen.swipeOutTransition();
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1000);
        })
      },//end trans out
      onLeaveCredits: function () {
        gameScreen.swipeOutTransition();
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1000);
        })
      },
      onLeaveIntro: function () {
        gameScreen.swipeOutTransition();
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1000);
        })
      },
      //trans in
      onEnterIntro: function () {
        console.log('Intro');
        gameScreen.clear();
        setupIntro();
        gameScreen.swipeInTransition();
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1500);
        })
      },//end trans in
      onEnterCredits: function () {
        console.log('Credits');
        gameScreen.clear();
        setupCredits();
        gameScreen.swipeInTransition();
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1500);
        })
      },//end trans in
      onIntroduce: function () {

      },
      onApplaud: function () {

      },
      onEnterGame: function () {

      },
      onPlay: function () {
        console.log('Game');
        //gameScreen.clear();
        setupGame();
        console.log(gameScreen)
        gameScreen.swipeInTransition();
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1500);
        })
      },
      onConverse: function () { console.log('I condensed') },
      onEnterBattle: function () {
        //change depending on number of coins
        //slot1.fill();
        //slot2.fill();
        //slot3.fill();
        //slot4.fill();
        setupBattle()
      },
      onFight: function () { console.log('I vaporized') },
      onMove: function () { console.log('I vaporized') },
    }
  });//gameState done

  //debug grid for sprite placement
  grid = new StateMachine({
    init: 'off',
    transitions: [
      { name: 'appear', from: 'off', to: 'on' },
      { name: 'disappear', from: 'on', to: 'off' }
    ],
    methods: {
      onAppear: function () {
        for (i = 0; i < 8; i++) {
          debug.push(kontra.sprite({
            x: (i * 100),
            y: 0,
            height: 600,
            width: 2,
            color: 'red'
          }));
        }//horizontal lines done
        for (i = 0; i < 6; i++) {
          debug.push(kontra.sprite({
            y: (i * 100),
            x: 0,
            height: 2,
            width: 800,
            color: 'red'
          }));
        }//vertical lines done
        console.log("grid appears");
      },
      onDisappear: function () { debug = []; console.log("grid gone"); }
    }
  });//grid state machine done

  //introCursor state machine
  introCursor = new StateMachine({
    init: 'start',
    transitions: [
      { name: 'change', from: 'start', to: 'credits' },
      { name: 'change', from: 'credits', to: 'start' }
    ],
    methods: {
      //moving the cursor
      onChange: function () {
        console.log('introcursor change');
        moveIntroCursor();
      }
    }
  });

  //slot1 state machine
  slot1 = new StateMachine({
    init: 'empty',
    transitions: [
      { name: 'fill', from: 'empty', to: 'charging' },
      { name: 'reset', from: '*', to: 'empty' },
      { name: 'remove', from: 'charging', to: 'empty' },
      { name: 'miss', from: 'charging', to: 'dud' },
      { name: 'recover', from: 'dud', to: 'charging' },
      { name: 'flip', from: 'charging', to: 'flipping' },
      { name: 'miss', from: 'flipping', to: 'dud' },
      { name: 'land', from: 'flipping', to: 'dud' }
    ],
    data: {
      crit: 1,
      bonus: 0,
      name: "slot1",
      cooldown: 0,
      cooldownSprite: kontra.sprite({ animations: animations["nums"].animations, x: 90, y: 90 })
    },
    methods: {

      onCharging: function () {
        //TODO: maybe an animation and sound effect
        pennySprite.playAnimation('flip')
        //console.log("put something funny when you miss")
      },
      onMiss: function () {
        //TODO: maybe an animation and sound effect
        console.log("put something funny when you miss")
      },
      cooling: function () {


        this.cooldownSprite.playAnimation(parseInt((this.cooldown / 300) * 5) + 1);
        if (this.cooldown > 0) {
          this.cooldown--;
          if (this.cooldown == 0) {
            //TODO play a sound effect and some sort of animation to signal the readiness

            gameScreen['status'] = [];
            if (this.is('dud'))
              this.recover()

          }
        }

      },
      onDud: function () {
        this.cooldown = 300
        gameScreen['status'].push(this.cooldownSprite)
        //TODO: add the floating z's
        //TODO: do a full rotation during cooldown
      },
      charge: function () {
        let score = charge1 / 130;
        console.log(score + "%")
        if (score > 0.95) {
          console.log("crit")
          this.crit = 2
          this.flip()

        }
        else if (score > 0.5)
          this.flip()
        else
          this.miss()
      },
      onFlipping: function () {

        coin1.rise()
        //animations["protagonist"].animations.flip.reset()
        protagonistSprite.playAnimation('flip')
        pennySprite.playAnimation('flip')
        //call this when the state is flippingUp
        //coin1.fall()


      },
      onLand: function () {
        protagonistSprite.playAnimation('idle')
        //make a function to recenter the sprite in it's slot
        pennySprite.x = 100
        pennySprite.y = 90
        pennySprite.playAnimation([coin1.state])
      }
    }
  });
  //add slot2,3,4 as needed

  //battleCursor
  battleCursor = new StateMachine({
    init: 'spot1',
    transitions: [
      { name: 'up', from: 'spot4', to: 'spot3' },
      { name: 'up', from: 'spot3', to: 'spot2' },
      { name: 'up', from: 'spot2', to: 'spot1' },
      { name: 'up', from: 'spot1', to: 'spot4' },
      { name: 'down', from: 'spot1', to: 'spot2' },
      { name: 'down', from: 'spot2', to: 'spot3' },
      { name: 'down', from: 'spot3', to: 'spot4' },
      { name: 'down', from: 'spot4', to: 'spot1' }
    ],

  });
  battleCursor.observe('onEnterState', function (lifecycle) {
    //move the cursor sprite according to state
    switch (battleCursor.state) {
      case "spot1":
        cursorSprite.position = { x: 10, y: 110 };
        break;
      case "spot2":
        cursorSprite.position = { x: 10, y: 230 };
        break;
      case "spot3":
        cursorSprite.position = { x: 10, y: 350 };
        break;
      case "spot4":
        cursorSprite.position = { x: 10, y: 470 };
        break;
      default:
        break;

    }
  });

  //coin1 state machine to track animations and determine face and track bonus flips
  coin1 = new StateMachine({
    init: 'heads',
    transitions: [
      { name: 'turn', from: 'heads', to: 'tails' },
      { name: 'turn', from: 'tails', to: 'heads' },
      { name: 'rise', from: 'heads', to: 'flippingUp' },
      { name: 'rise', from: 'tails', to: 'flippingUp' },
      { name: 'endFlipHeads', from: 'flippingDown', to: 'heads' },
      { name: 'endFlipTails', from: 'flippingDown', to: 'tails' },
      { name: 'fall', from: 'flippingUp', to: 'flippingDown' },
      { name: 'reset', from: '*', to: 'heads' }
    ],
    data: {
      //this will be assigned when the menu is done
      coinSprite: pennySprite
    },
    methods: {
      result: function () {

        pennySprite.ddy = 0
        pennySprite.dy = 0
        let chance = Math.random();
        console.log(chance)
        console.log("crit: " + slot1.crit)
        if (chance > 0.5) {//you can put modifiers in here later
          this.endFlipHeads()
          console.log("heads! " + 2 * slot1.crit + " Damage!")
          currentEnemy.takeDamage(2 * slot1.crit);
          console.log("enemy hp: " + currentEnemy.hp)
        }
        else {
          this.endFlipTails()
          console.log("tails! " + 2 * slot1.crit + " Damage!")
          currentEnemy.takeDamage(1 * slot1.crit)
          console.log("enemy hp " + currentEnemy.hp)
        }
        slot1.crit = 1
        slot1.land()
        if (currentEnemy.hp < 1) {

          slot1.reset();
          gameState.finish();
        }


      },

      processFlip() {
        if (this.is('flippingUp') && pennySprite.y < -100) {
          this.fall()
        }
        if (this.is('flippingDown') && pennySprite.y >= 90) {
          this.result()

        }
      },
      onFlippingUp: function () {
        //code for going up
        pennySprite.ddy = -1
      },
      onFlippingDown: function () {
        pennySprite.ddy = 1
      }
    }
  })
}