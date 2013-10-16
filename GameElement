var GameElement = Class.create({
  init: function(game, opt) {
    this.game = game;
    this.context = game.context;
    this.width = opt.width || 10;
    this.height = opt.height || 10;
    this.x = opt.x || 0;
    this.y = opt.y || 0;
    this.id = opt.id || "";
  },
  draw: function() { },
  move: function(direction, distance) {
    switch(direction) {
      case 'up':
        this.y -= distance;
        break;

      case 'down':
        this.y += distance;
        break;

      case 'left':
        this.x -= distance;
        break;

      case 'right':
        this.x += distance;
        break;
    }
  }
});
