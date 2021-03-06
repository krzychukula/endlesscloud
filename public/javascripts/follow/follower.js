
// Follower constructor
var Follower = function(game, x, y, target) {
    Phaser.Sprite.call(this, game, x, y, 'player');

    // Save the target that this Follower will follow
    // The target is any object with x and y properties
    this.target = target;

    // Set the pivot point for this sprite to the center
    this.anchor.setTo(0.5, 0.5);

    // Enable physics on this object
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    // Make player collide with world boundaries so he doesn't leave the stage
    this.body.collideWorldBounds = true;

    // Define constants that affect motion
    this.MAX_SPEED = 250; // pixels/second
    this.MIN_DISTANCE = 32; // pixels
};

// Followers are a type of Phaser.Sprite
Follower.prototype = Object.create(Phaser.Sprite.prototype);
Follower.prototype.constructor = Follower;

Follower.prototype.update = function() {
    // Calculate distance to target
    var distance = this.game.math.distance(this.x, this.y, this.target.x, this.target.y);

    // If the distance > MIN_DISTANCE then move
    if (distance > this.MIN_DISTANCE) {
        var dx =this.target.worldX - this.x;
        var dy =this.target.worldY - this.y;
        this.rotation = Math.atan2(dy, dx) + this.game.math.degToRad(90);
        //this.angle = this.game.math.angleBetween(this.x, this.y, this.target.x, this.target.y) * 180 / Math.PI;

        this.game.physics.arcade.moveToPointer(this, this.MAX_SPEED);

    } else {
      //this.body.velocity.subtract(1, 1).clamp(0, this.MAX_SPEED);
        this.body.velocity.setTo(0, 0);
    }
};
