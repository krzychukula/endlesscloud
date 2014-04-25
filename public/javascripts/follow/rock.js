
var Rock = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'rock');

    // Set the pivot point for this sprite to the center
    this.anchor.setTo(0.5, 0.5);

    // Enable physics on this object
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    // Define constants that affect motion
    this.MAX_SPEED = 50; // pixels/second
    this.MIN_DISTANCE = 32; // pixels

};

// Rock are a type of Phaser.Sprite
Rock.prototype = Object.create(Phaser.Sprite.prototype);
Rock.prototype.constructor = Rock;

Rock.prototype.update = function() {
    // Calculate distance to target
    this.body.velocity.setTo(this.MAX_SPEED, this.MAX_SPEED);
    // Keep the ship on the screen
    if (this.x > this.game.width) this.x = 0;
    if (this.x < 0) this.x = this.game.width;
    if (this.y > this.game.height) this.y = 0;
    if (this.y < 0) this.y = this.game.height;
};