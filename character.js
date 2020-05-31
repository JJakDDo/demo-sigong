class Character {
    constructor(name, str, dex, inte, physicalAtt, magicAtt, physicalDef, magicDef, evasion, critical, speed, maxHp, manaShield, exp, stamina, gold){
        this.name = name;
        this.accumulatedLevel = 1;
        this.jobLevel = 1;
        this.maxExp = 10;
        this.currentExp = exp;
        this.gold = gold;
        this.maxStamina = stamina;
        this.currentStamina = stamina;
        this.str = str;
        this.dex = dex;
        this.inte = inte;
        this.addedStr = 0;
        this.addedDex = 0;
        this.addedInte = 0;
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

        this.addedPhysicalAtt = 0;
        this.addedMagicAtt = 0;
        this.addedPhysicalDef = 0;
        this.addedMagicDef = 0;
        this.addedEvasion = 0;
        this.addedManaShield = 0;
        this.addedHp = 0;
        this.addedSpeed = 0;

        this.statPoint = 1;
        this.hpPerSec = 5;

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
        const tempPA = this.addedPhysicalAtt;
        const tempHP = this.addedHp;

        this.addedPhysicalAtt =  Math.floor((this.physicalAtt * 0.01) * (this._str / 5));
        this.addedHp = Math.floor(this._str / 2)* 10;

        this.physicalAtt += this.addedPhysicalAtt - tempPA;
        this.maxHp += this.addedHp - tempHP;
        this.currentHp = this.maxHp;
    }

    get dex(){
        return this._dex;
    }
    set dex(value){
        this._dex = value;
        
        const tempS = this.addedSpeed;
        const tempE = this.addedEvasion;

        this.addedSpeed =  Math.floor(this._dex / 2);
        this.addedEvasion = Math.floor((this._dex / 5));

        this.speed -= this.addedSpeed - tempS;
        this.evasion += this.addedEvasion - tempE;
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
    get hpPerSec(){
        return this._hpPerSec;
    }
    set hpPerSec(value){
        this._hpPerSec = value;
    }
}