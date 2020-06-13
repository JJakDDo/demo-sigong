class Skill {
    constructor(code, type, name, prob, level, exp){
        this.code = code;
        this.type = type; //1 = passive, 2 = active;
        this.name = name;
        this.prob = prob;
        this.level = level;
        this.maxExp = exp;
        this.currentExp = 0;
        this.numOfEquippedSupportSkills = 0;
    }
    get code(){
        return this._code;
    }
    set code(value){
        this._code = value;
    }

    get type(){
        return this._type;
    }
    set type(value){
        this._type = value;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get prob(){
        return this._prob;
    }
    set prob(value){
        this._prob = value;
    }
    get level(){
        return this._level;
    }
    set level(value){
        this._level = value;
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
    get numOfEquippedSupportSkills(){
        return this._numOfEquippedSupportSkills;
    }
    set numOfEquippedSupportSkills(value){
        this._numOfEquippedSupportSkills = value;
    }
}

class Harden extends Skill{
    constructor(){
        super(1, 1, "단단해지기", 100, 1, 0);
    }
    getSkillEffect(){
        player.physicalDef += 2;
        player.magicDef += 2;
    }
}

class ShieldSlam extends Skill{
    constructor(){
        super(1, 2, "방패밀기", 80, 1, 0);
    }
    getSkillEffect(target){
        let text = '';
        text = `${player.name}님이 ${this.name}스킬을/를 발동하였습니다.\n`;
        let actualDamage = Math.round(player.physicalDef * (0.8 + (0.05 * (this.level-1))) - (target.physicalDef/5) * 0.01);
        text +=`${target.name} 을/를 ${actualDamage}의 공격력으로 공격합니다.`;
        text += `\n${target.attacked(actualDamage)}`;
        return text;
    }
}