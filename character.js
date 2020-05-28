class Character {
    constructor(name, str, dex, inte, physicalAtt, magicAtt, physicalDef, magicDef, evasion, critical, speed, maxHp, manaShield){
        this.name = name;
        this.accumulatedLevel = 1;
        this.jobLevel = 1;
        this.maxExp = 100;
        this.currentExp = 0;
        this.gold = 0;
        this.maxStamina = 100;
        this.currentStamina = 100;
        this.str = str;
        this.dex = dex;
        this.inte = inte;
        this.statPoint = 0;
        this.physicalAtt = physicalAtt;
        this.magicAtt = magicAtt;
        this.physicalDef = physicalDef;
        this.magicDef = magicDef;
        this.evasion = evasion;
        this.critical = critical;
        this.speed = speed;
        this.maxHp = maxHp;
        this.currentHp = maxHp;
        this.maxManaShield = manaShield;
        this.currentManaShield = manaShield;
        //this.jobs = [];
        //this.equiment = [];

        this.statPoint = 0;

        this.isDead = false;
    }
    get isDead(){
        return this._isDead;
    }
    set isDead(value){
        this._isDead = value;
    }
    get statPoint(){
        return this._statPoint;
    }
    set statPoint(value){
        this._statPoint = value;
    }
    get manaShield(){
        return this._manaShield;
    }
    set manaShield(value){
        this._manaShield = value;
    }
    get currentHp(){
        return this._currentHp;
    }
    set currentHp(value){
        this._currentHp = value;
    }
    get maxHp(){
        return this._maxHp;
    }
    set maxHp(value){
        this._maxHp = value;
    }
    get speed(){
        return this._speed;
    }
    set speed(value){
        this._speed = value;
    }
    get critical(){
        return this._critical;
    }
    set critical(value){
        this._critical = value;
    }
    get evasion(){
        return this._evasion;
    }
    set evasion(value){
        this._evasion = value;
    }
    get magicDef(){
        return this._magicDef;
    }
    set magicDef(value){
        this._magicDef = value;
    }

    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get accumulatedLevel(){
        return this._accumulatedLevel;
    }
    set accumulatedLevel(value){
        this._accumulatedLevel = value;
    }
    get jobLevel(){
        return this._jobLevel;
    }
    set jobLevel(value){
        this._jobLevel = value;
    }
    get maxExp(){
        return this._maxExp;
    }
    set maxExp(value){
        this._maxExp = value;
    }
    get currentExp(){
        return this._currentExp;
    }
    set currentExp(value){
        this._currentExp = value;
    }
    get gold(){
        return this._gold;
    }
    set gold(value){
        this._gold = value;
    }
    get maxStamina(){
        return this._maxStamina;
    }
    set maxStamina(value){
        this._maxStamina = value;
    }
    get currentStamina(){
        return this._currentStamina;
    }
    set currentStamina(value){
        this._currentStamina = value;
    }

    get str(){
        return this._str;
    }
    set str(value){
        this._str = value;
    }

    get dex(){
        return this._dex;
    }
    set dex(value){
        this._dex = value;
    }

    get inte(){
        return this._inte;
    }
    set inte(value){
        this._inte = value;
    }

    get statPoint(){
        return this._statPoint;
    }
    set statPoint(value){
        this._statPoint = value;
    }

    get physicalAtt(){
        return this._physicalAtt;
    }
    set physicalAtt(value){
        this._physicalAtt = value;
    }
    get magicAtt(){
        return this._magicAtt;
    }
    set magicAtt(value){
        this._magicAtt = value;
    }
    get physicalDef(){
        return this._physicalDef;
    }
    set physicalDef(value){
        this._physicalDef = value;
    }
}