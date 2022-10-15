console.log("estou funcionando");



// codificaçao para a confecçâo do quiz



var a = "ben"
var b= "bruce banner"
var c= "hydra"
var d = "odin"
var e= "howard stark"


var botao = document.querySelector("button")
botao.addEventListener("click", quiz)

function quiz() {
prompt("qual o nome humano do hulk?")
alert(`voce esta correto se digitou:  ${b} `)

prompt("qual o nome do tio do homem aranha ?")
alert(("voce esta correto se digitou: " + a))

prompt("qual a organizaçao inimiga do capitao america?")
alert(` voce esta correto se digitou: ${c} `)

prompt("qual o nome do pai do thor?")
alert(`voce esta correto se digitou: ${d}`)

prompt("qual o nome do pai do tony stark")
alert(`voce esta correto se digitou:${e}`)

var nome = prompt(`como você se chama ?`)
alert  ("obrigado por responder nosso quiz  "  + nome + " , até a proxima!!")
}




// codificação para a frase do hulk



var hulk = document.getElementById("green")
var grande = document.querySelector("ol")

hulk.addEventListener("click", frase)

function frase(){


grande.innerHTML = "Hulk esmaga"
}





//codificaçao para a frase do home de ferro




var ferro=document.getElementById("playboy")
var bilionario = document.getElementById("bilion")

ferro.addEventListener("click", genio)

function genio(){
bilionario.innerHTML="Gênio  Bilionario  Playboy  Filantropo"
}






//codificação para frase do capitao america

var cap = document.getElementById("velho")
var senhor = document.getElementById("star")

cap.addEventListener("click" , soldado)

function soldado(){
senhor.innerHTML="Guerras se lutam com armas , mas sao vencidas com homens"
}




//codificação para frase do homem aranha




var aranha = document.getElementById("aracne")
var teia = document.getElementById("parker")

aranha.addEventListener("click", peter)

function peter(){
teia.innerHTML = "Com grandes poderes vem grandes responsabilidades"
}





//codificação para frase do thor

var thor = document.getElementById("trovao")
var thunder = document.getElementById("thunder")

thor.addEventListener("click" , martelo)

function martelo(){
thunder.innerHTML="Viver em paz comigo para viver em paz com os outros"
}



