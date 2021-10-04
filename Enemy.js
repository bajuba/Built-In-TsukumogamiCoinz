//TODO: add charge bar for enemy attack
class Enemy {
  constructor(input) {
    this.name = input.name;
    this.hp = input.hp;
    this.sprite = kontra.sprite({
      x: 1320,
      y: 300,
      animations: animations[input.name].animations
    })
  }

  //returns sprite for health
  drawHealth() {
    if (this.hp > 0) {
      return writeText("HP: " + this.hp, {
        x: (this.sprite.x + 20),
        y: (this.sprite.y - 60)
      })
    }
    else {
      return writeText(" ", {
        x: (this.sprite.x + 20),
        y: (this.sprite.y - 60)
      })
    }
  }
  //returns sprite for hp background
  drawHealthBar() {
    //TODO make it pretty
  }

  takeDamage(num) {
    this.hp = this.hp - num;
    //return this.drawHealth()
  }

  move(dx,dy){
    this.sprite.x+=dx;
    this.sprite.y+=dy;
  }

  update(){
    this.sprite.update();
    let x = this.drawHealth()
          x.forEach(function (elem) { elem.update(); })
  }
  render(){
    this.sprite.render();
    let x = this.drawHealth()
          x.forEach(function (elem) { elem.render(); })
  }
}
function loadEnemies() {
  var enemies = {
    mugger:
    {
      name: "mugger",
      hp: 1,
      sprite: {
        sprite: animations["mugger"].sprite,
        position: { x: 1320, y: 300 }
      }
    }
  }
  return enemies;
}