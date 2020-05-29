const stat = document.querySelector(".stat");
const addStatDiv = document.querySelector(".addStat");
const statPointP =  addStatDiv.querySelector("p");
const battleLog = document.querySelector(".battleLog");
const pickJobDiv = document.querySelector(".pickJob");
const menuDiv = document.querySelector(".menu");
const monstersDiv = document.querySelector(".monsters");
const battleFieldDiv = document.querySelector(".battleField");

const playBtn = pickJobDiv.querySelector(".playBtn");
let player;
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
        li10.innerText = `회피: ${player.evasion}`;
        ul.appendChild(li10);
        const li11 = document.createElement("li");
        li11.setAttribute("id", "critical");
        li11.innerText = `크리티컬: ${player.critical}`;
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
        stat.querySelector("#evasion").innerText = `회피: ${player.evasion}`;
        stat.querySelector("#critical").innerText = `크리티컬: ${player.critical}`;
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
}
function showMain(){
    pickJobDiv.style.display = "none";
    menuDiv.style.display = "block";
    monstersDiv.style.display = "none";
    stat.style.display = "none";
    addStatDiv.style.display = "none";
    battleFieldDiv.style.display = "none";
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
    if(player.statPoint < player.accumulatedLevel){
        addStatDiv.style.display = "block";
        statPointP.innerText = player.accumulatedLevel - player.statPoint;
        showAddStat();
    }

    printStat();
}
function showBattleFieldDiv(){
    pickJobDiv.style.display = "none";
    menuDiv.style.display = "block";
    monstersDiv.style.display = "block";
    stat.style.display = "none";
    addStatDiv.style.display = "none";
    battleFieldDiv.style.display = "block";
}

function start(job){    
    console.log(job);
    if(job == undefined){
        alert("직업을 선택하세요!");
    }
    else if (job == 1){
        player = new Player("전사", 0, 0, 0, 10, 0, 15, 10, 0, 0, 1000, 200, 0, 0);
        console.log("전사 선택");
        showMain();
    }
    else if (job == 2){
        player = new Player("모험가", 10, 8, 5, 10, 0, 15, 10, 0, 0, 1000, 200, 0, 0);
        console.log("투사 선택");
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
            else if(e.target.id == "6"){
                showBattleFieldDiv();
            }
        }
    });

}


function addStat(event){
    switch(event.target.id){
        case "0" : player.str += 5;
                    break;
        case "1" : player.dex += 5;
                    break;
        case "2" : player.inte += 5;
                    break;
        case "3" : player.physicalAtt += 15;
                    break;
        case "4" : player.magicAtt += 15;
                    break;
        case "5" : player.physicalDef += 10;
                    break;
        case "6" : player.magicDef += 10;
                    break;
        case "7" : player.evasion += 2;
                    break;
        case "8" : player.critical += 2;
                    break;
        case "9" : player.speed -= 80;
                    break;
        case "10" : player.maxHp += 150;
                    break;
        case "11" : player.maxManaShield += 100;
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