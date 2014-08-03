
var GameState = function(game) {
};

// Load images and sounds
GameState.prototype.preload = function() {
    this.game.load.image('player', 'assets/gfx/player.png');
    this.game.load.image('rock', 'assets/gfx/rock.png');
};

// Setup the example
GameState.prototype.create = function() {
    // Set stage background color
    this.game.stage.backgroundColor = 0x4488cc;

    this.player = new Follower(this.game, this.game.width/2, this.game.height/2, this.game.input)
    this.game.add.existing(this.player);

    // Simulate a pointer click/tap input at the center of the stage
    // when the example begins running.
    this.game.input.x = this.game.width/2;
    this.game.input.y = this.game.height/2;

    this.rock = new Rock(this.game, 0, 0);
    this.game.add.existing(this.rock);



    // Show FPS
    this.game.time.advancedTiming = true;
    this.fpsText = this.game.add.text(
        20, 20, '', { font: '16px Arial', fill: '#ffffff' }
    );
};

// The update() method is called every frame
GameState.prototype.update = function() {
    if (this.game.time.fps !== 0) {
        this.fpsText.setText(this.game.time.fps + ' FPS x:'+game.input.x+' y:'+game.input.y);
    }
};