function Scenary(_scenary) {
    try {
        this.setPosX(_scenary.posX);
        this.setPosY(_scenary.posY);
        this.setWidth(_scenary.width);//bigger than 0
        this.setHeight(_scenary.height);//bigger than 0
        this.setContext(_scenary.context);
        this.setBackground(_scenary.background);
        if (_scenary.limits)
            this.setLimits(_scenary.limits);
    } catch (e) {
        throw (e);
    }
}

Scenary.prototype.setPosX = function (value = 0) {
    this.posX = value;
};

Scenary.prototype.setPosY = function (value = 0) {
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