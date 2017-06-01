function Boss(_boss) {
    EvilNpc.call(this, _boss);
}

Boss.prototype = Object.create(EvilNpc.prototype);