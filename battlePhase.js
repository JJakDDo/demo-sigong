let playerLog = '';
let monsterLog = '';

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
function battlePhase(monsterIndex){
    const monster = monsters[monsterIndex];
    removeBattleLog();
    if(player.currentStamina < monster.currentStamina){
        alert("스테미나가 부족합니다.");
        
    }
    else{
        player.currentStamina -= monster.currentStamina;        
        let pSpeed = player.speed;
        let mSpeed = monster.speed;   
        while(true){
            if(pSpeed <= mSpeed){
                if(!player.isDead){
                    playerTurn(monster);
                }
                else {  
                    const playerLog = player.revive();
                    const pPlayer = document.createElement("p");
                    pPlayer.innerText = playerLog;
                    battleLog.appendChild(pPlayer);
                    break;
                }

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
        
        updateBriefStat();
        monster.reset();
    }
    
}

function multipleBattlePhase(monsterIndex, numOfBattle){
    const monster = monsters[monsterIndex];
    const stamnia = monster.currentStamina;      
    removeBattleLog();
    console.log(numOfBattle);
    for(let i = 0;i<numOfBattle;i++){
        console.log(i);
        if(player.currentStamina < stamnia){
            const pMonster = document.createElement("p");
            pMonster.innerText = `스테미나가 부족하여 전투를 종료합니다.`;
            battleLog.appendChild(pMonster); 
            break;       
        }
        else{            
            player.currentStamina -= stamnia;      
            let pSpeed = player.speed;
            let mSpeed = monster.speed;   
            while(true){
                if(pSpeed <= mSpeed){
                    if(!player.isDead){
                        player.attack(monster);
                    }
                    else {  
                        playerLog = `${player.name} 님이 죽어서 전투를 종료합니다.`;
                        playerLog += `\n${player.revive()}`;
                        const pPlayer = document.createElement("p");
                        pPlayer.innerText = playerLog;
                        battleLog.appendChild(pPlayer);
                        break;
                    }
    
                    mSpeed = mSpeed - pSpeed;
                    pSpeed = player.speed;
                }
                else{    
                    if(!monster.isDead){
                        monster.attack(player);
                    }
                    else {
                        monsterLog = `${i+1}회차 승리!`;
                        const pMonster = document.createElement("p");
                        pMonster.innerText = monsterLog;
                        battleLog.appendChild(pMonster);
                        break;
                    }
                    pSpeed = pSpeed - mSpeed;
                    mSpeed = monster.speed;
                }
        
                playerLog = '';
                monsterLog = '';
            }
            
            monster.reset();
        }
    }    
    updateBriefStat();   
}