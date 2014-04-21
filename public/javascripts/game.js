console.log('game')

document.addEventListener('DOMContentLoaded', function(){

  var canvas = document.getElementById("game");


  var game = {
    aspectRatio: 4/3,
    entities: [ new Box("mouse"), new Box("follow") ],
    time: 0,
    timeDiff: 0,
    mouse: new Mouse(canvas),
    friction: 0.9
  }

  function update(entity, target, timeDiff) {

    var dx = entity.x - target.x;
    var dy = entity.y - target.y;

    var angle = Math.atan2(dy, dx);

    entity.vx = Math.cos(angle) * entity.speed// * timeDiff;
    entity.vy = Math.sin(angle) * entity.speed// * timeDiff;

    //entity.angle = angle;
    entity.x += entity.vx * game.friction;
    entity.y += entity.vy * game.friction;

  };

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
      update(entity, game.mouse, game.timeDiff);
      //checkWorld(entity);
    });
    game.entities[0].x = game.mouse.x;
    game.entities[0].y = game.mouse.y;

    renderer.draw(game.entities);
  }
  requestAnimationFrame(loop);



})
