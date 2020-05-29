const monsterArray = [
    ["훈련용 로봇", 0, 0, 0, 8, 0, 15, 15, 0, 0, 1000, 200, 0, 15],
    ["개량형 로봇", 0, 0, 0, 17, 30, 20, 20, 10, 0, 1000, 300, 0, 45],
    ["전투 로봇", 0, 0, 0, 28, 0, 60, 40, 20, 0, 900, 450, 0, 90],
    ["카라짐", 0, 0, 0, 5, 0, 5, 5, 0, 0, 1000, 100, 0, 50]
];

const btnButtons = document.querySelectorAll(".monster");
btnButtons.forEach(element => {
    element.addEventListener("click", battlePhase);
});


class Monster extends Character{
    attack(target){
        let text;
        if(target.evasion != 0){
            let rand = Math.floor(Math.random() * 100) + 1;
            if(rand <= target.evasion){
                text = `공격이 빗나갔습니다.`
                return text;
            }
        }
        const actualDamage = Math.round(this.physicalAtt - (target.physicalDef/10) * 0.01);
        text = `${this.name}이/가 ${target.name} 을 ${actualDamage}의 공격력으로 공격합니다.`;
        text = text + "\n" + target.attacked(actualDamage);
        if(target.currentHp <= 0){
            target.isDead = true;
        }
        return text;
    }

    attacked(attack){
        this.currentHp -= attack;
        if(this.currentHp <= 0){
            let text = `${this.name}이/가 죽었습니다.`;
            this.isDead = true;

            return text;
        }
        else{
            let text = `${this.name}의 체력이 ${this.currentHp} 남았습니다.`;
        
            return text;
        }
    }

    reset(){
        this.currentHp = this.maxHp;
        this.isDead = false;
    }
}

let monsters = [];

for(let i=0; i<monsterArray.length;i++){
    monsters[i] = new Monster(monsterArray[i][0], monsterArray[i][1], monsterArray[i][2], monsterArray[i][3], monsterArray[i][4], monsterArray[i][5], monsterArray[i][6], monsterArray[i][7], monsterArray[i][8], monsterArray[i][9], monsterArray[i][10], monsterArray[i][11], monsterArray[i][12], monsterArray[i][13]);
}