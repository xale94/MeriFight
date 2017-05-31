function HealBar(character) {
    try {
        this.maxHealth;
        this.damage;
        this.health;
        this.start(character);
    } catch (e) {
        throw (e);
    }
}

HealBar.prototype.start = function (character) {
    this.maxHealth = Crafty.e(character.reference+'-MaxHealth, 2D, Canvas, Color').attr({
        x: character.posX - character.width / 2,
        y: character.posY - character.width + 30,
        w: 100,
        h: 10
    }).color('black');
    this.damage = Crafty.e(character.reference+'-Damage, 2D, Canvas, Color').attr({
        x: this.maxHealth.x + 2,
        y: this.maxHealth.y + 2,
        w: 96,
        h: 6
    }).color('red');
    this.health = Crafty.e(character.reference+'-Healh, 2D, Canvas, Color').attr({
        x: this.maxHealth.x + 2,
        y: this.maxHealth.y + 2,
        w: 96,
        h: 6
    }).color('green');
};

//ENTIDAD [representacion, vida]
//---PERSONAJE[habilidades, daño, resistencia...] quitar controles
//------NPC [inteligencia]
//----------BUENO []
//----------MALO []
//-------------ENEMIGO
//-------------BOSS
//------JUGADOR [id, ]
//---ITEM