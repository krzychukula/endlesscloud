console.log('game')

document.addEventListener('DOMContentLoaded', function(){

  var canvas = document.getElementById("game");


  var game = {
    aspectRatio: 4/3,
    entities: [ new Box("Resize Me") ],
    time: 0,
    timeDiff: 0,
    mouse: new Mouse(canvas)
  }

  function checkWorld (entity) {
    if(entity.x < 0){
      entity.x = 0;
      entity.vx *= -1;
    }else if(entity.x + entity.width > canvas.width){
      entity.x = canvas.width - entity.width;
      entity.vx *= -1;
    }
    if(entity.y < 0){
      entity.y = 0;
      entity.vy *= -1;
    }else if(entity.y + entity.height > canvas.height){
      entity.y = canvas.height - entity.height;
      entity.vy *= -1;
    }
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
      entity.update(game.timeDiff, game.mouse);
      checkWorld(entity)
    });

    renderer.draw(game.entities);
  }
  requestAnimationFrame(loop);



})