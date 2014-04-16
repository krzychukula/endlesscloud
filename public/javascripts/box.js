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
    this.speed = -0.03;
    this.angle = 0;
    this.treshold = 1;
  }

  Box.prototype.update = function(timeDiff, target) {

    var dx = target.x - this.x;
    var dy = target.y - this.y;

    if(Math.abs(dx)> this.treshold && Math.abs(dy) > this.treshold){


      var angle = Math.atan2(dy, dx);

      var vx = Math.cos(angle) * this.speed;
      var vy = Math.sin(angle) * this.speed;

      this.angle = angle;
      this.x += vx * timeDiff;
      this.y += vy * timeDiff;

    }
  };
})(this);