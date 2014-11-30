
var rocksGroup = function(game, count) {
    var rocks = game.add.group();

    count = count || 10;

    for (var i = 0; i < count; i++ ){

      addRock();
      //rocks.create(360 + Math.random() * 200, 120 + Math.random() * 200,'rock');
    }

    game.time.events.loop(Phaser.Timer.SECOND, addRock);

    function addRock(){
      var speedX = rand();
      var speedY = rand();
      var x = Math.random() * this.game.width;
      var y = Math.random() * this.game.height;

      if(Math.random() > 0.5){
        if(Math.random() > 0.5){
          x = 0;
        }else{
          x = this.game.width;
        }
      }else{
        if(Math.random() > 0.5){
          y = 0;
        }else{
          y = this.game.height;
        }
      }

      var rock = new Rock(game,
        x,
        y,
        speedX,
        speedY
        );

      rocks.add(rock)
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
