var Pad = GameElement.extend({
  init: function(game, opt){
    this._super(game, {
      width: 20,
      height: 90,
      x: opt.x,
      y: opt.y,
      id: opt.id
    });
  },
  draw: function() {
    this.context.beginPath();
    this.context.fillStyle = "white";
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.closePath();
    this.context.fill();
  },
  onEdgeCollision: function(evt) {
  }
});

var Pong = Game.extend({
  init: function() {
    this._super('game-container', 640, 480);
    this.createElement(new Pad(this, { id:'leftPad', x:1, y:1 }));
    this.createElement(new Pad(this, { id:'rightPad', x:619, y:1 }));
  },
  drawBackground: function() {
    this.context.beginPath();
    this.context.fillStyle = "black";
    this.context.rect(0, 0, this.width, this.height);
    this.context.closePath();
    this.context.fill();
  },
  collisions: {
    'leftPad': 'ball'
  },
  onCollision: function(evt) {
  },
  onKeyDown: function(evt, game) {
    switch (evt.keyCode) {
      case 40: 
        game.getElement('rightPad').move('down', 5);
        break;

      case 38: 
        game.getElement('rightPad').move('up', 5);
        break;
    }
  }
});
