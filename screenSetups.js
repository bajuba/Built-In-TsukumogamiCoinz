//setting up the splash screen
function setupSplash() {
  gameScreen.clear();
  gameScreen["background"].push(kontra.sprite({
    x: 0,
    y: 0,
    height: 1200,
    width: 1600,
    color: 'black'
  }));
  for (i = 0; i < 100; i++) {
    let colorvalue = (i % 9);
    gameScreen["background"].push(kontra.sprite({
      x: 400,
      y: 200,
      ddy: ((0.01 * i + 0.03) % 0.3),
      rotation: (1 * i),
      height: (200 * i % 300),
      width: (300 * i % 444),
      color: '#' + colorvalue + colorvalue + colorvalue + colorvalue + colorvalue + colorvalue,
    }));

    gameScreen["background"].push(kontra.sprite({
      x: (i * 22.6 % 600),
      y: (i * 14.9 % 800),
      ddy: -((0.01 * i + 0.03) % 0.4),
      rotation: (1 * i),
      height: (200 * i % 300),
      width: (300 * i % 444),
      color: '#' + colorvalue + colorvalue + colorvalue + colorvalue + colorvalue + colorvalue,
    }));
  }


  //newSprite=kontra.sprite({ animations: beekeepers.animations, x: 342, y: 200 })
  gameScreen["characters"].push(kontra.sprite({ animations: animations['beekeepers'].animations, x: 342, y: 200 }));

  gameScreen["characters"].push(...writeText("Bajuba Games", { x: 315, y: 300 }))

}//done setting up splash
//setting up the title screen
function setupIntro() {
  gameScreen.clear();
  gameScreen["background"].push(kontra.sprite({
    x: 0,
    y: 0,
    height: 600,
    width: 800,
    color: 'black'
  }));

  gameScreen["characters"].push(kontra.sprite({ animations: animations["bitcoinzlogo"].animations, x: 100, y: 100 }));
  introCursorSprite = kontra.sprite({ animations: animations["cursor"].animations, x: cursorStartLocation.x, y: cursorStartLocation.y })
  gameScreen["characters"].push(introCursorSprite);

  gameScreen["characters"].push(...writeText("start", { x: 380, y: 380 }))

  gameScreen["characters"].push(...writeText("credits", { x: 380, y: 420 }))


}//done setting up the title screen

function setupCredits() {
  gameScreen.clear();
  cursorLocation = { x: 345, y: 540 }
  gameScreen['background'].push(kontra.sprite({
    x: 0,
    y: 0,
    height: 600,
    width: 800,
    color: 'gray'
  }));

  gameScreen["characters"].push(kontra.sprite({ animations: animations["cursor"].animations.wink, x: cursorLocation.x, y: cursorLocation.y }));

  gameScreen["characters"].push(...writeText("Go Back", { x: 380, y: 540 }))

  gameScreen["characters"].push(...writeText("Designer/Artist", { x: 250, y: 100 }))

  gameScreen["characters"].push(...writeText("James Munger", { x: 260, y: 140 }))

  gameScreen["characters"].push(...writeText("Special Thanks", { x: 250, y: 180 }))

  gameScreen["characters"].push(...writeText("Gaiadin", { x: 260, y: 220 }))

  gameScreen["characters"].push(...writeText("Mandy <3", { x: 260, y: 240 }))

  gameScreen["characters"].push(...writeText("Kurtis (TippyToes) Mason", { x: 260, y: 260 }))
}
function setupGame() {
  gameScreen.clear();
  currentEnemy = new Enemy(enemies['mugger'])
  //
  enemyList[0] = currentEnemy
  enemyList[1] = new Enemy(enemies['mugger'])
  enemyList[1].move(800, 0)
  // enemyList.forEach(function (item) {
  //   gameScreen['characters'].push(item.sprite)
  // })

  gameScreen["background"].push(kontra.sprite({ animations: animations["longstreet"].animations, x: 0, y: 0 }));
  gameScreen["background"].push(kontra.sprite({ animations: animations["longstreet"].animations, x: 800, y: 0 }));
  protagonistSprite = kontra.sprite({ animations: animations["protagonist"].animations, x: 200, y: 350 })
  gameScreen["characters"].push(protagonistSprite);

}
function setupBattle() {
  //draw ui
  gameScreen['battleUI'].push(kontra.sprite({ animations: animations["battleui"].animations }))
  //draw cursor
  cursorSprite = introCursorSprite
  cursorSprite.x = 10
  cursorSprite.y = 110
  gameScreen['characters'].push(cursorSprite);


  //draw coins you have equipped
  pennySprite = kontra.sprite({ animations: animations["penny"].animations, x: 100, y: 90 })
  gameScreen['coins'] = []
  gameScreen['coins'].push(pennySprite)
  //draw yellow rectangle charging bar by the coin, or under (in background)
  
  // gameScreen['characters'][gameScreen['characters'].length -1].update();
  // gameScreen.prepare();
}