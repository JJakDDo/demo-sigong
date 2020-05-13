const battleLog = document.querySelector(".battleLog");

function battlePhase(event){
    const logs = battleLog.querySelectorAll("p");
    if(logs != null){
        for(let i=0;i<logs.length;i++){
            battleLog.removeChild(logs[i]);
        }    
    }   
    while(true){
        let playerLog = '';
        let monsterLog = '';
        if(!player.isDead){
            playerLog = player.attack(monsters[event.target.id]);
            const pPlayer = document.createElement("p");
            pPlayer.innerText = playerLog;
            battleLog.appendChild(pPlayer);
        }
        else break;

        if(!monsters[event.target.id].isDead){
            monsterLog = monsters[event.target.id].attack(player);
            const pMonster = document.createElement("p");
            pMonster.innerText = monsterLog;
            battleLog.appendChild(pMonster);
        }
        else break;

        playerLog = '';
        monsterLog = '';
    }
    
    printStat(player);
    monsters[event.target.id].reset();
}