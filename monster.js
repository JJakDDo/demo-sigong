const monsterArray = [
    ["머키", 1, 20, 50, 3, 1, 2, 1],
    ["리리", 3, 40, 150, 7, 3, 2, 5],
    ["아우리엘", 7, 70, 250, 15, 2, 10, 5],
    ["카라짐", 10, 90, 400, 20, 10, 5, 10]
];

const btnButtons = document.querySelectorAll(".monster");
btnButtons.forEach(element => {
    element.addEventListener("click", battlePhase);
});


class Monster extends Character{
    attack(target){
        let text = `${this.name}가 ${target.name}님을 ${this.att}의 공격력으로 공격합니다.`;
        text = text + "\n" + target.attacked(this.att);
        if(target.hp <= 0){
            target.isDead = true;
        }
        return text;
    }

    attacked(attack){
        this.hp -= attack;
        if(this.hp <= 0){
            let text = `${this.name}가 죽었습니다.`;
            this.isDead = true;

            return text;
        }
        else{
            let text = `${this.name}님의 체력이 ${this.hp} 남았습니다.`;
        
            return text;
        }
    }

    reset(){
        this.hp = this.maxHp;
        this.isDead = false;
    }
}

let monsters = [];

for(let i=0; i<monsterArray.length;i++){
    monsters[i] = new Monster(monsterArray[i][0], monsterArray[i][1], monsterArray[i][2], monsterArray[i][3], monsterArray[i][4], monsterArray[i][5], monsterArray[i][6], monsterArray[i][7]);
}