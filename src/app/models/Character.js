function Character(_character) {
    Component.call(this, _character);
    try {
        this.setMaxHealth(_character.maxHealth);
        this.setHealth(_character.health); //percentage of maxHealth (0 to 100)
        this.setDamage(_character.damage);
        this.healBar;
    } catch (e) {
        throw (e);
    }
    this.start();
}

Character.prototype = Object.create(Component.prototype);

Character.prototype.setMaxHealth = function (value) {
    this.maxHealth = value;
};

Character.prototype.setHealth = function (value = 100) {
    this.health = value;
};

Character.prototype.setDamage = function (value = 0) {
    this.damage = value;
};

Character.prototype.kill = function () {
    this.healBar.destroy();
    this.figure.destroy();
};

Character.prototype.start = function () {
    this.healBar = new HealBar(this);
    this.figure = Crafty.e(this.reference + ', 2D, Canvas, Color, Twoway, Gravity, Collision')
        .attr({
            x: 100,
            y: 100,
            w: 50,
            h: 50
        })
        .color(this.color)
        .twoway(200, 240)
        .gravity('Floor')
        .collision()
        .bind('Moved', (from) => {
            this.healBar.maxHealth.x =  this.figure.x - this.figure.w / 2;
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
            }
            if (this.figure.hit("limitRight")) {
                this.figure.attr({
                    x: 719,
                    y: this.figure.y
                });
            }
            if (this.figure.hit("LimitTop")) {
                this.figure.attr({
                    x: this.figure.x,
                    y: -1
                });
            }
        });
};