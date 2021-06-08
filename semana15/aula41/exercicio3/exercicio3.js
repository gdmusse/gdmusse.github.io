const tarefaAdd = "\n" + process.argv[2];

const fs = require("fs");

try {
  fs.appendFileSync("tarefas.txt", tarefaAdd, "utf8");
  const tarefas = fs.readFileSync("tarefas.txt", "utf8");
  console.log("Tarefa adicionada com sucesso!");
  console.log("Tarefas:\n" + tarefas);
} catch (err) {
  console.error(err);
}
