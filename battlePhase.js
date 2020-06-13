let playerLog = '';
let monsterLog = '';

let playerStat = [];

function playerTurn(target, turn){
    playerLog = player.attack(target, turn);
    const pPlayer = document.createElement("p");
    pPlayer.innerText = playerLog;
    battleLog.appendChild(pPlayer);
}

function monsterTurn(monster){
    monsterLog = monster.attack();
    const pMonster = document.createElement("p");
    pMonster.innerText = monsterLog;
    battleLog.appendChild(pMonster);
    
}

function savePlayerInitStat(){
    playerStat.push(player.str);
    playerStat.push(player.dex);
    playerStat.push(player.inte);
    playerStat.push(player.physicalAtt);
    playerStat.push(player.magicAtt);
    playerStat.push(player.physicalDef);
    playerStat.push(player.magicDef);
    playerStat.push(player.evasion);
    playerStat.push(player.critical);
    playerStat.push(player.speed);
}

function resetPlayerInitStat(){
    console.log('reset hp: ' , player.currentHp);  
    player.str = playerStat[0];
    player.dex = playerStat[1];
    player.inte = playerStat[2];
    player.physicalAtt = playerStat[3];
    player.magicAtt = playerStat[4];
    player.physicalDef = playerStat[5];
    player.magicDef = playerStat[6];
    player.evasion = playerStat[7];
    player.critical = playerStat[8];
    player.speed = playerStat[9];
}

function battlePhase(monsterIndex){
    const monster = monsters[monsterIndex];
    removeBattleLog();
    if(player.currentStamina < monster.currentStamina){
        alert("스테미나가 부족합니다.");
        
    }
    else{
        player.currentStamina -= monster.currentStamina;        
        let playerTurnCount = 1;
        let pSpeed = player.speed;
        let mSpeed = monster.speed
        savePlayerInitStat();   
        while(true){
            if(pSpeed <= mSpeed){
                if(!player.isDead){
                    playerTurn(monster, playerTurnCount);
                    playerTurnCount++;
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
            console.log('hp: ' , player);    
        }
        console.log('hp: ' , this.currentHp);  
        resetPlayerInitStat();        
        updateBriefStat();
        save();
        monster.reset();
    }
    
}

function multipleBattlePhase(monsterIndex, numOfBattle){
    const monster = monsters[monsterIndex];
    const stamnia = monster.currentStamina;      
    let battleOver = false;
    removeBattleLog();
    console.log(numOfBattle);
    for(let i = 0;i<numOfBattle;i++){        
        savePlayerInitStat();     
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
            let playerTurnCount = 1;
            while(true){
                if(pSpeed <= mSpeed){
                    if(!player.isDead){
                        player.attack(monster, playerTurnCount);
                        playerTurnCount++;
                    }
                    else {  
                        playerLog = `${player.name} 님이 죽어서 전투를 종료합니다.`;
                        playerLog += `\n${player.revive()}`;
                        const pPlayer = document.createElement("p");
                        pPlayer.innerText = playerLog;
                        battleLog.appendChild(pPlayer);
                        battleOver = true;
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
        if(battleOver)
            break;

        resetPlayerInitStat();
    } 
    updateBriefStat();  
    save(); 
}