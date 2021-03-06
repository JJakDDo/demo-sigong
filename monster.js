const monsterArray = [
    ["훈련용 로봇", 0, 0, 0, 2, 0, 15, 15, 0, 0, 1000, 50, 0, 10, 1, 50],
    ["개량형 로봇", 0, 0, 0, 10, 20, 10, 1, 1, 0, 1000, 150, 0, 45, 3, 100],
    ["전투 로봇", 0, 0, 0, 15, 0, 25, 25, 2, 0, 900, 250, 0, 90, 5, 150],
    ["카라짐", 0, 0, 0, 5, 0, 5, 5, 0, 0, 1000, 100, 0, 50, 0, 200]
];
/*
const btnButtons = document.querySelectorAll(".monster");
btnButtons.forEach(element => {
    element.addEventListener("click", battlePhase);
});
*/

class Monster extends Character{
    attack(){
        let text;
        let actualDamage;
        if(player.evasion != 0){
            let rand = Math.floor(Math.random() * 1000) + 1;
            if(rand <= player.evasion){
                text = `공격이 빗나갔습니다.`
                return text;
            }
        }
        
        if(this.critical != 0){
            let rand = Math.floor(Math.random() * 1000) + 1;
            if(rand <= this.critical){
                actualDamage = Math.round(this.physicalAtt * 2 - (player.physicalDef/5) * 0.01);
                text = `치명타 발동! ${this.name}님이 ${player.name} 을/를 ${actualDamage}의 공격력으로 공격합니다.`;
            }
            else{            
                actualDamage = Math.round(this.physicalAtt - (player.physicalDef/5) * 0.01);
                text = `${this.name}님이 ${player.name} 을/를 ${actualDamage}의 공격력으로 공격합니다.`;
            }
        }
        else{            
            actualDamage = Math.round(this.physicalAtt - (player.physicalDef/5) * 0.01);
            text = `${this.name}님이 ${player.name} 을/를 ${actualDamage}의 공격력으로 공격합니다.`;
        }
        
        text = text + "\n" + player.attacked(actualDamage);
        if(player.currentHp <= 0){
            player.isDead = true;
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
    monsters[i] = new Monster(monsterArray[i][0], monsterArray[i][1], monsterArray[i][2], monsterArray[i][3], monsterArray[i][4], monsterArray[i][5], monsterArray[i][6], monsterArray[i][7], monsterArray[i][8], monsterArray[i][9], monsterArray[i][10], monsterArray[i][11], monsterArray[i][12], monsterArray[i][13], monsterArray[i][14], monsterArray[i][15]);
}