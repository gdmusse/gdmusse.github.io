//Exercício 1

function inverteArray(array) {
   array = array.reverse()
   return array
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let arrayPar = []
   for(number of array){
      if(number%2==0){
         number = number * number
         arrayPar.push(number)
      }
   }
   return arrayPar
}

//Exercício 3

function retornaNumerosPares (array) {
   let arrayPar = []
   for(number of array){
      if(number%2==0){
         arrayPar.push(number)
      }
   }
   return arrayPar
}

//Exercício 4

function retornaMaiorNumero(array) {
   return Math.max.apply(null,array)
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3
   let arrayBool = []
   if (booleano1 && booleano2 && !booleano4){
      arrayBool.push(true)
   } else {
      arrayBool.push(false)
   } 
   if ((booleano1 && booleano2) || !booleano3){
      arrayBool.push(true)
   } else {
      arrayBool.push(false)
   }
   if ((booleano2 || booleano3) && (booleano4 || booleano1)){
      arrayBool.push(true)
   } else {
      arrayBool.push(false)
   }
   if (!(booleano2 && booleano3) || !(booleano1 && booleano3) ){
      arrayBool.push(true)
   } else {
      arrayBool.push(false)
   }
   if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)){
      arrayBool.push(true)
   } else {
      arrayBool.push(false)
   }
   return arrayBool
}

//Exercício 7

function retornaNNumerosPares(n) {
   let arrayPar = []
   let numpar = 0
   for(i=0;i<n;i++){
         numpar = (i*2)
         arrayPar.push(numpar)
   }
   return arrayPar
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if(a === b && b === c){
      return ("Equilátero")
   }
   if (a === b || a === c || b ===c){
      return ("Isósceles")
   } else {
      return ("Escaleno")
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorNumero
   let menorNumero
   let maiorDivisivelporMenor
   let diferenca
   if (num1>num2){
      maiorNumero = num1
      menorNumero = num2
   } else {
      maiorNumero = num2
      menorNumero = num1
   }
   if (maiorNumero%menorNumero==0){
      maiorDivisivelporMenor = true
   } else{
      maiorDivisivelporMenor = false
   }
   diferenca = maiorNumero - menorNumero
   let output ={
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca:  diferenca
   }
   return output
}

// Exercício 10

function segundoMaiorEMenor(array) {
   arrayNovo = []
   let maior = Math.max.apply(null, array);
   array.splice(array.indexOf(maior), 1); 
   let segundoMaior = Math.max.apply(null, array)
   arrayNovo.push(segundoMaior)
   let menor = Math.min.apply(null, array);
   array.splice(array.indexOf(menor), 1); 
   let segundoMenor = Math.min.apply(null, array)
   arrayNovo.push(segundoMenor)
   return arrayNovo
}

//Exercício 11

function ordenaArray(array) {
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (array[i] < array[j]) {
              temp = array[j];
              array[j] = array[i];
              array[i] = temp;
          }
      }
   }
      return array
}

// Exercício 12

function filmeFavorito() {
   let output ={
      nome: String("O Diabo Veste Prada"),
      ano: Number(2006),
      diretor: String("David Frankel"),
      atores: [String("Meryl Streep"), String("Anne Hathaway"), String("Emily Blunt"),String("Stanley Tucci")]
   }
   return output
}

// Exercício 13

function imprimeChamada() {
   let output ={
      nome: String("O Diabo Veste Prada"),
      ano: Number(2006),
      diretor: String("David Frankel"),
      atores: [String("Meryl Streep"), String("Anne Hathaway"), String("Emily Blunt"),String("Stanley Tucci")]
   }
   return `Venha assistir ao filme ${output.nome}, de ${output.ano}, dirigido por ${output.diretor} e estrelado por ${output.atores[0]}, ${output.atores[1]}, ${output.atores[2]}, ${output.atores[3]}.`
   
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   perimetro = (2*(lado1 + lado2))
   area = (lado1 * lado2)
   let output ={
      largura: lado1,
      altura: lado2,
      perimetro: perimetro,
      area: area
   }
   return output
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   let maior18 = arrayDePessoas.filter((pessoa) => {
      if(pessoa.idade >= 18){
         return true
      }
      return false
   }
   )
   return maior18
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   let menor18 = arrayDePessoas.filter((pessoa) => {
      if(pessoa.idade <= 18){
         return true
      }
      return false
   }
   )
   return menor18
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  const numerosMultiplicados = array.map((numero) =>{
     return (numero*2)
  }
  )
  return numerosMultiplicados
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const numerosMultiplicados = array.map((numero) =>{
      return String(numero*2)
   }
   )
   return numerosMultiplicados
}

// Exercício 17, letra C

function verificaParidade(array) {
   const numerosVerificados = array.map((numero) =>{
      if(numero%2==0){
         return String(`${numero} é par`)
      } else {
         return String(`${numero} é ímpar`)
      }
   }
   )
   return numerosVerificados
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const pessoasAutorizadas = pessoas.filter((pessoa) =>{
      if(pessoa.idade>14 && pessoa.idade<60 && pessoa.altura>1.5){
         return true
      }
   }
   )
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoasnaoAutorizadas = pessoas.filter((pessoa) =>{
      if(pessoa.idade<14 || pessoa.idade>60 || pessoa.altura<1.5){
         return true
      }
   }
   )
   return pessoasnaoAutorizadas
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
   const emailretorno = consultas.map((consulta) =>{
      if(consulta.cancelada==true && consulta.genero=="masculino"){
         return `Olá, Sr. ${consulta.nome}. Infelizmente sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
      } else if(consulta.cancelada==true && consulta.genero=="feminino"){
         return `Olá, Sra. ${consulta.nome}. Infelizmente sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
      } else if(consulta.cancelada==false && consulta.genero=="masculino"){
         return `Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
      } else {
         return `Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
      }
   })
   return emailretorno
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  contas.forEach((conta) =>{
   let totalCompras = 0
   for(i=0;i<conta.compras.length;i++){
      totalCompras += Number(conta.compras[i])
   }
   conta.saldoTotal -= totalCompras
  })
  return contas
}