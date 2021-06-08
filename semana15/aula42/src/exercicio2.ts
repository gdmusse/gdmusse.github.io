/* /* 
a) entrada é um array, a saida é um objeto com o maior numero do array, o menor e o valor médio do array.
*/
type amostra = {
    numeros: number[], 
    obterEstatisticas: (numeros: number[]) => {}
}

function obterEstatisticas(numeros: number[]) {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
    let soma: number = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas: {maior: number, menor: number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}

const amostraDeIdades: amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas : obterEstatisticas
}


console.log("amostraDeIdades:", amostraDeIdades)
console.log("estatisticas da amostra:", obterEstatisticas(amostraDeIdades.numeros))
