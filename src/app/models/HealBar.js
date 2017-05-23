function HealBar(_healBar) {
    try {
        this.setPosX(_healBar.posX);
        this.setPosY(_healBar.posY);
        this.setWidth(_healBar.width);//bigger than 0
        this.setHeight(_healBar.height);//bigger than 0
        this.setContext(_healBar.context);
        this.setBackground(_healBar.background);
        if (_scenary.limits)
            this.setLimits(_healBar.limits); 
    } catch (e) {
        throw (e);
    }
}