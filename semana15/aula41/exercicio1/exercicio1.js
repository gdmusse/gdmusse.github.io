const nome = process.argv[2];
const idade = Number(process.argv[3]);
const idadeEmSeteAnos = Number(idade + 7);

if (process.argv[2] && process.argv[3]) {
  console.log(
    "\x1b[32m%s\x1b[0m",
    `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeEmSeteAnos}.`
  );
} else {
  console.log("\x1b[31m%s\x1b[0m", `Esperava 2 parâmetros, só recebi um.`);
}
