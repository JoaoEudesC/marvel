

//mudança do background color do header

let blue = document.getElementById("colores")

blue.addEventListener("mouseenter" , bordeux)

function bordeux(){
blue.style.backgroundColor = "#006eb8"
}



blue.addEventListener("mouseleave" , comeback)

function comeback(){
    blue.style.backgroundColor = "darkred"
}




// codificaçao para a confecçâo do quiz



var a = "Ben"
var b= "Bruce Banner"
var c= "Hydra"
var d = "Odin"
var e= "Howard Stark"
var f = "Cirurgião"
var g = "Dr. Hank Pym"
var h = "Clint Barton"
var i = "Russia"
var j = "Wakanda"


var botao = document.querySelector("button")
botao.addEventListener("click", quiz)

function quiz() {

var nome = prompt(`Como você se chama ?`)

prompt( nome + ", Qual o nome humano do hulk?")
alert(`você esta correto se digitou:  ${b} `)

prompt(  nome + ", Qual o nome do pai do tony stark")
alert(`Você esta correto se digitou: ${e}`)

prompt( nome +", Qual a organizaçao inimiga do capitao america?")
alert(` Você esta correto se digitou: ${c} `)

prompt( nome + ", Qual o nome do tio do homem aranha ?")
alert(("Você esta correto se digitou: " + a))

prompt(nome + ", Qual o nome do pai do thor?")
alert(`Você esta correto se digitou: ${d}`)

prompt(nome + ", Qual era a profissão do doutor estranho antes dele virá feiticeiro ?")
alert(`Você esta correto se digitou: ${f}`)

prompt(nome +  ", Qual o nome do inventor do traje do homem formiga?")
alert(`Você esta correto se digitou: ${g}`)

prompt(nome + ", Qual o nome do gavião arqueiro?")
alert(`Você esta correto se digitou: ${h}`)

prompt(nome + ", Qual país que a viuva negra nasceu?")
alert(`Você esta correto se digitou: ${i}`)

prompt( nome +", Qual a terra nativa do pantera negra?")
alert(`Você esta correto se digitou: ${j}`)


alert("obrigado por responder nosso quiz  "  + nome + " , até a proxima!!")
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



//codificaçao para a frase do drestranho


let porta = document.getElementById("estranho")
let cadabra = document.getElementById("strange")

cadabra.addEventListener("click" , portal)

function portal(){

porta.innerHTML="A fé é a minha espada. A verdade é o meu escudo. O conhecimento é a minha armadura!"
}





// codificaçao para a frase do homem formiga


let man = document.getElementById("formiga")
let shrink= document.getElementById("big")

man.addEventListener("click" , size)

function size(){
shrink.innerHTML = "“Segundas chances não aparecem a todo o momento.”"
}





// codificaçao para frase do gaviao arqueiro


let arco = document.getElementById("arrow")
let alvo = document.getElementById("bow")

arco.addEventListener("click", certo)

function certo(){
alvo.innerHTML = "“Todas as surpresas são inesperadas.”"
}




// codificaçao para frase  da viuva negra


let agil = document.getElementById("russia")
let ruiva = document.getElementById("sminorf")

agil.addEventListener("click" , blond)

function blond (){
ruiva.innerHTML = "“Regimes caem todos os dias. ..."
}





// codificaçao para frase do pantera negra


let garras = document.getElementById("wakanda")
let animal = document.getElementById("black")


garras.addEventListener("click" , negro)

function negro(){
animal.innerHTML="“Em tempos de crise, os sábios constroem pontes, enquanto os tolos constroem muros.”"
}


