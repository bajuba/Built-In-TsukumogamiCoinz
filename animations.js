var animations = {};
var assets = ['mugger.png', 'penny.png', 'protagonist.png', 'longstreet.png', 'caps.png', 'bigsyms.png', 'numsyms.png', 'battleui.png', 'textbox.png', 'muggerportrait.png', 'protagonistportrait.png', 'cursor.png', 'bitcoinzlogo.png', 'beekeepers.png', 'rollingcoin.png'];

function createAnimations() {
  animations["bitcoinzlogo"] = kontra.spriteSheet({
    image: kontra.assets.images.bitcoinzlogo,
    frameWidth: 600,
    frameHeight: 200,
    animations: {
      idle: { frames: 0 },
      flash: {
        frames: "0..1",
        frameRate: 0.5
      }
    }
  });
  animations["battleui"] = kontra.spriteSheet({
    image: kontra.assets.images.battleui,
    frameWidth: 800,
    frameHeight: 600,
    animations: {
      idle: { frames: 0 }
    }

  });
  animations["rollingcoin"] = kontra.spriteSheet({
    image: kontra.assets.images.rollingcoin,
    frameWidth: 24,
    frameHeight: 24,
    animations: {
      idle: { frames: 0 },
      roll: {
        frames: "0..3",
        frameRate: 2
      }
    }
  });
  animations['beekeepers'] = kontra.spriteSheet({
    image: kontra.assets.images.beekeepers,
    frameWidth: 132,
    frameHeight: 78,
    animations: {
      idle: {
        frames: "0..1",
        frameRate: 2
      }
    }
  });
  animations["cursor"] = kontra.spriteSheet({
    image: kontra.assets.images.cursor,
    frameWidth: 32,
    frameHeight: 32,
    animations: {
      idle: { frames: 0 },
      wink: {
        frames: "0..1",
        frameRate: 1
      }
    }
  });
  animations["protagonistportrait"] = kontra.spriteSheet({
    image: kontra.assets.images.protagonistportrait,
    frameWidth: 146,
    frameHeight: 223,
    animations: {
      portrait: { frames: 0 }
    }
  });

  animations["muggerportrait"] = kontra.spriteSheet({
    image: kontra.assets.images.muggerportrait,
    frameWidth: 146,
    frameHeight: 223,
    animations: {
      portrait: { frames: 0 }
    }
  });

  animations["textbox"] = kontra.spriteSheet({
    image: kontra.assets.images.textbox,
    frameWidth: 800,
    frameHeight: 600,
    animations: {
      twoconv: { frames: 0 }
    }
  });


  animations["syms"] = kontra.spriteSheet({
    image: kontra.assets.images.bigsyms,
    frameWidth: fontsize,
    frameHeight: 23,//these are taller, fix it in post
    animations: {
      '$': { frames: 0 },
      '[': { frames: 1 },
      ']': { frames: 2 },
      '(': { frames: 3 },
      ')': { frames: 4 },
      '`': { frames: 5 },
      '/': { frames: 6 },
      '\\': { frames: 7 },
      '{': { frames: 8 },
      '}': { frames: 9 },
      '|': { frames: 10 }
    }
  });

  animations["nums"] = kontra.spriteSheet({
    image: kontra.assets.images.numsyms,
    frameWidth: fontsize,
    frameHeight: fontsize,
    animations: {
      0: { frames: 0 },
      1: { frames: 1 },
      2: { frames: 2 },
      3: { frames: 3 },
      4: { frames: 4 },
      5: { frames: 5 },
      6: { frames: 6 },
      7: { frames: 7 },
      8: { frames: 8 },
      9: { frames: 9 },
      '.': { frames: 10 },
      '*': { frames: 11 },
      'l"': { frames: 12 },
      'r"': { frames: 13 },
      '?': { frames: 14 },
      '#': { frames: 15 },
      '%': { frames: 16 },
      '=': { frames: 17 },
      '+': { frames: 18 },
      '-': { frames: 19 },
      '!': { frames: 20 },
      ':': { frames: 21 },
      ';': { frames: 22 },
      '@': { frames: 23 },
      '>': { frames: 24 },
      '~': { frames: 25 },
      '<': { frames: 26 },
      '^': { frames: 27 }
    }
  });

  animations["caps"] = kontra.spriteSheet({
    image: kontra.assets.images.caps,
    frameWidth: fontsize,
    frameHeight: fontsize,
    animations: {
      a: { frames: 0 },
      b: { frames: 1 },
      c: { frames: 2 },
      d: { frames: 3 },
      e: { frames: 4 },
      f: { frames: 5 },
      g: { frames: 6 },
      h: { frames: 7 },
      i: { frames: 8 },
      j: { frames: 9 },
      k: { frames: 10 },
      l: { frames: 11 },
      m: { frames: 12 },
      n: { frames: 13 },
      o: { frames: 14 },
      p: { frames: 15 },
      q: { frames: 16 },
      r: { frames: 17 },
      s: { frames: 18 },
      t: { frames: 19 },
      u: { frames: 20 },
      v: { frames: 21 },
      w: { frames: 22 },
      x: { frames: 23 },
      y: { frames: 24 },
      z: { frames: 25 },
      space: { frames: 26 },
      alphabet: {
        frames: '0..24',
        frameRate: 1
      }
    }
  });

  animations["longstreet"] = kontra.spriteSheet({
    image: kontra.assets.images.longstreet,
    frameWidth: 800,
    frameHeight: 600,
    animations: {
      0: { frames: 0 },
      1: { frames: 1 },
      2: { frames: 2 },
      3: { frames: 3 },
      4: { frames: 4 },
      5: { frames: 5 }
    }
  });

  animations["penny"] = kontra.spriteSheet({
    image: kontra.assets.images.penny,
    frameWidth: 64,
    frameHeight: 64,
    animations: {
      idle: { frames: 1 },
      flip: {
        frames: '0..33',
        frameRate: 30
      },
      heads: { frames: 0 },
      tails: { frames: 18 }
    }
  });




  animations["protagonist"] = kontra.spriteSheet({
    image: kontra.assets.images.protagonist,
    frameWidth: 96,
    frameHeight: 192,

    // this will also call createAnimations()
    animations: {
      // create 1 animation: idle
      idle: {
        frames: ['0..1'],  // single frame
        frameRate: 2
      },
      flip: {
        frames: ['4..15', 15, 15],  // you can also mix and match, in this case frames [8,9,10,13,10,9,8]
        frameRate: 10,
        loop: false
        // don't loop the animation
      },
      portrait: {
        frames: 1
      }
    }
  });



  animations["mugger"] = kontra.spriteSheet({
    image: kontra.assets.images.mugger,
    frameWidth: 128,
    frameHeight: 256,

    // this will also call createAnimations()
    animations: {
      // create 1 animation: idle
      idle: {
        frames: [0, 1, 2, 3],  // single frame
        frameRate: 2,
      },
      flip: {
        frames: [2, '4..18', 2],  // you can also mix and match, in this case frames [8,9,10,13,10,9,8]
        frameRate: 10,
        // don't loop the animation
      },
      portrait: {
        frames: 1
      }
    }
  });
  //console.log(animations)
}
