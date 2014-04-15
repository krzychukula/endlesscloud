console.log('game')

document.addEventListener('DOMContentLoaded', function(){

  var canvas = document.getElementById("game");


  var game = {
    aspectRatio: 4/3,
    entities: [ new Box("Resize Me") ],
    time: 0,
    timeDiff: 0
  }


  var renderer = new Renderer(canvas, game);

  function loop (currentTime) {
    requestAnimationFrame(loop);

    if(!game.time){
      game.time = currentTime;
    }
    game.timeDiff = game.time - currentTime;

    renderer.clear(game.entities);

    game.entities.forEach(function(entity){
      entity.update(game.timeDiff);
    });

    renderer.draw(game.entities);
  }
  requestAnimationFrame(loop);



})