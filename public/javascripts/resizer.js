
(function(window){
  window.initResizer = function initResizer(canvas, aspectRatio){
    function resize(){
      var w = window.innerWidth;
      var h = window.innerHeight;
      if(w/h >= aspectRatio){
        w = Math.min(h * aspectRatio, w);
      }else {
        h = Math.min(w / aspectRatio, h);
      }
      canvas.width = w;
      canvas.height = h;
    }
    resize();
    window.addEventListener('resize', resize);
  }
})(this)