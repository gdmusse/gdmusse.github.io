/* a) Dá um erro, dizendo que tipo number não é atribuível a um tipo string.
b) colocando number | string no tipo

c, d)

enum coresArcoiris  {
VERMELHO = "Vermelho",
LARANJA = "Laranja",
AMARELO = "Amarelo",
VERDE = "Verde",
AZUL = "Azul",
ANIL = "Anil",
VIOLETA = "Violeta"
}
type pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: coresArcoiris
}
const pessoa1: pessoa = {
    nome: "Teste",
    idade: 5,
    corFavorita: coresArcoiris.AMARELO
}
const pessoa2: pessoa = {
    nome: "Teste2",
    idade: 6,
    corFavorita: coresArcoiris.VERMELHO
}
const pessoa3: pessoa = {
    nome: "Teste3",
    idade: 7,
    corFavorita:coresArcoiris.VIOLETA
}

console.log(pessoa1, pessoa2, pessoa3)

*/