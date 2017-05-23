function HealBar(_healBarSettings) {
    try {
        this.setPosX(_healBarSettings.posX);
        this.setPosY(_healBarSettings.posY);
        this.setWidth(_healBarSettings.width);//bigger than 0
        this.setHeight(_healBarSettings.height);//bigger than 0
        this.setContext(_healBarSettings.context);
        this.setBackground(_healBarSettings.background);
        if (_scenary.limits)
            this.setLimits(_healBarSettings.limits); 
    } catch (e) {
        throw (e);
    }
}