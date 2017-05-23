function Scenary(scenary) {
    let _scenary = scenary;
    try {
        this.setPosX(_scenary.posX) || 0;
        this.setPosY(_scenary.posY) || 0;
        this.setWidth(_scenary.width);
        this.setHeight(_scenary.height);
        this.setContext(_scenary.context);
        this.setBackground(_scenary.background);
        if (_scenary.limits)
            this.setLimits(_scenary.limits);
    } catch (e) {
        throw (e);
    }
}

Scenary.prototype.setPosX = function (value) {
    this.posX = value;
};

Scenary.prototype.setPosY = function (value) {
    this.posY = value;
};

Scenary.prototype.setWidth = function (value) {
    this.width = value;
};

Scenary.prototype.setHeight = function (value) {
    this.height = value;
};

Scenary.prototype.setContext = function (value) {
    this.context = value;
};

Scenary.prototype.setBackground = function (value) {
    this.background = value;
};
Scenary.prototype.setLimits = function (value) {
    this.limitTop = value;
    this.limitLeft = value;
    this.limitRight = value;
};

Scenary.prototype.createLimits = function () {
    this.limitTop = Crafty.e('LimitTop, 2D, DOM, Collision').attr({
        x: this.posX,
        y: this.posY,
        w: this.width,
        h: 1
    });
    this.limitLeft = Crafty.e('limitLeft, 2D, DOM, Collision').attr({
        x: this.posX,
        y: this.posY,
        w: 1,
        h: this.height
    });
    this.limitRight = Crafty.e('limitRight, 2D, DOM, Collision').attr({
        x: this.posX + this.width, ///¿This.width?
        y: this.posY,
        w: 1,
        h: this.height
    });
};

Scenary.prototype.start = function () {
    Crafty.init(this.width, this.height, this.context);
    this.createLimits();
};