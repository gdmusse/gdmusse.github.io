/* 
Exercícios de interpretação de código

1)

a) 10 50

b) Nada seria impresso.

2)

a)Darvas, Caio

b)Amanda, Caio

3)

Retorna um array com numeros pares ao quadrado.

Exercícios de escrita de código

4)

a)

let mensagemImpressa = () => {
 console.log("Eu sou Gabriel, tenho 24 anos, moro em Porto Alegre e sou estudante.")
}

b)


function mensagemImpressa(nome,idade,cidade,estudante,estuda){
    nome = prompt("Qual o seu nome?")
    idade = Number(prompt("Qual a sua idade?"))
    cidade = prompt("Qual a sua cidade?")
    estudante = confirm("Você é estudante?")
    if(estudante == false)
    {
        estuda = "não sou" 
    } else if(estudante == true){
        estuda = "sou"
    }
    string = console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e " + estuda + " estudante.")
    return string
   }
    
mensagemImpressa()

5)
a)


function somaNumeros(num1, num2) {
    num1 = Number(prompt("Digite um numero"))
num2 = Number(prompt("Digite outro numero"))
    return Number(num1+num2)
}


console.log("A soma é: " + somaNumeros())

b)

function comparaNumeros(num1, num2) {
    num1 = Number(prompt("Digite um numero"))
    num2 = Number(prompt("Digite outro numero"))
    if(num1 > num2){
        console.log("O primeiro número: " + num1 + " é maior que o segundo: " + num2)
    }else if(num1 == num2){
        console.log("O primeiro número: " + num1 + " é igual ao segundo: " + num2)
    }
}

comparaNumeros()

c)


function repeteMensagem(msg) {
    msg = String(prompt("Digite a sua mensagem:"))
    for(let i=0; i<10; i++){
        console.log(msg)
    }
}
repeteMensagem()

6) 

a)


function quantidadeElementos(array){
    return array.length 
}
const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
console.log("Esse array possui " + quantidadeElementos(array1) + " elementos.")

b)

function numPar(num1){
    if(num1%2==0){
        return true
    }else{
        return false
    } 
}
let numero = Number(prompt("Digite um número"))
let resposta
if(numPar(numero) == false){
    resposta = "Não"
}else {
    resposta = "Sim"
}

console.log("O número " + numero + " é par? " + resposta)

c)

const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let arrayPar = []

function quantidadeElementos(array){
    for(numero of array){
        if(numero%2==0){
            arrayPar.push(numero)
        }
    }
    return arrayPar.length 
}


console.log("Esse array possui " + quantidadeElementos(array1) + " elementos pares.")


d)


function numPar(num1){
    if(num1%2==0){
        return true
    }else{
        return false
    } 
}

const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let arrayPar = []

function quantidadeElementos(array){
    for(numero of array){
        if(numPar(numero)==true){
            arrayPar.push(numero)
        }
    }
    return arrayPar.length 
}

console.log("Esse array possui " +quantidadeElementos(array1)+ " elementos pares.")

*/