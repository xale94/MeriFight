function Component(_component) {
    try {
        this.setReference(_component.reference);
        this.setPosX(_component.posX);
        this.setPosY(_component.posY);
        this.setWidth(_component.width); //bigger than 0
        this.setHeight(_component.height); //bigger than 0
        this.setColor(_component.color);
    } catch (e) {
        throw (e);
    }
}

Component.prototype.setReference = function (value) {
    this.reference = value;
};

Component.prototype.setPosX = function (value = 0) {
    this.posX = value;
};

Component.prototype.setPosY = function (value = 0) {
    this.posY = value;
};

Component.prototype.setWidth = function (value) {
    this.width = value;
};

Component.prototype.setHeight = function (value) {
    this.height = value;
};

Component.prototype.setColor = function (value) {
    this.color = value;
};