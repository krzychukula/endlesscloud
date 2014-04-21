(function(window){
  window.Box = Box;

  function Box (text) {
    this.type = 'box';
    this.text = text;
    this.x = 50;
    this.y = 50;
    this.vx = 0;
    this.vy = 0;
    this.width = 150;
    this.height = 50;
    this.lineWidth = 3;
    this.speed = -3;
    this.angle = 0;
    this.treshold = 1;
  }

})(this);
