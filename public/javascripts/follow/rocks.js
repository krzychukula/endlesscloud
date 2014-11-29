
var rocksGroup = function(game, count) {
    var rocks = game.add.group();

    count = count || 10;

    for (var i = 0; i < count; i++ ){

      var speedX = rand();
      var speedY = rand();

      var rock = new Rock(game,
        Math.random() * this.game.width,
        Math.random() * this.game.height,
        speedX,
        speedY
        );

      rocks.add(rock)
      //rocks.create(360 + Math.random() * 200, 120 + Math.random() * 200,'rock');
    }

    return rocks;

};

function rand(){
  var base = Math.random() - 0.5;
  var min = 0.2;
  if(Math.abs(base) < min){
    base = base > 0 ? min : -min;
  }
  return base * 200;
}
