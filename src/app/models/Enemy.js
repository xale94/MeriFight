function Enemy(_enemy) {
    EvilNpc.call(this, _enemy);
}

Enemy.prototype = Object.create(EvilNpc.prototype);

Enemy.prototype.start = function () {
    this.healBar = new HealBar(this);
    this.isDead = false;
    this.figure = Crafty.e(this.reference + ', 2D, Canvas, Gravity, Collision, ' + this.animation + ', SpriteAnimation, WiredHitBox')
        .attr({
            x: this.posX,
            y: this.posY,
            w: this.width,
            h: this.height
        })
        .debugStroke("green")
        .gravity('Floor')
        .collision([30, 44, 38, 30, 38, 20, 30, 20, 33, 12, 15, 12, 9, 12, 12, 20, 6, 20, 6, 30, 15, 40])
        .reel('running', 500, [
            [0, 0],
            [0, 1],
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
        }).bind("EnterFrame", () => {
            if (ch.figure.x < this.figure.x)
                this.figure.x -= 1;
            else
                this.figure.x += 1;
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