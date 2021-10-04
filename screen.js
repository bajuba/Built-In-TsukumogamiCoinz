//TODO: DRY coding needs work, try for..in loop
/*
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
}

console.log(string1);
// expected output: "123"
*/
function setupGameScreen() {
  gameScreen = {
    "background": [],
    "characters": [],
    "battleUI": [],
    "coins": [],
    "status": [],
    "resultsUI": [],
    "textbox": [],
    "transition": [],
    "prepare": function () {
      this["background"].forEach(function (element) {
        element.dx = 0
        element.dy = 0
        element.ddx = 0
        element.ddy = 0
        element.update = function () {
          this.position.x += this.dx
          this.position.y += this.dy
          this.dx += this.ddx;
          this.dy += this.ddy;
        }
      })
      this["characters"].forEach(function (element) {
        element.dx = 0
        element.dy = 0
        element.ddx = 0
        element.ddy = 0
        element.update = function () {
          this.position.x += this.dx
          this.position.y += this.dy
          this.dx += this.ddx;
          this.dy += this.ddy;
        }
      })
      this["battleUI"].forEach(function (element) {
        element.dx = 0
        element.dy = 0
        element.ddx = 0
        element.ddy = 0
        element.update = function () {
          this.position.x += this.dx
          this.position.y += this.dy
          this.dx += this.ddx;
          this.dy += this.ddy;
        }
      })
      this["coins"].forEach(function (element) {
        element.dx = 0
        element.dy = 0
        element.ddx = 0
        element.ddy = 0
        element.update = function () {
          this.position.x += this.dx
          this.position.y += this.dy
          this.dx += this.ddx;
          this.dy += this.ddy;
        }
      })
      this["status"].forEach(function (element) {
        element.dx = 0
        element.dy = 0
        element.ddx = 0
        element.ddy = 0
        element.update = function () {
          this.position.x += this.dx
          this.position.y += this.dy
          this.dx += this.ddx;
          this.dy += this.ddy;
        }
      })
      this["resultsUI"].forEach(function (element) {
        element.dx = 0
        element.dy = 0
        element.ddx = 0
        element.ddy = 0
        element.update = function () {
          this.position.x += this.dx
          this.position.y += this.dy
          this.dx += this.ddx;
          this.dy += this.ddy;
        }
      })
      this["textbox"].forEach(function (element) {
        element.dx = 0
        element.dy = 0
        element.ddx = 0
        element.ddy = 0
        element.update = function () {
          this.position.x += this.dx
          this.position.y += this.dy
          this.dx += this.ddx;
          this.dy += this.ddy;
        }
      })

    },
    "render": function () {
      this["background"].forEach(function (element) {
        element.render();
      })
      this["characters"].forEach(function (element) {
        element.render();
        //element.sprite.render({element:x,element:y});
      })
      this["battleUI"].forEach(function (element) {
        element.render();
      })
      this["coins"].forEach(function (element) {
        element.render();
      })
      this["status"].forEach(function (element) {
        element.render();
      })
      this["resultsUI"].forEach(function (element) {
        element.render();
      })
      this["textbox"].forEach(function (element) {
        element.render();
      })
      this["transition"].forEach(function (element) {
        element.render();
      })
    },//end render method
    "update": function () {
      this["background"].forEach(function (element) {
        element.update();
      })
      this["characters"].forEach(function (element) {
        // if (element.color) { console.log(element); }
        element.update();
      })
      this["battleUI"].forEach(function (element) {
        element.update();
      })
      this["coins"].forEach(function (element) {
        element.update();
      })
      this["status"].forEach(function (element) {
        element.update();
      })
      this["resultsUI"].forEach(function (element) {
        element.update();
      })
      this["textbox"].forEach(function (element) {
        element.update();
      })
      this["transition"].forEach(function (element) {
        element.update();
      })
    },//end update method
    "clear": function () {
      this["background"] = [];
      this["characters"] = [];
      this["battleUI"] = [];
      this["coins"] = [];
      this["resultsUI"] = [];
      this["textbox"] = [];
      this["transition"] = [];
    },//end clear method
    "swipeOutTransition": function () {
      this["transition"] = []
      this["transition"].push(kontra.sprite({
        x: 800,
        y: 0,
        height: 200,
        width: 24000,
        ddx: -2.2,
        color: '#444444'
      }))
      this["transition"].push(kontra.sprite({
        x: 1200,
        y: 200,
        height: 200,
        width: 24000,
        ddx: -2.1,
        color: '#555555'
      }))
      this["transition"].push(kontra.sprite({
        x: 1600,
        y: 400,
        height: 200,
        width: 24000,
        ddx: -2,
        color: '#666666'
      }))
    },//end out trans method
    "swipeInTransition": function () {
      this["transition"] = []
      this["transition"].push(kontra.sprite({
        x: 0,
        y: 0,
        height: 200,
        width: 240000,
        ddx: 2.2,
        color: '#444444'
      }))
      this["transition"].push(kontra.sprite({
        x: -400,
        y: 200,
        height: 200,
        width: 240000,
        ddx: 2.1,
        color: '#555555'
      }))
      this["transition"].push(kontra.sprite(
        {
          x: -800,
          y: 400,
          height: 200,
          width: 240000,
          ddx: 2,
          color: '#666666'
        }))
    }
  }
}