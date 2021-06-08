//Ínicio do jogo
console.log("Bem vindo ao jogo de Blackjack!")

//loop infinito para jogar infinitamente
for(;;) { if(confirm("Deseja iniciar uma nova rodada?" +
"\n"+
"Aperte Ctrl + Shift + K ( Command + Option + K) para abrir o console"
)) {
   let cartaUsuario
   let cartaComputador
   let maoUsuario = []
   let maoComputador = []
   let pontuacaoUsuario = 0
   let pontuacaoComputador = 0
   //Cartas do usuario
   console.log("Usuário compra as 2 cartas.")
   for(let i=0; i < 2 ; i++) {
      cartaUsuario = comprarCarta()
      maoUsuario.push(cartaUsuario.texto)
      pontuacaoUsuario = pontuacaoUsuario + cartaUsuario.valor
   }

   //Cartas do computador
   console.log("Computador compra as 2 cartas.")
   for(let i=0; i < 2 ; i++) {
      cartaComputador = comprarCarta()
      maoComputador.push(cartaComputador.texto)
      pontuacaoComputador = pontuacaoComputador + cartaComputador.valor
   }
   //Definição da pontuação
   console.log("Usuário - cartas: " + maoUsuario + " - Pontuação " + pontuacaoUsuario)
   console.log("Computador - cartas: " + maoComputador + " - Pontuação " + pontuacaoComputador)
   if(pontuacaoUsuario>pontuacaoComputador){
      console.log("O Usuário venceu!!")
   }
   if(pontuacaoUsuario<pontuacaoComputador){
      console.log("O Computador venceu!!")
   }
   if(pontuacaoUsuario == pontuacaoComputador){
      console.log("Empate!!")
   }
   console.log("--------------------------------------------")
} else {
	console.log("O jogo acabou.")
   break
}
}