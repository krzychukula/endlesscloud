(function (window) {
  window.Mouse = Mouse;
  function Mouse (element) {
    var mouse = this;
    mouse.x = 0;
    mouse.y = 0;
    mouse.event = null;
    function updatePositionInWindow(){
      mouse.body_scrollLeft = document.body.scrollLeft,
      mouse.element_scrollLeft = document.documentElement.scrollLeft,
      mouse.body_scrollTop = document.body.scrollTop,
      mouse.element_scrollTop = document.documentElement.scrollTop,
      mouse.offsetLeft = element.offsetLeft,
      mouse.offsetTop = element.offsetTop;
    }
    updatePositionInWindow();
    window.addEventListener('resize', updatePositionInWindow, false);

    element.addEventListener('mousemove', function (event) {
      var x, y;

      if (event.pageX || event.pageY) {
        x = event.pageX;
        y = event.pageY;
      } else {
        x = event.clientX + mouse.body_scrollLeft + mouse.element_scrollLeft;
        y = event.clientY + mouse.body_scrollTop + mouse.element_scrollTop;
      }
      x -= mouse.offsetLeft;
      y -= mouse.offsetTop;

      mouse.x = x;
      mouse.y = y;
      mouse.event = event;
    }, false);

    return mouse;
  }
})(this);