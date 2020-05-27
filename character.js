class Character {
    constructor(name, lvl, exp, hp, str, vit, dex, agi){
        this.str = str;
        this.vit = vit;
        this.dex = dex;
        this.agi = agi;

        this.hp = vit * 100;
        this.maxHp = this.hp;
        this.att = str;
        this.crit = dex;
        this.eva = agi;

        this.name = name;
        this.lvl = lvl;
        this.exp = exp;
        this.lvlExp = 100;
        this.statPoint = 0;

        this.isDead = false;
    }

    get hp(){
        return this._hp;
    }
    set hp(value){
        this._hp = value;
    }
    get str(){
        return this._str;
    }
    set str(value){
        this._str = value;
        this.att = value;
    }
    get vit(){
        return this._vit;
    }
    set vit(value){
        this._vit = value;
        this.hp = value * 100;
        this.maxHp = this.hp;
    }
    get dex(){
        return this._dex;
    }
    set dex(value){
        this._dex = value;
        this.crit = value;
    }
    get agi(){
        return this._agi;
    }
    set agi(value){
        this._agi = value;
        this.eva = value;
    }
    get att(){
        return this._att;
    }
    set att(value){
        this._att = value;
    }
    get crit(){
        return this._crit;
    }
    set crit(value){
        this._crit = value;
    }
    get eva(){
        return this._eva;
    }
    set eva(value){
        this._eva = value;
    }

    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }

    get lvl(){
        return this._lvl;
    }
    set lvl(value){
        this._lvl = value;
    }

    get exp(){
        return this._exp;
    }
    set exp(value){
        this._exp = value;
    }

    get lvlExp(){
        return this._lvlExp;
    }
    set lvlExp(value){
        this._lvlExp = value;
    }

    get isDead(){
        return this._isDead;
    }
    set isDead(value){
        this._isDead = value;
    }
    get maxHp(){
        return this._maxHp;
    }
    set maxHp(value){
        this._maxHp = value;
    }
    get statPoint(){
        return this._statPoint;
    }
    set statPoint(value){
        this._statPoint = value;
    }
}