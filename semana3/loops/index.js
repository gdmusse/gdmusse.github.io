/* 
Exercícios de interpretação de código
1)
Está somando os valores de 0,1,2,3,4. Soma é 10.

2)
a) 
19, 21, 23, 25, 27, 30.

b) 
Não. Usaria o for in.

Exercícios de escrita de código
3)
a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let valor of arrayOriginal){
    console.log(valor)
}

b)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let valor of arrayOriginal){
    console.log(valor/10)
}


c)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayPares = []
for(let valor of arrayOriginal){
    if(valor%2 === 0){
        arrayPares.push(valor)
    }
}
console.log(arrayPares)

d)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i=0; i<arrayOriginal.length; i++)
{
    console.log("O elemento do índex " + i + " é " + arrayOriginal[i])
}

e)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = 0
let valorMinimo = 150
for(let valor1 of arrayOriginal){
    if(valor1>valorMaximo){
        valorMaximo=valor1
    }
}
for(let valor2 of arrayOriginal){
    if(valor2<valorMinimo){
        valorMinimo=valor2
    }
}
console.log("O maior número é: " + valorMaximo + " e o menor é " + valorMinimo)
*/