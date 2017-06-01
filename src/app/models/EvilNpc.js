function EvilNpc(_evilNpc) {
    Npc.call(this, _evilNpc);
}

EvilNpc.prototype = Object.create(Npc.prototype);