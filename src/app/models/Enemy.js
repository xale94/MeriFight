function Enemy(_enemy) {
    EvilNpc.call(this, _enemy);
}

Enemy.prototype = Object.create(EvilNpc.prototype);