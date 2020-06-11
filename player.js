class Player extends Character{
    attack(target, turn){
        let text = '';
        let actualDamage;
        if(turn == 1 && this.passiveSkills.length > 0){
            console.log(this.passiveSkills[0].name);
            for(let i=0;i<this.passiveSkills.length;i++){
                console.log(this.physicalDef);
                this.passiveSkills[i].getSkillEffect(this);
                text += `${this.name}님이 패시브 스킬 ${this.passiveSkills[i].name} 을/를 발동하였습니다.\n`;
                console.log(this.physicalDef);
            }
        }

        if(this.activeSkills.length > 0){
            for(let i=0;i<this.activeSkills.length;i++){
                let rand = Math.floor(Math.random() * 100) + 1;
                if(rand <= this.activeSkills[i].prob){
                    return this.activeSkills[i].getSkillEffect(player, target, i);
                }
            }
        }

        if(target.evasion != 0){
            let rand = Math.floor(Math.random() * 1000) + 1;
            if(rand <= target.evasion){
                text += `공격이 빗나갔습니다.`;
                return text;
            }
        }
        
        if(this.critical != 0){
            let rand = Math.floor(Math.random() * 1000) + 1;
            if(rand <= this.critical){
                actualDamage = Math.round(this.physicalAtt * 2 - (target.physicalDef/5) * 0.01);
                text +=`치명타 발동! ${this.name}님이 ${target.name} 을/를 ${actualDamage}의 공격력으로 공격합니다.`;
            }
            else{            
                actualDamage = Math.round(this.physicalAtt - (target.physicalDef/5) * 0.01);
                text +=`${this.name}님이 ${target.name} 을/를 ${actualDamage}의 공격력으로 공격합니다.`;
            }
        }
        else{            
            actualDamage = Math.round(this.physicalAtt - (target.physicalDef/5) * 0.01);
            text +=`${this.name}님이 ${target.name} 을/를 ${actualDamage}의 공격력으로 공격합니다.`;
        }
        text += `\n${target.attacked(actualDamage)}`;
        if(target.currentHp <= 0){
            target.isDead = true;
            text += `\n${this.getEXP(target.currentExp)}`;
        }
        return text;
    }

    attacked(attack){
        this.currentHp -= attack;
        if(this.currentHp <= 0){
            let text = `${this.name}님이 죽었습니다.`;
            this.isDead = true;

            return text;
        }
        else{
            let text = `${this.name}님의 체력이 ${this.currentHp} 남았습니다.`;
        
            return text;
        }
    }

    getEXP(exp){
        let text = `전투에서 승리하여 ${exp}의 경험치를 획득했습니다.`;
        this.currentExp += exp;
        if(this.currentExp >= this.maxExp){
            this.getNewStat();          
            text += `\n축하합니다!. 레벨업 하였습니다.`;
        }
        return text;
    }

    getNewStat(){
        this.accumulatedLevel++;
        this.currentExp = this.currentExp - this.maxExp;
        this.maxExp += Math.floor(this.maxExp * 1.5);
        this.maxHp += 5;
        this.currentHp = this.maxHp;
        this.physicalAtt += 1;
        this.physicalDef += 1;
        this.hpPerSec = this.accumulatedLevel * 5;
    }

    revive(){
        const penaltyExp = Math.floor(this.currentExp * 0.2);
        this.currentExp -= penaltyExp;
        this.currentHp = 1;
        this.isDead = false;

        return `${penaltyExp} 경험치를 잃었습니다.`;
    }
}