(function(window){
  window.Renderer = Renderer;

  function Renderer(canvas, game){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.webkitImageSmoothingEnabled = true;

    initResizer(canvas, game.aspectRatio);
  }
  Renderer.prototype.clear = function(entities) {
    var rend = this;

    this.canvas.width = this.canvas.width;

    entities.forEach(function(entity){
      rend['clear_'+entity.type](entity);
    });
  };
  Renderer.prototype.draw = function(entities) {
    var rend = this;
    entities.forEach(function(entity){
      rend['draw_'+entity.type](entity);
    })
  };

  Renderer.prototype.draw_box = function(box) {
    var ctx = this.ctx;
    ctx.save();
    ctx.translate(box.x, box.y);
    ctx.rotate(box.angle);
    ctx.beginPath();
    // draw some content
    ctx.lineWidth= box.lineWidth;
    ctx.fillStyle="blue";
    ctx.strokeStyle="red";
    ctx.rect(0, 0, box.width, box.height);
    ctx.fill();
    //ctx.stroke();
    ctx.font="14px Verdana";
    ctx.fillStyle="white";
    ctx.fillText(box.text + ' x:' + box.x + ' y:' + box.y , 15, 25);

    ctx.restore();
  };

  Renderer.prototype.clear_box = function(box) {
    var start = box.lineWidth;
    var end = start * 2;

    var ctx = this.ctx;
    ctx.save();
    ctx.translate(box.x, box.y);
    ctx.rotate(box.angle);

    ctx.clearRect(-start, -start, (box.width+end), (box.height+end));

    ctx.restore();
  };

})(this);