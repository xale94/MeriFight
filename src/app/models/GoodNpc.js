function GoodNpc(_goodNpc) {
    Npc.call(this, _goodNpc);
}

GoodNpc.prototype = Object.create(Npc.prototype);