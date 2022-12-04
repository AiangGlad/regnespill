let oppgaveEl = document.getElementById('oppgave')
let svarEl = document.getElementById('svar')
let sjekkBtn = document.getElementById('sjekk')
let resetBtn = document.getElementById('reset')
let konklusjonEl = document.getElementById('konklusjon')
let startTidEl = document.getElementById('starttid')
let fakeTidEl = document.getElementById('fake')
let nedtellerEl = document.getElementById('nedteller')


startTidEl.addEventListener('click', start)

function start(){
    let T = document.getElementById('slider').value 

    var teller = 0
    myTime = setInterval(Timer, 1000);

    function Timer() {  
    teller = T -= 1
    nedtellerEl.innerHTML =  teller

    if (teller <= 0){
        clearInterval(myTime)
        konklusjonEl.innerHTML = "Sheeesh score: " + score
        sjekkBtn.classList.toggle("hide")
        resetBtn.classList.toggle("show")
    }
    
}

startTidEl.classList.toggle("hide")
fakeTidEl.classList.toggle("show")

let a = Math.floor(Math.random() * 50);
let b = Math.floor(Math.random() * 50);
let produkt = a + b

score = ""

oppgaveEl.innerHTML = `${a} + ${b} = ?`

sjekkBtn.onclick = function Game(){

var svar = Number(svarEl.value)

if (svar == produkt){
    score ++
    konklusjonEl.innerHTML = "Du har rett! Score: " + score
}else{
    konklusjonEl.innerHTML = "Svaret er " + produkt + " prøv igjen"
    score = 0
}

svarEl.value = ""

a = Math.floor(Math.random() * 50);
b = Math.floor(Math.random() * 50);
produkt = a + b

oppgaveEl.innerHTML = `${a} + ${b} = ?`
}
}

resetBtn.onclick = function(){
    location.reload(); 
}
