console.log("estou funcionando");


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

























