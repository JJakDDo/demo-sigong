const stat = document.querySelector(".stat");

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
            text += `\n축하합니다!. 레벨업 하였습니다.`;
        }
        return text;
    }
}

function printStat(player){
    if(document.querySelector("#status") == null){
        const ul = document.createElement("ul");
        ul.setAttribute("id", "status");
    
        const li0 = document.createElement("li");
        li0.setAttribute("id", "name");
        li0.innerText = `이름: ${player.name}`;
        ul.appendChild(li0);
        const lilvl = document.createElement("li");
        lilvl.setAttribute("id", "lvl");
        lilvl.innerText = `레벨: ${player.lvl}`;
        ul.appendChild(lilvl);
        const li1 = document.createElement("li");
        li1.setAttribute("id", "hp");
        li1.innerText = `체력: ${player.hp}`;
        ul.appendChild(li1);
        const li2 = document.createElement("li");
        li2.setAttribute("id", "str");
        li2.innerText = `힘: ${player.str}`;
        ul.appendChild(li2);
        const li3 = document.createElement("li");
        li3.setAttribute("id", "vit");
        li3.innerText = `바이탈: ${player.vit}`;
        ul.appendChild(li3);
        const li4 = document.createElement("li");
        li4.setAttribute("id", "dex");
        li4.innerText = `덱스: ${player.dex}`;
        ul.appendChild(li4);
        const li5 = document.createElement("li");
        li5.setAttribute("id", "agi");
        li5.innerText = `어질리티: ${player.agi}`;
        ul.appendChild(li5);
        const li6 = document.createElement("li");
        li6.setAttribute("id", "att");
        li6.innerText = `공격력: ${player.att}`;
        ul.appendChild(li6);
        const li7 = document.createElement("li");
        li7.setAttribute("id", "crit");
        li7.innerText = `크리확률: ${player.crit}%`;
        ul.appendChild(li7);
        const li8 = document.createElement("li");
        li8.setAttribute("id", "eva");
        li8.innerText = `회피확률: ${player.eva}%`;
        ul.appendChild(li8);
    
        stat.appendChild(ul);
    }
    else{
        document.querySelector("#lvl").innerText = `레벨: ${player.lvl}`;
        document.querySelector("#hp").innerText = `체력: ${player.hp}`;
    }
}

const player = new Player("모험가", 1, 0, 100, 5, 5, 5, 5);
printStat(player);