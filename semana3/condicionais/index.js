/* Exercícios de interpretação de código
1) 
Testa se o resto da divisão do número inserido por 2 é 0. Numeros pares passam no teste, numeros impares não.

2)
a) O código deixa o usuário selecionar uma fruta e informa o preço da mesma.
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta Pêra é R$ 5

3)
a) Pedindo para o usuario digitar um numero e definindo o mesmo.
b) "Esse número passou no teste". Nenhuma.
c) Sim, o let está dentro do escopo do if, não acontecerá a definição do "mensagem" se for menor que 0.

Exercícios de escrita de código
4)

let idade = Number(prompt("Qual é a sua idade?"))
if(idade >= 18){
    console.log("Você pode dirigir!")
} else{
        console.log("Você não pode dirigir.")
}

5)

let turno = prompt("Qual o turno que você estuda? (M (matutino) ou V (Vespertino) ou N (Noturno))")
if(turno === "M"){
    console.log("Bom dia!")
} else if(turno === "V") {
    console.log("Boa Tarde!")
} else if(turno === "N"){
    console.log("Boa Noite!")
} else {
    console.log("Por favor informar o turno corretamente.")
}

6)

let turno = prompt("Qual o turno que você estuda? (M (matutino) ou V (Vespertino) ou N (Noturno))")
switch(turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Por favor informar o turno corretamente.")

}

7)

let generoFilme = prompt("Qual é o gênero do filme?")
let preço = Number(prompt("Qual é o preço do ingresso?"))
if(generoFilme==="fantasia" && preço<15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}

*/