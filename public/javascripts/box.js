(function(window){
  window.Box = Box;

  function Box (text) {
    this.type = 'box';
    this.text = text;
    this.x = 50;
    this.y = 50;
    this.width = 100;
    this.height = 50;
    this.lineWidth = 3;
    this.vx = -0.00005;
    this.vy = -0.00005;
  }

  Box.prototype.update = function(timeDiff) {
    this.x += this.vx * timeDiff;
    this.y += this.vy * timeDiff;
  };
})(this);