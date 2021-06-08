/*Exercícios de interpretação de código
1)
a. false
b. false
c. true
e. boolean

2)
a. undefined
b. null
c. 11
d. 3
e. Array(11) [3,19,5,6,7,8,9,10,11,12,13]
f. 9


Exercícios de escrita de código
1)

let idadeUsuario = prompt("Qual a sua idade?")
let idadeMelhor = prompt("Qual a idade do(a) seu(sua) melhor amigo(a)?")
console.log("Sua idade é maior do que a do seu melhor amigo?", Number(idadeUsuario) > Number(idadeMelhor))
console.log("A diferença de idades é:", Number(idadeUsuario) - Number(idadeMelhor))

2) 

let numeroPar = prompt("Por favor, ensira um número par:")
console.log("Resto da divisão", Number(numeroPar)%2)

//Todo resto de divisão de um numero par por 2 é 0.
//Todo resto de divisão de um numero impar por 2 é 1.

3) 
let listaDeTarefas = []
listaDeTarefas[0] = prompt("Primeira tarefa do dia:")
listaDeTarefas[1] = prompt("Segunda tarefa do dia:")
listaDeTarefas[2] = prompt("Terceira tarefa do dia:")
console.log(listaDeTarefas)
let TarefaFeita = prompt("Qual indice da tarefa que você já fez?")
listaDeTarefas.splice(TarefaFeita,1)
console.log(listaDeTarefas)

4)
let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu email?")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeDoUsuario + "!")
 
DESAFIOS

1) 
a) console.log(((77-32)*(5/9) + 273.15) + "K")

b) console.log(((80*(9/5))+32) + "°F")

c) console.log(((30*(9/5))+32) + "°F" + " e " + ((((30*(9/5))+32) -32)*(5/9) + 273.15) + "K")

d) let grausCelsius = prompt("Temperatura em graus Celsius")
let grausFahrenheit = ((grausCelsius*(9/5))+32)
let grausKelvin = (((grausFahrenheit - 32)*(5/9) + 273.15))
console.log(grausCelsius + "°C = " + grausFahrenheit + "°F = " + grausKelvin + "K")

2)
a)let kWH = 0.05
let consumo = 280
console.log("Valor a ser pago: R$" + kWH * consumo + ".00")

b) let desconto = 0.15
console.log("Valor com desconto: R$" + kWH * consumo * desconto + "0")

3)
a) let lb = 20
let lbToKG = lb*0.453592
console.log(lb + "lb equivalem a " + lbToKG.toFixed(2) + " kg")

b) let oz = 10.5
let ozToKG = oz*0.0283495
console.log(oz + "oz equivalem a " + ozToKG.toFixed(2) + " kg")

c) let mi = 100
let miToM = mi*1609.34
console.log(mi + "mi equivalem a " + miToM.toFixed(0) + " m")

d) let ft = 50
let ftToM = ft*0.3048
console.log(ft + "ft equivalem a " + ftToM.toFixed(2) + " m")

e) let gal = 130.56
let galToL = gal*3.78541
console.log(gal + "gal equivalem a " + galToL.toFixed(2) + " L")

f) let xic = 450
let xicToL = xic*0.24
console.log(xic + "xic equivalem a " + xicToL.toFixed(2) + " L")

g) let lb = prompt("Peso em lb:")
let lbToKG = lb*0.453592
console.log(lb + "lb equivalem a " + lbToKG.toFixed(2) + " kg")


*/

