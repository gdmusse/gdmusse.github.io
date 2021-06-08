const operacao = process.argv[2];
const numero1 = process.argv[3];
const numero2 = process.argv[4];

if (process.argv[2] && process.argv[3] && process.argv[4]) {
  switch (operacao) {
    case "soma":
      console.log(
        "\x1b[32m%s\x1b[0m",
        `Total da soma:`,
        Number(numero1) + Number(numero2)
      );
      break;
    case "subtracao":
      console.log(
        "\x1b[32m%s\x1b[0m",
        `Total da subtração:`,
        Number(numero1) - Number(numero2)
      );
      break;
    case "multiplicacao":
      console.log(
        "\x1b[32m%s\x1b[0m",
        `Total da multiplicação:`,
        Number(numero1) * Number(numero2)
      );
      break;
    case "divisao":
      console.log(
        "\x1b[32m%s\x1b[0m",
        `Total da divisão:`,
        Number(numero1) / Number(numero2)
      );
      break;
    default:
      break;
  }
} else {
  console.log(
    "\x1b[31m%s\x1b[0m",
    `Esperava 3 parâmetros, recebi menos que isso.`
  );
}
