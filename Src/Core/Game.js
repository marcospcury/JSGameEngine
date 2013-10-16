var Game = Class.create({
  init: function(canvasElementId, gameWidth, gameHeight) {
    this.context = document.getElementById(canvasElementId).getContext("2d");
    this.width = gameWidth;
    this.height = gameHeight;
    this.gameElements = [];
  },
  start: function(fps) {
    this.gameLoop = setInterval(this.loop(this), 1000 / fps);
    window.addEventListener('keydown', this.keyDownEvent(), true);
  },
  stop: function() {
    clearInterval(this.gameLoop);
  },
  loop: function(ref) {
    var loopFunc = function() {
      ref.update();
      ref.draw();
    };
    return loopFunc;
  },
  keyDownEvent: function() {
    var game = this;
    var eventFunc = function(evt) {
      game.onKeyDown(evt, game);
    }
    return eventFunc;
  },
  onKeyDown: function(evt, game) {},
  update: function() {},
  drawBackground: function() {},
  draw: function() {
    this.drawBackground();
    this.drawElements();
  },
  createElement: function(gameElement) {
    this.gameElements.push(gameElement);
  },
  drawElements: function() {
    for(var element in this.gameElements) {
      this.gameElements[element].draw();
    }
  },
  getElement: function(elementName) {
    for(var element in this.gameElements) {
      if(this.gameElements[element].id === elementName) {
        return this.gameElements[element];
      }
    }
    return undefined;
  },
  destroyElement: function(elementName) {
    for(var element in this.gameElements) {
      if(this.gameElements[element].id === elementName) {
        this.gameElements.splice(element, 1);
      }
    }
  }
});
