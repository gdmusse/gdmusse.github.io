/* 
Exercícios de interpretação de código
1) 

10
10, 5

2)

10, 10, 10

Exercícios de escrita de código
1)
let nome
let idade
console.log(typeof nome, typeof idade)

Imprimiu undefined pois não foi atribuido nenhum valor as variaveis.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof nome, typeof idade)

Os dois foram considerados strings.

console.log("Olá",nome,", você tem",idade,"anos.")

2)
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")
let endereco = prompt("Qual é o seu endereço?")
let mae = prompt("Qual é o nome da sua mãe?")
let pai = prompt("Qual é o nome do seu pai?")

console.log("1. Qual o seu nome?")
console.log("Reposta:", nome)
console.log("2. Qual é a sua idade?")
console.log("Reposta:", idade)
console.log("3. Qual é o seu endereço?")
console.log("Reposta:", endereco)
console.log("4. Qual é o nome da sua mãe?")
console.log("Reposta:", mae)
console.log("5. Qual é o nome do seu pai?")
console.log("Reposta:", pai)

3)
let comidasFavoritas = ["massa", "hamburguer", "pizza", "sushi", "churrasco"]
console.log(comidasFavoritas)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

comidasFavoritas[1] = prompt("Qual a sua comida favorita?")
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

4)
let perguntas = ["Você é gremista?", "Você é colorado?", "Você está vestindo azul?"]
let respostas = [1,0,1]

console.log(perguntas[0],respostas[0])
console.log(perguntas[1],respostas[1])
console.log(perguntas[2],respostas[2])

*/