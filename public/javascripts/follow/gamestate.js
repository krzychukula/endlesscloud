
var GameState = function(game) {
};

// Load images and sounds
GameState.prototype.preload = function() {
    this.game.load.image('player', 'assets/gfx/player.png');
    this.game.load.image('rock', 'assets/gfx/rock.png');
    this.game.load.image('fire', 'assets/gfx/fire.png');
};

// Setup the example
GameState.prototype.create = function() {
    // Set stage background color
    this.game.stage.backgroundColor = 0x4488cc;
    this.game.stage.disableVisibilityChange = true;

    this.player = new Follower(this.game, this.game.width/2, this.game.height/2, this.game.input)
    this.game.add.existing(this.player);

    // Simulate a pointer click/tap input at the center of the stage
    // when the example begins running.
    this.game.input.x = this.game.width/2;
    this.game.input.y = this.game.height/2;

    this.rock = new Rock(this.game, 0, 0);
    this.game.add.existing(this.rock);

    this.rock2 = new Rock(this.game, this.game.width, this.game.height-20, -60);
    this.game.add.existing(this.rock2);

    this.emitter = game.add.emitter(0, 0, 100);

    this.emitter.makeParticles('fire');
    this.emitter.gravity = 200;
    
    // Show FPS
    this.game.time.advancedTiming = true;
    this.fpsText = this.game.add.text(
        20, 20, '', { font: '16px Arial', fill: '#ffffff' }
    );
};

// The update() method is called every frame
GameState.prototype.update = function() {
    game.physics.arcade.collide(this.rock, this.player, killPlayer, null, this);
    game.physics.arcade.collide(this.rock2, this.player, killPlayer, null, this);
    if (this.game.time.fps !== 0) {
        this.fpsText.setText(this.game.time.fps + ' FPS x:'+game.input.x+' y:'+game.input.y);
    }
};


function killPlayer(){
    this.player.kill();
    this.emitter.x = this.player.x;
    this.emitter.y = this.player.y;

    this.emitter.start(true, 1200, null, 16);
}