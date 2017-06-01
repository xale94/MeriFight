function Npc(_npc) {
    Character.call(this, _npc);
}

Npc.prototype = Object.create(Character.prototype);