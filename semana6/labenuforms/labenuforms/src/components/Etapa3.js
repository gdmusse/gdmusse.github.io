import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta pergunta={"1. Por que você não terminou um curso de graduação?"} />
        <PerguntaFechada
          pergunta={"2. Você fez algum curso complementar?"}
          opcoes={[
            "Curso Técnico",
            "Cursos de inglês",
            "Não fiz",
          ]}
        />
      </div>
    );
  }
}
