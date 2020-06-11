const stat = document.querySelector(".stat");
const addStatDiv = document.querySelector(".addStat");
const statPointP =  addStatDiv.querySelector("p");
const battleLog = document.querySelector(".battleLog");
const pickJobDiv = document.querySelector(".pickJob");
const menuDiv = document.querySelector(".menu");
const monstersDiv = document.querySelector(".monsters");
const tavernDiv = document.querySelector(".tavern");
const battleFieldDiv = document.querySelector(".battleField");
const briefStatDiv = battleFieldDiv.querySelector(".brief_stat");

const playBtn = pickJobDiv.querySelector(".playBtn");
const battleBtn = monstersDiv.querySelector(".startBattle");
let player;
let hpC;
playBtn.addEventListener("click", function(){
    const rbs = pickJobDiv.querySelectorAll('input[name="job"]');
    let selectedJob;
    for (const rb of rbs){
        if(rb.checked){
            selectedJob = rb.value;
            break;
        }
    }
    start(selectedJob);
});

battleBtn.addEventListener("click", function(){
    const rbs = monstersDiv.querySelectorAll('input[name="monster"]');
    const numOfBattle = parseInt(monstersDiv.querySelector(".numOfBattle").value);
    let selectedMonster;
    for (const rb of rbs){
        if(rb.checked){
            selectedMonster = rb.value;
            break;
        }
    }
    if(numOfBattle == 1){
        battlePhase(selectedMonster);
    }
    else{
        multipleBattlePhase(selectedMonster, numOfBattle);
    }
});

function removeBattleLog(){    
    const logs = battleLog.querySelectorAll("p");
    if(logs != null){
        for(let i=0;i<logs.length;i++){
            battleLog.removeChild(logs[i]);
        }    
    }
}
function printStat(){
    if(document.querySelector("#status") == null){
        const ul = document.createElement("ul");
        ul.setAttribute("id", "status");
    
        const li0 = document.createElement("li");
        li0.setAttribute("id", "name");
        li0.innerText = `이름: ${player.name}`;
        ul.appendChild(li0);
        const lilvl = document.createElement("li");
        lilvl.setAttribute("id", "accumulatedLevel");
        lilvl.innerText = `누적레벨: ${player.accumulatedLevel}`;
        ul.appendChild(lilvl);
        const liExp = document.createElement("li");
        liExp.setAttribute("id", "exp");
        liExp.innerText = `경험치: ${player.currentExp} / ${player.maxExp}`;
        ul.appendChild(liExp);
        const li1 = document.createElement("li");
        li1.setAttribute("id", "hp");
        li1.innerText = `체력: ${player.currentHp} / ${player.maxHp}`;
        ul.appendChild(li1);
        const liShield = document.createElement("li");
        liShield.setAttribute("id", "manaShield");
        liShield.innerText = `마나쉴드: ${player.currentManaShield} / ${player.maxManaShield}`;
        ul.appendChild(liShield);
        const li2 = document.createElement("li");
        li2.setAttribute("id", "str");
        li2.innerText = `힘: ${player.str}`;
        ul.appendChild(li2);
        const li4 = document.createElement("li");
        li4.setAttribute("id", "dex");
        li4.innerText = `덱스: ${player.dex}`;
        ul.appendChild(li4);
        const li5 = document.createElement("li");
        li5.setAttribute("id", "inte");
        li5.innerText = `인트: ${player.inte}`;
        ul.appendChild(li5);
        const li6 = document.createElement("li");
        li6.setAttribute("id", "physicalAtt");
        li6.innerText = `물리공격력: ${player.physicalAtt}`;
        ul.appendChild(li6);
        const li7 = document.createElement("li");
        li7.setAttribute("id", "magicAtt");
        li7.innerText = `기술공격력: ${player.magicAtt}`;
        ul.appendChild(li7);
        const li8 = document.createElement("li");
        li8.setAttribute("id", "physicalDef");
        li8.innerText = `물리방어력: ${player.physicalDef}`;
        ul.appendChild(li8);
        const li9 = document.createElement("li");
        li9.setAttribute("id", "magicDef");
        li9.innerText = `기술방어력: ${player.magicDef}`;
        ul.appendChild(li9);
        const li10 = document.createElement("li");
        li10.setAttribute("id", "evasion");
        li10.innerText = `회피: ${(player.evasion / 10).toFixed(1)} %`;
        ul.appendChild(li10);
        const li11 = document.createElement("li");
        li11.setAttribute("id", "critical");
        li11.innerText = `크리티컬: ${(player.critical / 10).toFixed(1)} %`;
        ul.appendChild(li11);
        const li12 = document.createElement("li");
        li12.setAttribute("id", "speed");
        li12.innerText = `공격속도: ${player.speed}`;
        ul.appendChild(li12);
    
        stat.appendChild(ul);
    }
    else{        
        stat.querySelector("#accumulatedLevel").innerText = `누적레벨: ${player.accumulatedLevel}`;
        stat.querySelector("#exp").innerText = `경험치: ${player.currentExp} / ${player.maxExp}`;
        stat.querySelector("#hp").innerText = `체력: ${player.currentHp} / ${player.maxHp}`;
        stat.querySelector("#manaShield").innerText = `마나쉴드: ${player.currentManaShield} / ${player.maxManaShield}`;
        stat.querySelector("#str").innerText = `힘: ${player.str}`;
        stat.querySelector("#dex").innerText = `덱스: ${player.dex}`;
        stat.querySelector("#inte").innerText = `인트: ${player.inte}`;
        stat.querySelector("#physicalAtt").innerText = `물리공격력: ${player.physicalAtt}`;
        stat.querySelector("#magicAtt").innerText = `기술공격력: ${player.magicAtt}`;
        stat.querySelector("#physicalDef").innerText = `물리방어력: ${player.physicalDef}`;
        stat.querySelector("#magicDef").innerText = `기술방어력: ${player.magicDef}`;
        stat.querySelector("#evasion").innerText = `회피: ${(player.evasion / 10).toFixed(1)} %`;
        stat.querySelector("#critical").innerText = `크리티컬: ${(player.critical / 10).toFixed(1)} %`;
        stat.querySelector("#speed").innerText = `공격속도: ${player.speed}`;
    }
}

function showPickJobDiv(){
    pickJobDiv.style.display = "block";
    menuDiv.style.display = "none";
    monstersDiv.style.display = "none";
    stat.style.display = "none";
    addStatDiv.style.display = "none";
    battleFieldDiv.style.display = "none";
    tavernDiv.style.display = "none";
}
function showMain(){
    pickJobDiv.style.display = "none";
    menuDiv.style.display = "block";
    monstersDiv.style.display = "none";
    stat.style.display = "none";
    addStatDiv.style.display = "none";
    battleFieldDiv.style.display = "none";
    tavernDiv.style.display = "none";
    stopHpCounter();
    removeBattleLog();
}

function showAddStat(){
    if((player.statPoint+1)% 5 != 0){
        addStatDiv.querySelector(".normalStat").style.display ="block"; 
        addStatDiv.querySelector(".specialStat").style.display ="none"; 
    }
    else{
        addStatDiv.querySelector(".normalStat").style.display ="none"; 
        addStatDiv.querySelector(".specialStat").style.display ="block"; 
    }
}
function showCharacterDiv(){
    pickJobDiv.style.display = "none";
    menuDiv.style.display = "block";
    monstersDiv.style.display = "none";
    stat.style.display = "block";
    addStatDiv.style.display = "none";
    battleFieldDiv.style.display = "none";
    tavernDiv.style.display = "none";
    if(player.statPoint < player.accumulatedLevel){
        addStatDiv.style.display = "block";
        statPointP.innerText = player.accumulatedLevel - player.statPoint;
        showAddStat();
    }

    printStat();
    stopHpCounter();
    removeBattleLog();
}

function updateBriefStat(){
    briefStatDiv.querySelector("#name").innerText = `이름: ${player.name}`;
    briefStatDiv.querySelector("#accumulatedLevel").innerText = `누적레벨: ${player.accumulatedLevel}`;
    briefStatDiv.querySelector("#hp").innerText = `체력: ${player.currentHp} / ${player.maxHp}`;
    briefStatDiv.querySelector("#stamina").innerText = `스테미나: ${player.currentStamina} / ${player.maxStamina}`;
}

function startStaminaCounter(){
    setInterval("staminaCounter()", 2000);
}
function staminaCounter(){
    if(player.currentStamina < player.maxStamina){
        player.currentStamina++;
        briefStatDiv.querySelector("#stamina").innerText = `스테미나: ${player.currentStamina} / ${player.maxStamina}`;
    }
}
function startHpCounter(){
    hpC = setInterval("hpCounter()", 1000);
}
function stopHpCounter(){
    clearInterval(hpC);
}
function hpCounter(){
    if(player.currentHp < player.maxHp){
        if(player.currentHp > player.maxHp - player.hpPerSec)
            player.currentHp = player.maxHp;
        else player.currentHp += player.hpPerSec;
        
    }
    tavernDiv.querySelector(".hp").innerText = `체력: ${player.currentHp} / ${player.maxHp}`;
}

function showBattleFieldDiv(){
    pickJobDiv.style.display = "none";
    menuDiv.style.display = "block";
    monstersDiv.style.display = "block";
    stat.style.display = "none";
    addStatDiv.style.display = "none";
    battleFieldDiv.style.display = "block";
    tavernDiv.style.display = "none";
    updateBriefStat();
    stopHpCounter();
    removeBattleLog();
}

function showTavernDiv(){    
    pickJobDiv.style.display = "none";
    menuDiv.style.display = "block";
    monstersDiv.style.display = "none";
    stat.style.display = "none";
    addStatDiv.style.display = "none";
    battleFieldDiv.style.display = "none";
    tavernDiv.style.display = "block";
    startHpCounter();
    removeBattleLog();
}

function start(job){    
    console.log(job);
    if(job == undefined){
        alert("직업을 선택하세요!");
    }
    else if (job == 1){
        player = new Player("전사", 3, 1, 1, 5, 0, 4, 3, 0, 0, 1000, 200, 0, 0, 100, 0);
        player.addPassiveSkill(new Harden());
        player.addActiveSkill(new ShieldSlam());
        console.log(player.passiveSkills);
        startStaminaCounter();
        showMain();
    }
    else if (job == 2){
        player = new Player("모험가", 10, 8, 5, 10, 0, 15, 10, 0, 0, 1000, 200, 0, 0, 100, 0);
        console.log("투사 선택");
        startStaminaCounter();
        showMain();
    }
    const addStats = addStatDiv.querySelectorAll("button");
    addStats.forEach(element => {
        element.addEventListener("click", addStat);
    });
}

function init(){
    showPickJobDiv();

    menuDiv.addEventListener("click", (e) => {
        if(e.target && e.target.nodeName == "LI"){
            console.log(e.target.id);
            if(e.target.id == "1"){
                showCharacterDiv();
            }
            else if(e.target.id == "5"){
                showTavernDiv();
            }
            else if(e.target.id == "6"){
                showBattleFieldDiv();
            }
        }
    });

}


function addStat(event){
    switch(event.target.id){
        case "0" : player.str += 2;
                    break;
        case "1" : player.dex += 2;
                    break;
        case "2" : player.inte += 2;
                    break;
        case "3" : player.physicalAtt += 2;
                    break;
        case "4" : player.magicAtt += 2;
                    break;
        case "5" : player.physicalDef += 2;
                    break;
        case "6" : player.magicDef += 2;
                    break;
        case "7" : player.evasion += 1;
                    break;
        case "8" : player.critical += 1;
                    break;
        case "9" : player.speed -= 10;
                    break;
        case "10" : player.maxHp += 20;
                    break;
        case "11" : player.maxManaShield += 15;
                    break;
        default: break;
    }

    player.statPoint++;
    
    if(player.statPoint == player.accumulatedLevel){
        addStatDiv.style.display = "none"
    }
    statPointP.innerText = player.accumulatedLevel - player.statPoint;
    printStat();
    showAddStat();
    console.log(player.statPoint);
}
init();