function Player(_player) {
    Character.call(this, _player);
}

Player.prototype = Object.create(Character.prototype);

Player.prototype.start = function () {
    this.healBar = new HealBar(this);
    this.isDead = false;
    this.figure = Crafty.e(this.reference + ', 2D, Canvas, Twoway, Gravity, Collision, balotelliRun, SpriteAnimation')
        .attr({
            x: this.posX,
            y: this.posY,
            w: this.width,
            h: this.height
        })
        .twoway(this.speed, this.speedJump)
        .gravity('Floor')
        .collision()
        .reel('running', 500, [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0]
        ]) // setup animation
        .animate('running', -1).bind('KeyDown', (e) => {
            // Default movement booleans to false
            this.move.right = this.move.left = this.move.down = this.move.up = false;
            // If keys are down, set the direction
            if (e.key == Crafty.keys.RIGHT_ARROW || e.key == Crafty.keys.D) {
                this.move.right = true;
            }
            if (e.key == Crafty.keys.LEFT_ARROW || e.key == Crafty.keys.A) {
                this.move.left = true;
            }
            if (e.keyCode === Crafty.keys.UA) this.move.up = true;
            if (e.keyCode === Crafty.keys.DA) this.move.down = true;
        })
        .bind('Moved', (from) => {
            this.posX = this.figure.x;
            this.posY = this.figure.y;
            this.healBar.maxHealth.x = this.figure.x - this.figure.w / 2;
            this.healBar.maxHealth.y = this.figure.y - this.figure.h + 30;
            this.healBar.health.x = this.healBar.maxHealth.x + 2;
            this.healBar.health.y = this.healBar.maxHealth.y + 2;
            this.healBar.damage.x = this.healBar.maxHealth.x + 2;
            this.healBar.damage.y = this.healBar.maxHealth.y + 2;
            if (this.figure.hit("limitLeft")) {
                this.figure.attr({
                    x: 1,
                    y: this.figure.y
                });
                this.figure.flip("X");
            }
            if (this.figure.hit("limitRight")) {
                this.figure.attr({
                    x: 719,
                    y: this.figure.y
                });
                this.figure.unflip("X");
            }
            if (this.figure.hit("LimitTop")) {
                this.figure.attr({
                    x: this.figure.x,
                    y: -1
                });
            }
            if (this.move.right) {
                this.figure.unflip("X");
            }
            if (this.move.left) {
                this.figure.flip("X");
            }
        });
};