function playerTurn(target){
    playerLog = player.attack(target);
    const pPlayer = document.createElement("p");
    pPlayer.innerText = playerLog;
    battleLog.appendChild(pPlayer);
}

function monsterTurn(monster){
    monsterLog = monster.attack(player);
    const pMonster = document.createElement("p");
    pMonster.innerText = monsterLog;
    battleLog.appendChild(pMonster);
    
}
function battlePhase(event){
    const logs = battleLog.querySelectorAll("p");
    if(logs != null){
        for(let i=0;i<logs.length;i++){
            battleLog.removeChild(logs[i]);
        }    
    }
    const monster = monsters[event.target.id];
    let pSpeed = player.speed;
    let mSpeed = monster.speed;   
    while(true){
        let playerLog = '';
        let monsterLog = '';
        if(pSpeed <= mSpeed){
            if(!player.isDead){
                playerTurn(monster);
            }
            else break;
            mSpeed = mSpeed - pSpeed;
            pSpeed = player.speed;
        }
        else{    
            if(!monster.isDead){
                monsterTurn(monster);
            }
            else break;
            pSpeed = pSpeed - mSpeed;
            mSpeed = monster.speed;
        }

        playerLog = '';
        monsterLog = '';
    }
    
    monster.reset();
}