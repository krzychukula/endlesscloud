(function(window){
  window.Box = Box;

  function Box (text) {
    this.type = 'box';
    this.text = text;
    this.x = 50;
    this.y = 50;
    this.vx = 0;
    this.vy = 0;
    this.width = 100;
    this.height = 50;
    this.lineWidth = 3;
    this.speed = -0.03;
    this.angle = 0;
    this.treshold = 1;
  }

})(this);
