class Player extends Character{
    attack(target){
        let text = `${this.name}님이 ${target.name} 을 ${this.att}의 공격력으로 공격합니다.`;
        text = text + "\n" + target.attacked(this.att);
        if(target.hp <= 0){
            target.isDead = true;
            text = text + "\n" + this.getEXP(target.exp);
        }
        return text;
    }

    attacked(attack){
        this.hp -= attack;
        if(this.hp <= 0){
            let text = `${this.name}님이 죽었습니다. F5를 눌러 다시 시작하세요.`;
            this.isDead = true;

            return text;
        }
        else{
            let text = `${this.name}님의 체력이 ${this.hp} 남았습니다.`;
        
            return text;
        }
    }

    getEXP(exp){
        let text = `전투에서 승리하여 ${exp}의 경험치를 획득했습니다.`;
        this.exp += exp;
        if(this.exp >= this.lvlExp){
            this.lvl++;
            this.exp = this.exp - this.lvlExp;
            this.lvlExp += 50;
            this.hp = this.maxHp;
            this.statPoint += 5;
            addStatForm.style.display = "block";
            statPointP.innerText = this.statPoint;            
            text += `\n축하합니다!. 레벨업 하였습니다.`;
        }
        return text;
    }
}