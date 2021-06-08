function criarTarefa() {
 
    const addTarefa = document.getElementById("tarefa")
    
    if(addTarefa.value !== "")
    {
        const diaSemana = document.getElementById("dias-semana")
        const diaSelecionado = document.getElementById(diaSemana.value)
        diaSelecionado.innerHTML += `<p onclick="riscarTarefa(this)">• ${addTarefa.value}</p>`
        addTarefa.value = ""
        diaSemana.value = "domingo"
    } else{
        alert('Preencha o campo !');
        addTarefa.focus()
    }
}

function riscarTarefa(element) {
    element.style = "text-decoration: line-through"
}

function limparTarefas() {
    const limpaTarefa = document.getElementsByClassName("semanas")
    for (let index of limpaTarefa) {
        index.innerHTML = ""
    }
}
